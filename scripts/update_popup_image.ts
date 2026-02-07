
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase environment variables");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const imageUrl = "https://uploads.onecompiler.io/43bfq86cy/44cvtxece/WhatsApp%20Image%202026-02-07%20at%201.04.41%20PM.jpeg";

async function updatePopups() {
    console.log("Updating popups with new image URL...");

    // Update Promo Popup (popup_image table)
    try {
        const { data: existingPromo } = await supabase
            .from('popup_image')
            .select('*')
            .limit(1)
            .maybeSingle();

        const promoData = {
            image_url: imageUrl,
            duration: 10,
            is_enabled: true,
            updated_at: new Date().toISOString()
        };

        if (existingPromo) {
            await supabase.from('popup_image').update(promoData).eq('id', existingPromo.id);
            console.log("Updated existing Promo Popup");
        } else {
            await supabase.from('popup_image').insert([promoData]);
            console.log("Inserted new Promo Popup");
        }
    } catch (error) {
        console.error("Error updating Promo Popup:", error);
    }

    // Update Welcome Popup (popup_settings table)
    try {
        const { data: existingWelcome } = await supabase
            .from('popup_settings')
            .select('*')
            .limit(1)
            .maybeSingle();

        const welcomeData = {
            image_url: imageUrl,
            enabled: true,
            display_duration: 10000,
            updated_at: new Date().toISOString()
        };

        if (existingWelcome) {
            await supabase.from('popup_settings').update(welcomeData).eq('id', existingWelcome.id);
            console.log("Updated existing Welcome Popup");
        } else {
            await supabase.from('popup_settings').insert([welcomeData]);
            console.log("Inserted new Welcome Popup");
        }
    } catch (error) {
        console.error("Error updating Welcome Popup:", error);
    }

    console.log("Done!");
}

updatePopups();
