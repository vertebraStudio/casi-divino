import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Configuración principal de Astro para Casi Divino
export default defineConfig({
  site: 'https://casidivino.example', // Cambia esto cuando tengas dominio final
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    mdx(),
  ],
});


