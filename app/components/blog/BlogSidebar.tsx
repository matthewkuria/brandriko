'use client'

import { useState } from 'react'
import { useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import { recentBlogPostsQuery } from '@/sanity/lib/queries'

interface Category {
  _id: string
  title: string
  slug: { current: string }
  count: number
}

interface BlogSidebarProps {
  categories: Category[]
}

export default function BlogSidebar({ categories }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [recentPosts, setRecentPosts] = useState<any[]>([])

  useEffect(() => {
    async function fetchRecentPosts() {
      const posts = await client.fetch(recentBlogPostsQuery)
      setRecentPosts(posts)
    }
    fetchRecentPosts()
  }, [])

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-lg mb-4">Search Articles</h3>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search blog posts..."
                className="input input-bordered w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-primary">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-lg mb-4">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div
                key={category._id}
                className="flex justify-between items-center hover:bg-base-200 p-2 rounded cursor-pointer transition-colors"
              >
                <span className="font-medium">{category.title}</span>
                <span className="badge badge-primary badge-sm">
                  {category.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-lg mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {recentPosts.slice(0, 5).map((post) => (
              <div key={post._id} className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-base-300 rounded"></div>
                </div>
                <div>
                  <h4 className="font-medium hover:text-primary transition-colors">
                    <a href={`/blog/${post.slug.current}`}>
                      {post.title}
                    </a>
                  </h4>
                  <p className="text-sm text-base-content/60">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="card bg-gradient-primary text-primary-content shadow-lg">
        <div className="card-body text-center">
          <i className="fa-solid fa-envelope text-3xl mb-4"></i>
          <h3 className="card-title text-lg">Subscribe to Newsletter</h3>
          <p className="text-sm opacity-90 mb-4">
            Get the latest digital marketing insights delivered to your inbox
          </p>
          <div className="form-control">
            <input
              type="email"
              placeholder="Your email address"
              className="input input-bordered w-full mb-3"
            />
            <button className="btn btn-secondary w-full">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}