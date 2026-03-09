import { pageSections } from '@template/sections'

import BlogGrid from '@components/blog/BlogGrid'

import { blogPosts } from '@data/blog'

export default function BlogPage() {
  const section = pageSections.blog

  return (
    <article className={`${section.className} active`}>
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <BlogGrid posts={blogPosts} />
    </article>
  )
}
