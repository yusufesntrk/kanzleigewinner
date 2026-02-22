import { useState, useEffect } from 'react'
import { supabase, TENANT_ID } from '../lib/supabase'

export interface TalentSkill {
  id: string
  skill_name: string
  proficiency_level: number | null
  years_experience: number | null
}

export interface TalentExperience {
  id: string
  position_title: string | null
  company_name: string | null
  start_date: string | null
  end_date: string | null
  is_current: boolean | null
  description: string | null
}

export interface TalentEducation {
  id: string
  degree: string | null
  field_of_study: string | null
  institution: string | null
  graduation_year: number | null
  grade: string | null
}

export interface TalentLanguage {
  id: string
  language: string | null
  proficiency: string | null
}

export interface TalentCertification {
  id: string
  name: string | null
  issuing_organization: string | null
  issue_date: string | null
  expiry_date: string | null
}

export interface TalentDetail {
  id: string
  current_title: string | null
  current_company: string | null
  city: string | null
  country: string | null
  availability_status: string | null
  created_at: string
  candidate_skills: TalentSkill[]
  candidate_experience: TalentExperience[]
  candidate_education: TalentEducation[]
  candidate_languages: TalentLanguage[]
  candidate_certifications: TalentCertification[]
}

export function useTalentDetail(id: string | undefined) {
  const [talent, setTalent] = useState<TalentDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    async function fetchTalent() {
      const { data, error } = await supabase
        .from('candidates')
        .select(`
          id, current_title, current_company, city, country,
          availability_status, created_at,
          candidate_skills(id, skill_name, proficiency_level, years_experience),
          candidate_experience(id, position_title, company_name, start_date, end_date, is_current, description),
          candidate_education(id, degree, field_of_study, institution, graduation_year, grade),
          candidate_languages(id, language, proficiency),
          candidate_certifications(id, name, issuing_organization, issue_date, expiry_date)
        `)
        .eq('id', id)
        .eq('tenant_id', TENANT_ID)
        .single()

      if (error) {
        setError(error.message)
      } else {
        setTalent(data as unknown as TalentDetail)
      }
      setLoading(false)
    }
    fetchTalent()
  }, [id])

  return { talent, loading, error }
}
