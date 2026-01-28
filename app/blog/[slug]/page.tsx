import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { format } from 'date-fns'
import { client } from '@/sanity/lib/client'
import { blogPostBySlugQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await client.fetch(blogPostBySlugQuery, { slug: params.slug })

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12 mt-10">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.categories?.map((cat: any) => (
            <span key={cat.slug.current} className="badge badge-primary">
              {cat.title}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
        
        <div className="flex items-center gap-4 mb-8">
          {post.author?.image && (
            <div className="avatar">
              <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-2">
                <Image
                  src={urlFor(post.author.image).width(100).height(100).url()}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
            </div>
          )}
          <div>
            <p className="font-bold">{post.author?.name}</p>
            <p className="text-gray-600">
              {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
        </div>

        {post.mainImage && (
          <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {post.excerpt && (
          <div className="text-xl text-gray-600 italic mb-8 border-l-4 border-primary pl-4">
            {post.excerpt}
          </div>
        )}
        
        {post.body && <PortableText value={post.body} />}
      </div>
    </article>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const post = await client.fetch(blogPostBySlugQuery, { slug: params.slug })
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Brandriko Blog`,
    description: post.excerpt,
  }
}