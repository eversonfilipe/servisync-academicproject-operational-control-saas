// NOTE: You will need to add the Supabase JS client to your project.
// You can often do this via a script tag in your index.html if you don't have a package manager.
// e.g., <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
// For this environment, we will assume `supabase` is available on the window object.

const { createClient } = (window as any).supabase;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
