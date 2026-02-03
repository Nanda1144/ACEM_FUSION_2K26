import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { initializeDatabase } from "./db/mongodb";

// Initialize MongoDB connection and database
initializeDatabase()
  .then(() => {
    console.log('✅ Application initialized successfully');
  })
  .catch((error) => {
    console.error('❌ Failed to initialize application:', error);
    // Show user-friendly error message
    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; text-align: center; background: #0A0F1E; color: white;">
          <h1 style="font-size: 2rem; margin-bottom: 1rem; color: #FF5555;">Database Connection Error</h1>
          <p style="font-size: 1.2rem; margin-bottom: 2rem; max-width: 600px;">
            Failed to connect to MongoDB Atlas. Please check your connection string in the .env file.
          </p>
          <div style="background: #1a1f2e; padding: 20px; border-radius: 8px; max-width: 800px; text-align: left;">
            <h2 style="font-size: 1.2rem; margin-bottom: 1rem; color: #00D9FF;">Setup Instructions:</h2>
            <ol style="line-height: 2;">
              <li>Create a MongoDB Atlas account at <a href="https://www.mongodb.com/cloud/atlas/register" target="_blank" style="color: #00D9FF;">mongodb.com</a></li>
              <li>Create a free cluster (M0)</li>
              <li>Get your connection string</li>
              <li>Create a .env file in the project root</li>
              <li>Add: <code style="background: #0A0F1E; padding: 2px 8px; border-radius: 4px;">VITE_MONGODB_URI=your_connection_string</code></li>
              <li>Add: <code style="background: #0A0F1E; padding: 2px 8px; border-radius: 4px;">VITE_MONGODB_DB_NAME=acem_db</code></li>
              <li>Restart the application</li>
            </ol>
            <p style="margin-top: 1rem; color: #888;">See MONGODB_SETUP_GUIDE.md for detailed instructions.</p>
          </div>
          <button onclick="location.reload()" style="margin-top: 2rem; padding: 12px 24px; background: #00D9FF; color: #0A0F1E; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer; font-weight: bold;">
            Retry Connection
          </button>
        </div>
      `;
    }
  });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </StrictMode>
);
