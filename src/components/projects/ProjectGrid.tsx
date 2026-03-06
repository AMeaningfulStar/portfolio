import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  )
}