export type BlogPost = {
  id: string
  title: string
  category: string
  date: string
  image: string
  alt: string
  href?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'React로 템플릿을 컴포넌트 구조로 분리한 과정',
    category: 'React',
    date: 'Mar 07, 2026',
    image: 'https://placehold.co/600x400',
    alt: 'React 블로그 카드 썸네일',
    href: '#',
  },
  {
    id: 'blog-2',
    title: 'Next.js 프로젝트에서 유지보수하기 좋은 폴더 구조 정리',
    category: 'Next.js',
    date: 'Mar 05, 2026',
    image: 'https://placehold.co/600x400',
    alt: 'Next.js 블로그 카드 썸네일',
    href: '#',
  },
  {
    id: 'blog-3',
    title: '포트폴리오 프로젝트를 Git 커밋 단위로 나누어 개발한 이유',
    category: 'Git',
    date: 'Mar 01, 2026',
    image: 'https://placehold.co/600x400',
    alt: 'Git 블로그 카드 썸네일',
    href: '#',
  },
]