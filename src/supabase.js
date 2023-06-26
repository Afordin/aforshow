import { createClient } from '@supabase/supabase-js'
const supabaseUrl =
    import.meta.env.PUBLIC_SUPABASE_URL ||
    'https://bfbnlgbiigcabrdmrjeb.supabase.co'

const supabaseAnonKey =
    impoer.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzcG93ZW90b3hia2xkbnRxaHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4MjEyOTIsImV4cCI6MjAwMzM5NzI5Mn0.ElkPuiLwyUd8b9UsHG7r2-y5JpAAv4fMOHJqMk6yp1w'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
