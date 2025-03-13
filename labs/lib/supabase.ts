import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL="https://jpaeinlggoeluarnifrj.supabase.co"
const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwYWVpbmxnZ29lbHVhcm5pZnJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNzQ0ODIsImV4cCI6MjA1Njg1MDQ4Mn0.VBmCAYuVOPuQLvp0Pc14M2pd9DnU3M8Skvb4zlZ9G9Y"

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY)

export default supabase;
