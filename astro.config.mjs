import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://albatroz.studio',
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
