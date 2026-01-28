import { client } from "@/sanity/lib/client"
import { blogCategoriesQuery, blogPostsQuery } from "@/sanity/lib/queries"
import BlogHero from "../components/blog/BlogHero"
import BlogGrid from "../components/blog/BlogGrid"
import BlogSidebar from "../components/blog/BlogSidebar"

export const revalidate = 60 // ISR: Revalidate every 60 seconds

async function getCategories() {
  return client.fetch(blogCategoriesQuery)
}

async function getBlogPosts() {
  return client.fetch(blogPostsQuery)
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(),
    getCategories(),
  ])

  return (
    <main>
      <BlogHero />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <section className="lg:col-span-2">
            <BlogGrid posts={posts} />
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <BlogSidebar categories={categories} />
          </aside>
        </div>
      </div>
    </main>
  )
}

export async function generateMetadata() {
  const baseUrl = "https://brandriko.co.ke"

  return {
    title: "Blog | Brandriko Digital Solutions – Web Design & Digital Marketing in Nakuru",
    description:
      "Explore expert insights on web design, SEO, branding, and digital marketing for businesses in Nakuru and across Kenya.",
    keywords: [
      "web design blog Kenya",
      "digital marketing Nakuru",
      "SEO tips Kenya",
      "branding strategies Kenya",
      "Brandriko Digital Solutions blog",
    ],

    alternates: {
      canonical: `${baseUrl}/blog`,
    },

    openGraph: {
      title: "Blog | Brandriko Digital Solutions",
      description:
        "Actionable insights on web design, SEO, and digital marketing for Kenyan businesses.",
      url: `${baseUrl}/blog`,
      siteName: "Brandriko Digital Solutions",
      locale: "en_KE",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/og/blog-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Brandriko Digital Solutions Blog",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Blog | Brandriko Digital Solutions",
      description:
        "Web design, SEO & digital marketing insights for businesses in Kenya.",
      images: [`${baseUrl}/images/og/blog-og.jpg`],
    },
  }
}
