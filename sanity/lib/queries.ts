import { groq } from 'next-sanity'

// Blog Posts
export const blogPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  "author": author->{name, image},
  "categories": categories[]->{title, slug},
  body
}`

export const blogPostBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  "author": author->{name, image, bio},
  "categories": categories[]->{title, slug},
  body
}`

// Portfolio Projects
export const portfolioProjectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  description,
  mainImage,
  categories,
  technologies,
  client,
  year,
  link,
  github
}`

// Services
export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  title,
  slug,
  description,
  icon,
  features[],
  price,
  duration
}`

// Testimonials
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  name,
  position,
  company,
  quote,
  rating,
  image
}`





// Fetch all blog posts
export const allBlogPostsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    readTime,
    "categories": categories[]->title,
    "author": author->{
      name,
      role,
      image
    },
    metaDescription,
    featured
  }
`

// Fetch a single blog post by slug
export const blogPostQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    coverImage,
    publishedAt,
    readTime,
    "categories": categories[]->{
      title,
      slug
    },
    "author": author->{
      name,
      role,
      image,
      bio
    },
    metaDescription,
    metaKeywords
  }
`

// Fetch featured blog posts
export const featuredBlogPostsQuery = groq`
  *[_type == "blog" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    readTime,
    "categories": categories[]->title
  }
`

// Fetch blog categories
export const blogCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    "count": count(*[_type == "blog" && references(^._id)])
  }
`

// Fetch recent posts
export const recentBlogPostsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc)[0...6] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    readTime
  }
`