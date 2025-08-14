import { useEffect, useState } from 'react'
import http from '@/lib/http'
import type { Project } from '@/types'

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  useEffect(() => { (async () => {
    try { const { data } = await http.get('/api/v1/projects'); setProjects(data.items ?? data) } catch {}
  })() }, [])

  return (
    <div style={{maxWidth: 960, margin: '40px auto'}}>
      <h2>Projects</h2>
      <ul>
        {projects.map(p => (<li key={p.id}><b>{p.key}</b> — {p.name} ({p.status})</li>))}
      </ul>
    </div>
  )
}