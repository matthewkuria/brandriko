import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { format } from 'date-fns'
import Script from 'next/script'
import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import { urlFor } from '@/sanity/lib/image'

// Props interface
interface PageProps {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
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
    image {
      alt,
      asset->{
        _ref,
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


// Fetch related posts
async function getRelatedPosts(post: any) {
  if (!post.categories?.length) return []
  const categoryIds = post.categories.map((c: any) => c._id)
  const query = `*[_type=="post" && slug.current != $slug && count(categories[@._ref in $categoryIds]) > 0][0...3]{
    title,
    slug,
    image
  }`
  const relatedPosts = await client.fetch(query, { slug: post.slug.current, categoryIds })
  return relatedPosts
}

// Static params for SSG
export async function generateStaticParams() {
  const query = `*[_type=="post"]{ slug { current } }`
  const posts = await client.fetch(query)
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }))
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) return { title: 'Post Not Found' }

  const imageUrl = post.image?.asset?.url || ''

  return {
    title: `${post.title} | Brandriko Digital Solutions Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://brandriko.co.ke/blog/${post.slug}`,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: post.image.alt }] : [],
      type: 'article',
      locale: 'en_KE',
      siteName: 'Brandriko Digital Solutions',
    },
  }
}

// Main page
export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  const relatedPosts = await getRelatedPosts(post)
  const imageUrl = post.image ? urlFor(post.image).width(1200).url() : null
  const authorImageUrl = post.author?.image ? urlFor(post.author.image).width(80).url() : null
  const readingTime = Math.ceil(post.body?.length / 5)

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 mt-20">
      {/* Breadcrumb JSON-LD */}
      <Script
        id="post-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://brandriko.co.ke" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://brandriko.co.ke/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: `https://brandriko.co.ke/blog/${post.slug}` },
            ],
          }),
        }}
      />

      {/* Categories */}
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

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Author and Meta */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {authorImageUrl && (
            <Image src={authorImageUrl} alt={post.author.name} width={48} height={48} className="rounded-full" />
          )}
          <div>
            <p className="font-medium">{post.author?.name || 'Unknown Author'}</p>
            <p className="text-gray-600 text-sm">{format(new Date(post.publishedAt), 'MMMM dd, yyyy')}</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">{readingTime} min read</div>
      </div>

      {/* Featured Image */}
      {imageUrl && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <Image src={imageUrl} alt={post.image.alt || post.title} width={1200} height={630} className="w-full h-auto" priority />
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

      {/* CTA Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">Need a Professional Website in Nakuru?</h3>
        <p className="mb-4">
          Brandriko Digital Solutions helps businesses in Nakuru grow online with professional website design, SEO, and digital marketing.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-lg text-center">
            Get a Free Consultation
          </a>
          <a href="https://maps.app.goo.gl/FXFnjJZgb5V7UN4D7" target="_blank" rel="noopener noreferrer" className="inline-block text-blue-600 underline text-center">
            View us on Google Maps
          </a>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts?.length > 0 && (
        <section className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((rp: any) => (
              <a key={rp.slug.current} href={`/blog/${rp.slug.current}`} className="block">
                {rp.image && (
                  <Image src={urlFor(rp.image).width(400).url()} alt={rp.image.alt} className="rounded-lg mb-3" width={400} height={250} />
                )}
                <h4 className="font-medium">{rp.title}</h4>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Author Bio */}
      {post.author?.bio && (
        <div className="border-t pt-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">About the Author</h2>
          <div className="flex items-start gap-4">
            {authorImageUrl && <Image src={authorImageUrl} alt={post.author.name} width={80} height={80} className="rounded-full flex-shrink-0" />}
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
