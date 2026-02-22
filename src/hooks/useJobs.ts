import { useState, useEffect } from 'react'
import { supabase, TENANT_ID } from '../lib/supabase'

export interface Job {
  id: string
  title: string
  req_code: string | null
  description: string | null
  status: string | null
  employment_type: string | null
  remote_option: string | null
  headcount: number | null
  salary_range: { min: number; max: number; currency: string } | null
  department: { id: string; name: string } | null
  location: { id: string; name: string; city: string | null } | null
  created_at: string
}

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchJobs() {
      const { data, error } = await supabase
        .from('job_requisitions')
        .select(`
          id, title, req_code, description, status, employment_type,
          remote_option, headcount, salary_range, created_at,
          department:departments(id, name),
          location:locations(id, name, city)
        `)
        .eq('tenant_id', TENANT_ID)
        .eq('status', 'open')
        .order('created_at', { ascending: false })

      if (error) {
        setError(error.message)
      } else {
        setJobs((data || []) as unknown as Job[])
      }
      setLoading(false)
    }
    fetchJobs()
  }, [])

  return { jobs, loading, error }
}

export function useJobDetail(id: string | undefined) {
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    async function fetchJob() {
      const { data, error } = await supabase
        .from('job_requisitions')
        .select(`
          id, title, req_code, description, status, employment_type,
          remote_option, headcount, salary_range, created_at,
          department:departments(id, name),
          location:locations(id, name, city)
        `)
        .eq('id', id)
        .eq('tenant_id', TENANT_ID)
        .single()

      if (error) {
        setError(error.message)
      } else {
        setJob(data as unknown as Job)
      }
      setLoading(false)
    }
    fetchJob()
  }, [id])

  return { job, loading, error }
}
