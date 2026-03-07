import BlogCard from './BlogCard'

type BlogItem = {
  title: string
  category: string
  date: string
  image: string
  alt: string
  href?: string
}

type Props = {
  posts: BlogItem[]
}

export default function BlogGrid({ posts }: Props) {
  return (
    <section className="blog-posts">
      <ul className="blog-posts-list">
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </ul>
    </section>
  )
}
