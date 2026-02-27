import { defineConfig, loadConfigFromFile } from "vite";
import type { Plugin, PluginOption, ConfigEnv } from "vite";
import path from "path";
import {
  makeTagger,
  injectedGuiListenerPlugin,
  injectOnErrorPlugin,
  monitorPlugin,
} from "miaoda-sc-plugin";

const env: ConfigEnv = { command: "serve", mode: "development" };
const configFile = path.resolve(__dirname, "vite.config.ts");
const result = await loadConfigFromFile(env, configFile);
const userConfig = result?.config;

const hmrTogglePlugin: Plugin = {
  name: "hmr-toggle",
  configureServer(server) {
    let hmrEnabled = true;

    const send = server.ws.send.bind(server.ws);
    server.ws.send = (payload: any) => {
      if (hmrEnabled) {
        return send(payload);
      }
      console.log("[HMR disabled] skipped payload:", payload?.type);
      return undefined;
    };

    server.middlewares.use("/innerapi/v1/sourcecode/__hmr_off", (_req, res) => {
      hmrEnabled = false;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ status: 0, msg: "HMR disabled" }));
    });

    server.middlewares.use("/innerapi/v1/sourcecode/__hmr_on", (_req, res) => {
      hmrEnabled = true;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ status: 0, msg: "HMR enabled" }));
    });

    server.middlewares.use("/innerapi/v1/sourcecode/__hmr_reload", (_req, res) => {
      if (hmrEnabled) {
        server.ws.send({ type: "full-reload", path: "*" });
      }
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ status: 0, msg: "Manual full reload triggered" }));
    });
  },
  load(id) {
    if (id !== "virtual:after-update") {
      return null;
    }
    return `
if (import.meta.hot) {
  import.meta.hot.on('vite:afterUpdate', () => {
    window.postMessage({ type: 'editor-update' }, '*');
  });
}
`;
  },
  transformIndexHtml(html) {
    return {
      html,
      tags: [
        {
          tag: "script",
          attrs: {
            type: "module",
            src: "/@id/virtual:after-update",
          },
          injectTo: "body",
        },
      ],
    };
  },
};

export default defineConfig({
  ...userConfig,
  cacheDir: path.resolve(__dirname, "node_modules/.vite"),
  build: {
    ...(userConfig?.build || {}),
    chunkSizeWarningLimit: 2000,
  },
  plugins: [
    makeTagger() as unknown as PluginOption,
    injectedGuiListenerPlugin({
      path: "https://miaoda-resource-static.s3cdn.medo.dev/common/v2/injected.js",
    }) as unknown as PluginOption,
    injectOnErrorPlugin() as unknown as PluginOption,
    ...((userConfig?.plugins as PluginOption[]) || []),
    hmrTogglePlugin,
    monitorPlugin({
      scriptSrc: "https://miaoda-resource-static.s3cdn.medo.dev/sentry/browser.sentry.min.js",
      sentryDsn: "https://e3c07b90fcb5207f333d50ac24a99d3e@sentry.miaoda.cn/233",
      environment: "undefined",
      appId: "app-9dfi9jpj51xd",
    }) as unknown as PluginOption,
  ],
});
