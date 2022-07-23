import { defineNuxtConfig } from 'nuxt'
import colorModeModule from '..'

export default defineNuxtConfig({
  components: { global: true, dirs: ['~/components'] },
  css: ['~/assets/main.css'],
  modules: [colorModeModule],
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      // { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
      // { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
      // { rel: 'manifest', href: '/site.webmanifest' }
    ],
  }
})
