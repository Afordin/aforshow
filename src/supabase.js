import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://bfbnlgbiigcabrdmrjeb.supabase.co'

const supabaseAnonKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmYm5sZ2JpaWdjYWJyZG1yamViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3NDAzMDcsImV4cCI6MjAwMzMxNjMwN30.HjCLMge_-WegZY2T1Rm8NB1jzW1Pt9RUaZq0nlZ0Xb4'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
