import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { format } from 'date-fns'
import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import { urlFor } from '@/sanity/lib/image'

// Define the props interface
interface PageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

// Fetch post data
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    body,
    mainImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt,
      caption
    },
    author->{
      name,
      image {
        asset->{
          _id,
          url
        }
      },
      bio
    },
    categories[]->{
      title,
      slug
    }
  }`

  const post = await client.fetch(query, { slug })
  return post
}

// Generate static params
export async function generateStaticParams() {
  const query = `*[_type == "post"] {
    slug {
      current
    }
  }`
  
  const posts = await client.fetch(query)
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }))
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: `${post.title} | My Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : [],
    },
  }
}

// Main page component
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const imageUrl = post.mainImage 
    ? urlFor(post.mainImage).width(1200).url()
    : null

  const authorImageUrl = post.author?.image
    ? urlFor(post.author.image).width(100).url()
    : null

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 mt-20 ">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          {post.categories?.map((category: any) => (
            <span 
              key={category.slug.current} 
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {category.title}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {authorImageUrl && (
              <Image
                src={authorImageUrl}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            )}
            <div>
              <p className="font-medium">{post.author?.name || 'Unknown Author'}</p>
              <p className="text-gray-600 text-sm">
                {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
              </p>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            {Math.ceil(post.body?.length / 5)} min read
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {imageUrl && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={post.mainImage.alt || post.title}
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
          {post.mainImage.caption && (
            <p className="text-center text-gray-600 mt-2 text-sm">
              {post.mainImage.caption}
            </p>
          )}
        </div>
      )}

      {/* Excerpt */}
      {post.excerpt && (
        <div className="mb-8 text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4 py-2">
          {post.excerpt}
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <PortableText value={post.body} />
      </div>

      {/* Author Bio */}
      {post.author?.bio && (
        <div className="border-t pt-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">About the Author</h2>
          <div className="flex items-start gap-4">
            {authorImageUrl && (
              <Image
                src={authorImageUrl}
                alt={post.author.name}
                width={80}
                height={80}
                className="rounded-full flex-shrink-0"
              />
            )}
            <div>
              <h3 className="text-xl font-semibold mb-2">{post.author.name}</h3>
              <p className="text-gray-700">{post.author.bio}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}