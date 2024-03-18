import { z, defineCollection } from 'astro:content'

const logCollection = defineCollection({
   type: 'content',
   schema: z.object({
      title: z.string(),
      description: z.string(),
      banner: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()),
      slug: z.string()
   }),
})

export const collections = {
   log: logCollection,
}
