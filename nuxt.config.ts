import { defineNuxtConfig } from "nuxt";
import Icons from "unplugin-icons/vite";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt"],
  build: {
    transpile: ['swiper'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    plugins: [
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true,
      }),
    ],
  },
  css: ["~/assets/css/tailwind.css", "swiper/swiper-bundle.css"],
  plugins : [

  ]
  
});
