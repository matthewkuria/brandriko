// sanity/lib/image.ts
import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  if (!source) {
    console.warn('No image source provided to urlFor')
    return {
      url: () => '/fallback-image.jpg',
      width: () => ({url: () => '/fallback-image.jpg'}),
      height: () => ({url: () => '/fallback-image.jpg'}),
      // Add other builder methods as needed
    }
  }
  
  try {
    return builder.image(source)
  } catch (error) {
    console.error('Error creating image URL:', error)
    return {
      url: () => '/fallback-image.jpg',
      width: () => ({url: () => '/fallback-image.jpg'}),
      height: () => ({url: () => '/fallback-image.jpg'}),
    }
  }
}