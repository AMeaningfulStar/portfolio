import { sidebarHtml } from '@template/sections'
import { useMemo, useState } from 'react'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  // sidebarHtml은 정적이므로 memo로 고정
  const html = useMemo(() => sidebarHtml, [])

  const onClick: React.MouseEventHandler<HTMLElement> = (e) => {
    const target = e.target as HTMLElement | null
    // 원본처럼 data-sidebar-btn 클릭 시 토글
    if (target?.closest?.('[data-sidebar-btn]')) {
      setOpen((v) => !v)
    }
  }

  return (
    <aside className={`sidebar ${open ? 'active' : ''}`} onClick={onClick}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </aside>
  )
}