import { client } from "@/sanity/lib/client"
import { blogCategoriesQuery, blogPostsQuery } from "@/sanity/lib/queries"
import BlogHero from "../components/blog/BlogHero"
import BlogGrid, { BlogGridSkeleton } from "../components/blog/BlogGrid"
import BlogSidebar from "../components/blog/BlogSidebar"


export const revalidate = 60 // Revalidate every 60 seconds


async function getCategories() {
  return await client.fetch(blogCategoriesQuery)
}


async function getBlogPosts() {
  const posts = await client.fetch(blogPostsQuery)
  return posts
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(),
    getCategories()
  ])

  return (
    <main>
      <BlogHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <BlogGrid posts={posts} />
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar categories={categories} />
          </div>
        </div>
      </div>
      {/* <NewsletterCTA /> */}
    </main>
  )
}

export async function generateMetadata() {
  return {
    title: 'Blog | Brandriko Digital Solutions - Digital Marketing Insights',
    description: 'Latest insights on web design, digital marketing, SEO, and branding strategies for businesses in Kenya.',
    keywords: 'digital marketing blog, web design tips, SEO Kenya, branding strategies, Nakuru business insights',
    openGraph: {
      title: 'Blog | Brandriko Digital Solutions',
      description: 'Latest digital marketing insights and web design tips for Kenyan businesses',
      type: 'website',
    },
  }
}