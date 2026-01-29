import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { format } from 'date-fns'
import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import { urlFor } from '@/sanity/lib/image'

// Correct PageProps type for App Router
interface PageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }> 
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
  
  if (!posts || posts.length === 0) {
    return []
  }
  
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }))
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Brandriko Digital Solutions',
      description: 'The requested blog post could not be found.',
    }
  }

  // Ensure Google-friendly length
  const seoTitle = post.title.length > 60 
    ? post.title.slice(0, 57) + '...' 
    : post.title
  
  const seoDescription = post.excerpt && post.excerpt.length > 160
    ? post.excerpt.slice(0, 157) + '...'
    : post.excerpt || 'Read this insightful article from Brandriko Digital Solutions.'

  return {
    title: `${seoTitle} | Brandriko Digital Solutions`,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: post.image?.asset?.url ? [post.image.asset.url] : [],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name || 'Brandriko Digital Solutions'],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: post.image?.asset?.url ? [post.image.asset.url] : [],
    },
  }
}

// Main blog post page
export default async function BlogPostPage(props: PageProps) {
  // Await both params and searchParams
  const [params, searchParams] = await Promise.all([
    props.params,
    props.searchParams || Promise.resolve({})
  ])
  
  const { slug } = params
  
  const post = await getPost(slug)

  if (!post) notFound()

  const imageUrl = post.image ? urlFor(post.image).width(1200).url() : null
  const authorImageUrl = post.author?.image
    ? urlFor(post.author.image).width(100).url()
    : null

  // Calculate reading time
  const wordCount = post.body?.reduce((acc: number, block: any) => {
    if (block._type === 'block' && block.children) {
      block.children.forEach((child: any) => {
        if (child.text) {
          acc += child.text.split(/\s+/).length
        }
      })
    }
    return acc
  }, 0) || 0
  
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Post Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories?.map((cat: any) => (
            <span
              key={cat.slug.current}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
            >
              {cat.title}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {post.title}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            {authorImageUrl && (
              <div className="relative w-12 h-12">
                <Image
                  src={authorImageUrl}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  priority={false}
                />
              </div>
            )}
            <div>
              <p className="font-medium text-gray-900">
                {post.author?.name || 'Brandriko Team'}
              </p>
              <p className="text-gray-600 text-sm">
                {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {readingTime} min read
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {imageUrl && (
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <div className="relative aspect-video w-full">
            <Image
              src={imageUrl}
              alt={post.image.alt || post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
          {post.image.alt && (
            <p className="text-center text-sm text-gray-500 italic mt-2">
              {post.image.alt}
            </p>
          )}
        </div>
      )}

      {/* Excerpt */}
      {post.excerpt && (
        <div className="mb-8 text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
          {post.excerpt}
        </div>
      )}

      {/* Body */}
      <div className="prose prose-lg max-w-none mb-12 prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700">
        <PortableText 
          value={post.body} 
          components={{
            types: {
              image: ({ value }: any) => (
                <div className="my-8">
                  <Image
                    src={urlFor(value).url()}
                    alt={value.alt || ''}
                    width={800}
                    height={450}
                    className="rounded-lg"
                  />
                </div>
              ),
            },
          }}
        />
      </div>

      {/* Author Bio */}
      {post.author?.bio && (
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">About the Author</h2>
          <div className="flex flex-col sm:flex-row items-start gap-6 bg-gray-50 p-6 rounded-xl">
            {authorImageUrl && (
              <div className="flex-shrink-0">
                <Image
                  src={authorImageUrl}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {post.author.name}
              </h3>
              <p className="text-gray-700">{post.author.bio}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl text-center border border-blue-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Ready to Grow Your Business Online?
        </h2>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          Contact Brandriko Digital Solutions today and get a professional website
          designed specifically for your Nakuru business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
          >
            Our Services
          </a>
        </div>
      </div>
    </article>
  )
}