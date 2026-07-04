import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: 'https://albatroz.studio',
  base,
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
