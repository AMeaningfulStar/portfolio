import type { ProjectFilterCategory } from '@data/projects'
import { PROJECT_FILTER_OPTIONS } from '@data/projects'

type ProjectFilterProps = {
  selectedCategory: ProjectFilterCategory
  onSelectCategory: (category: ProjectFilterCategory) => void
}

export default function ProjectFilter({
  selectedCategory,
  onSelectCategory,
}: ProjectFilterProps) {
  return (
    <ul className="filter-list">
      {PROJECT_FILTER_OPTIONS.map((option) => (
        <li className="filter-item" key={option.value}>
          <button
            type="button"
            className={selectedCategory === option.value ? 'active' : ''}
            onClick={() => onSelectCategory(option.value)}
          >
            {option.label}
          </button>
        </li>
      ))}
    </ul>
  )
}