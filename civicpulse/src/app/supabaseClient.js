import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://otuhhpbhjsctwohymimt.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90dWhocGJoanNjdHdvaHltaW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwODc2MjksImV4cCI6MjA4NjY2MzYyOX0.ooFBgsHuI0JiP78b6yFHzujx9PnKtbQInjfTtmw4SJM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
