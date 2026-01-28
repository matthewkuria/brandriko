"use client";

import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { urlFor } from '@/sanity/lib/image'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
   image?: {
    _type: 'image'
    alt: string
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  publishedAt: string
  author: {
    name: string
    image: any
  }
  categories: Array<{
    title: string
    slug: { current: string }
  }>
}

interface BlogGridProps {
  posts: BlogPost[]
  priorityIndices?: number[] // For LCP optimization
}

// Default image dimensions and quality
const IMAGE_CONFIG = {
  card: {
    width: 600,
    height: 400,
    quality: 85,
    format: 'webp' as const,
  },
  avatar: {
    width: 40,
    height: 40,
    quality: 80,
    format: 'webp' as const,
  }
}

export default function BlogGrid({ posts, priorityIndices = [0, 1, 2] }: BlogGridProps) {
  if (!posts?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No blog posts found.</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => {
        const isPriority = priorityIndices.includes(index)
        const imageUrl = post.image
          ? urlFor(post.image)
              .width(IMAGE_CONFIG.card.width)
              .url()
          : null

        const avatarUrl = post.author?.image
          ? urlFor(post.author.image)
              .width(IMAGE_CONFIG.avatar.width)
              .url()
          : null

        return (
          <article 
            key={post._id} 
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
          >
            {/* Image Container */}
            <figure className="relative h-48 overflow-hidden bg-gray-100">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={post.title || 'Blog post image'}
                  width={IMAGE_CONFIG.card.width}
                  height={IMAGE_CONFIG.card.height}
                  priority={isPriority}
                  loading={isPriority ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={post.image ? urlFor(post.image)
                    .width(20)
                    .url() : undefined}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-400">No image</span>
                </div>
              )}
            </figure>

            {/* Content */}
            <div className="card-body p-6">
              {/* Categories */}
              {post.categories?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.slice(0, 2).map((cat) => (
                    <Link
                      key={cat.slug.current}
                      href={`/category/${cat.slug.current}`}
                      className="badge badge-primary hover:badge-secondary transition-colors"
                    >
                      {cat.title}
                    </Link>
                  ))}
                  {post.categories.length > 2 && (
                    <span className="badge badge-outline">
                      +{post.categories.length - 2}
                    </span>
                  )}
                </div>
              )}

              {/* Title */}
              <h2 className="card-title text-lg font-semibold mb-2">
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="hover:text-primary transition-colors line-clamp-2"
                  title={post.title}
                >
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-gray-600 line-clamp-3 mb-4 text-sm">
                  {post.excerpt}
                </p>
              )}

              {/* Footer */}
              <div className="card-actions justify-between items-center mt-auto pt-4 border-t">
                <div className="flex items-center gap-3">
                  {/* Author Avatar */}
                  <div className="flex items-center gap-2">
                    {avatarUrl ? (
                      <div className="avatar">
                        <div className="w-8 h-8 rounded-full overflow-hidden relative">
                          <Image
                            src={avatarUrl}
                            alt={post.author.name || 'Author'}
                            width={IMAGE_CONFIG.avatar.width}
                            height={IMAGE_CONFIG.avatar.height}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-xs text-gray-500">
                          {post.author?.name?.charAt(0) || 'A'}
                        </span>
                      </div>
                    )}
                    <div>
                      {post.author?.name && (
                        <p className="text-sm font-medium line-clamp-1">
                          {post.author.name}
                        </p>
                      )}
                      <p className="text-xs text-gray-500">
                        {post.publishedAt
                          ? format(new Date(post.publishedAt), 'MMM dd, yyyy')
                          : 'No date'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Read Button */}
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="btn btn-primary btn-sm hover:btn-secondary transition-all"
                  aria-label={`Read ${post.title}`}
                >
                  Read
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

// Skeleton Loader
export function BlogGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card bg-base-100 shadow-lg overflow-hidden">
          <div className="h-48 bg-gray-200 animate-pulse" />
          <div className="card-body p-6 space-y-4">
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse" />
            </div>
            <div className="flex justify-between items-center pt-4 border-t">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
                <div className="space-y-1">
                  <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
              <div className="h-8 w-16 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}