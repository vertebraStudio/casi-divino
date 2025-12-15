import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
    description: z
      .string()
      .min(10, 'La descripción debe tener al menos 10 caracteres'),
    date: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(3),
    precio: z.string().min(1, 'Añade un rango o precio aproximado'),
    valoracion: z
      .number()
      .min(0, 'La valoración mínima es 0')
      .max(5, 'La valoración máxima es 5'),
    enlace_afiliado: z.string().url(),
    imagen_destacada: z.string(),
    pros: z.array(z.string()).min(1),
    contras: z.array(z.string()).min(1),
    destacado: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  reviews,
};


