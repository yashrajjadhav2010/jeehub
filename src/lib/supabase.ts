import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Check your environment variables.');
}

let formattedUrl = supabaseUrl ? supabaseUrl.trim().replace(/['"]/g, '') : '';
if (formattedUrl) {
  if (!formattedUrl.startsWith('http')) {
    formattedUrl = `https://${formattedUrl}`;
  }
  // Remove /rest/v1 or trailing slashes if user accidentally added them
  formattedUrl = formattedUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
}

// Provide fallback placeholder to prevent crash if env variables are not yet set
export const supabase = createClient(
  formattedUrl || 'https://placeholder.supabase.co', 
  (supabaseAnonKey ? supabaseAnonKey.trim().replace(/['"]/g, '') : '') || 'placeholder'
);
