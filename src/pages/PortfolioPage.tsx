import ProjectFilter from '@components/projects/ProjectFilter'
import ProjectGrid from '@components/projects/ProjectGrid'
import {
  projects,
  type ProjectFilterCategory,
} from '@data/projects'
import { pageSections } from '@template/sections'
import { useMemo, useState } from 'react'

export default function PortfolioPage() {
  const section = pageSections.portfolio

  const [selectedCategory, setSelectedCategory] =
    useState<ProjectFilterCategory>('all')

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return projects
    }

    return projects.filter((project) =>
      project.category.includes(selectedCategory)
    )
  }, [selectedCategory])

  const portfolioHtmlWithoutFilterAndList = section.innerHtml
    .replace(/<ul class="filter-list">[\s\S]*?<\/ul>/, '')
    .replace(/<ul class="project-list">[\s\S]*?<\/ul>/, '')

  return (
    <article className={`${section.className} active`}>
      <div
        dangerouslySetInnerHTML={{
          __html: portfolioHtmlWithoutFilterAndList,
        }}
      />

      <ProjectFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProjectGrid projects={filteredProjects} />
    </article>
  )
}