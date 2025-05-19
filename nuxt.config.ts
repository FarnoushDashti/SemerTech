// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true } ,
  css: ['~/assets/styles/main.css' , 'vazir-font/dist/font-face.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    // 'unplugin-icons/nuxt',
  ],
})
