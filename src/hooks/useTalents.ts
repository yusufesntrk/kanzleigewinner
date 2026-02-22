import { useState, useEffect } from 'react'
import { supabase, TENANT_ID } from '../lib/supabase'

export interface TalentSkill {
  id: string
  skill_name: string
  proficiency_level: number | null
  years_experience: number | null
}

export interface Talent {
  id: string
  current_title: string | null
  current_company: string | null
  city: string | null
  country: string | null
  availability_status: string | null
  created_at: string
  candidate_skills: TalentSkill[]
}

export function useTalents() {
  const [talents, setTalents] = useState<Talent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTalents() {
      const { data, error } = await supabase
        .from('candidates')
        .select(`
          id, current_title, current_company, city, country,
          availability_status, created_at,
          candidate_skills(id, skill_name, proficiency_level, years_experience)
        `)
        .eq('tenant_id', TENANT_ID)
        .order('created_at', { ascending: false })

      if (error) {
        setError(error.message)
      } else {
        setTalents((data || []) as unknown as Talent[])
      }
      setLoading(false)
    }
    fetchTalents()
  }, [])

  return { talents, loading, error }
}
