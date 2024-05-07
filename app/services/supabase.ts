import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || "";
// const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON || "";
//

const supabaseUrl = "https://ejuzihaugcqnnnpplrue.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdXppaGF1Z2Nxbm5ucHBscnVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MDQ1ODYsImV4cCI6MjAyOTk4MDU4Nn0.xYCfUZlxvlXjU6aAtKKoSeIYg6tB0HiAZwCposdTyLM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
