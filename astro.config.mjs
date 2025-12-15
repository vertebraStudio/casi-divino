import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Configuración principal de Astro para Casi Divino
export default defineConfig({
  // URL pública del sitio (GitHub Pages)
  site: 'https://vertebrastudio.github.io',
  // Subcarpeta cuando se despliega en GitHub Pages
  base: '/casi-divino',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    mdx(),
  ],
});


