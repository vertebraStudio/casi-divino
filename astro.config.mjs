import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Configuración principal de Astro para Casi Divino
export default defineConfig({
  // URL pública del sitio (dominio personalizado)
  site: 'https://casidivino.com',
  // Sin base path porque se sirve desde la raíz del dominio
  base: '/',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    mdx(),
  ],
});


