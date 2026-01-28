import { createClient } from '@sanity/client'
import { config } from './config'

export const client = createClient({
  ...config,
  token: process.env.SANITY_API_TOKEN,
})

// Preview client for draft content
export const previewClient = createClient({
  ...config,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  perspective: 'previewDrafts',
})