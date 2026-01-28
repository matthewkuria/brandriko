import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { format } from 'date-fns'
import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import { urlFor } from '@/sanity/lib/image'

// Correct PageProps type
interface PageProps {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

// Fetch a single post by slug
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    body,
    image {
      alt,
      asset->{
        _id,
        url
      }
    },
    author->{
      name,
      image{
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

// Generate static paths
export async function generateStaticParams() {
  const query = `*[_type == "post"] { slug { current } }`
  const posts = await client.fetch(query)
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }))
}

// Metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = params
  const post = await getPost(slug)
  if (!post) return { title: 'Post Not Found' }

  // Ensure Google-friendly length
  const seoTitle =
    post.title.length > 60 ? post.title.slice(0, 57) + '...' : post.title
  const seoDescription =
    post.excerpt && post.excerpt.length > 160
      ? post.excerpt.slice(0, 157) + '...'
      : post.excerpt

  return {
    title: `${seoTitle} | Brandriko Digital Solutions`,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: post.image?.asset?.url ? [post.image.asset.url] : [],
      type: 'article',
    },
  }
}

// Main blog post page
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params
  const post = await getPost(slug)

  if (!post) notFound()

  const imageUrl = post.image ? urlFor(post.image).width(1200).url() : null
  const authorImageUrl = post.author?.image
    ? urlFor(post.author.image).width(100).url()
    : null

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Post Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories?.map((cat: any) => (
            <span
              key={cat.slug.current}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {cat.title}
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
            alt={post.image.alt || post.title}
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
        </div>
      )}

      {/* Excerpt */}
      {post.excerpt && (
        <div className="mb-8 text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4 py-2">
          {post.excerpt}
        </div>
      )}

      {/* Body */}
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

      {/* CTA Section */}
      <div className="mt-16 p-8 bg-blue-50 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Grow Your Business Online?
        </h2>
        <p className="mb-6 text-gray-700">
          Contact Brandriko Digital Solutions today and get a professional website
          designed for your Nakuru business.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </article>
  )
}
