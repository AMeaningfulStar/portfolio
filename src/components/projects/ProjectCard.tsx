import type { ProjectItem } from '@/data/projects'

type ProjectCardProps = {
  project: ProjectItem
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="project-item active">
      <a href={project.href ?? '#'}>
        <figure className="project-img">
          <div className="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
          />
        </figure>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-category">
          {project.category.join(' · ')}
        </p>
      </a>
    </li>
  )
}