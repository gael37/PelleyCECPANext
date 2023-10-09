import { z } from 'zod'

const schema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(3).max(2000),
  duration: z.number().max(10)
  // shortDescription: z.string().min(3),
  // instructors: z.string().min(3),
  // image: z.string().min(3),
  // thumbnail: z.string().min(3),
  // categories: z.string().min(3),
})

export default schema