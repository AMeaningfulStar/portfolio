import BlogGrid from '@components/blog/BlogGrid'
import { pageSections } from '@template/sections'

export default function BlogPage() {
  const section = pageSections.blog

  const posts = [
    {
      title: 'React로 템플릿을 컴포넌트 구조로 분리한 과정',
      category: 'React',
      date: 'Mar 07, 2026',
      image: 'https://placehold.co/600x400',
      alt: 'React 블로그 카드 썸네일',
      href: '#',
    },
    {
      title: 'Next.js 프로젝트에서 유지보수하기 좋은 폴더 구조 정리',
      category: 'Next.js',
      date: 'Mar 05, 2026',
      image: 'https://placehold.co/600x400',
      alt: 'Next.js 블로그 카드 썸네일',
      href: '#',
    },
    {
      title: '포트폴리오 프로젝트를 Git 커밋 단위로 나누어 개발한 이유',
      category: 'Git',
      date: 'Mar 01, 2026',
      image: 'https://placehold.co/600x400',
      alt: 'Git 블로그 카드 썸네일',
      href: '#',
    },
  ]

  return (
    <article className={`${section.className} active`}>
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <BlogGrid posts={posts} />
    </article>
  )
}
