// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'v', mode: 'out-in' },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],
  css: ["@/assets/css/tailwind.css"],
  colorMode: {
    classSuffix: "",
  },
  content: {
    highlight: {
      theme: {
        default: "min-light",
        dark: "min-dark",
      },
    },
  },
  nitro:{
    prerender:{
      routes:['/sitemap.xml']
    }
  }
});
