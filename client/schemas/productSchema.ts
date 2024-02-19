import { z } from 'zod';

const imageFileSchema = z.object({
  file: z.instanceof(File),
});

export const productSchema = z.object({
  name: z.string().min(3).max(50),
  brand: z.string().min(3).max(50),
  description: z.string().min(10).max(150),
  category: z.string().min(5).max(15),
  price: z.number().positive().min(20),
  stock: z.number().positive().min(1),
  tags: z.string().min(3).max(50),
  countryOfOrigin: z.string().min(3).max(50),
  image: z.array(imageFileSchema),
});
