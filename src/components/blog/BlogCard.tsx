import type { BlogPost } from '@/data/blog'

type Props = {
  post: BlogPost
}

export default function BlogCard({ post }: Props) {
  return (
    <li className="blog-post-item">
      <a href={post.href ?? '#'}>
        <figure className="blog-banner-box">
          <img src={post.image} alt={post.alt} loading="lazy" />
        </figure>

        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{post.category}</p>
            <span className="dot"></span>
            <time>{post.date}</time>
          </div>

          <h3 className="h3 blog-item-title">{post.title}</h3>
        </div>
      </a>
    </li>
  )
}
