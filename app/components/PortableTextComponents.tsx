import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative h-96 my-8 rounded-xl overflow-hidden">
          <Image
            src={urlFor(value).width(1200).height(600).url()}
            alt={value.alt || 'Blog image'}
            fill
            className="object-cover"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </figcaption>
          )}
        </div>
      )
    },
    code: ({ value }: any) => {
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
          <code className={value.language}>{value.code}</code>
        </pre>
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="text-primary hover:underline">
          {children}
        </a>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },
}

export default components