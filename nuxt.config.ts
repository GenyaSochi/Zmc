// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@prisma/nuxt', '@nuxt/image','vue-yandex-maps/nuxt'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },
  app: {
    baseURL: '/Zmc/',
  },
  yandexMaps: {
    apikey: '498959e6-8e81-4af7-ad42-1178937d5ea7',
  },
  prisma: {
    installCLI: false,
    installClient: false,
    generateClient: false,
    installStudio: false,
    autoSetupPrisma: true
  },
  vite: {
    ssr: {
      external: ["@prisma/client"]
    },
    resolve: {
      alias: {
        ".prisma/client/index-browser": "./node_modules/.prisma/client/index-browser.js"
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    }
  },
  
})