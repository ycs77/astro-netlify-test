import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify'
import vue from '@astrojs/vue'

export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
  integrations: [vue()],
})
