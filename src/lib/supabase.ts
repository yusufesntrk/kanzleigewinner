import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aztqhtluvomqnxdavjxp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6dHFodGx1dm9tcW54ZGF2anhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NjI5NDgsImV4cCI6MjA4MTQzODk0OH0.9tIFhF6irpIa0Oec2W0bTpzxaWzgQRoyk0LfJl4etVM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export const TENANT_ID = '00000000-0000-0000-0000-000000000002'
