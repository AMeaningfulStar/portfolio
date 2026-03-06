import type { ProjectItem } from '@/data/projects'
import ProjectCard from './ProjectCard'

type ProjectGridProps = {
  projects: ProjectItem[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  )
}