import type { BlogPost } from '@/data/blog'
import BlogCard from './BlogCard'

type Props = {
  posts: BlogPost[]
}

export default function BlogGrid({ posts }: Props) {
  return (
    <section className="blog-posts">
      <ul className="blog-posts-list">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}
