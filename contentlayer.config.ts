import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`, // All .mdx files in the blog folder
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: false },
    image: { type: 'string', required: false }, // For OG image or hero
    tags: { type: 'list', of: { type: 'string' }, required: false },
    // Example categories for blog, aligning with your Bilgi Bankası
    category: {
      type: 'enum',
      options: ['Burokrasi', 'Burslar', 'Egitim', 'Hayat', 'Universiteler', 'Bolumler', 'Bizden Haberler', 'Italyada Egitim', 'Italyada Hayat'],
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/bilgi-bankasi/${doc._raw.flattenedPath.replace('blog/', '')}`,
    },
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.replace('blog/', ''),
    }
  },
}))

export const Service = defineDocumentType(() => ({
  name: 'Service',
  filePathPattern: `services/**/*.mdx`, // All .mdx files in the services folder
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    shortTitle: { type: 'string', required: false }, // For cards or shorter mentions
    description: { type: 'string', required: true }, // Short description for listing pages
    icon: { type: 'string', required: false }, // Optional: for an icon name (e.g., from lucide-react)
    image: { type: 'string', required: false }, // For service page hero or card
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/hizmetler/${doc._raw.flattenedPath.replace('services/', '')}`,
    },
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.replace('services/', ''),
    }
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Service],
  mdx: {
    // Add any MDX plugins here if needed (e.g., remark-gfm, rehype-pretty-code)
  }
}) 