import { Configuration } from '@nuxt/types'
import { fetchEntries } from './assets/utils/api'
import { saveEntries } from './assets/utils/generate'
import { BlogEntry } from './assets/interfaces/Entry'

const config: Configuration = {
  mode: 'universal',
  head: {
    titleTemplate: '%sAsamac',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [
    'minireset.css',
    './assets/styles/style.css',
    './assets/styles/animate.css'
  ],
  plugins: ['./plugins/vue-fragment'],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    'nuxt-compress'
  ],
  axios: {},
  pwa: {
    manifest: {
      name: 'Asamac',
      lang: 'ja'
    },
    meta: {
      name: 'Asamac',
      theme_color: '#252627',
      ogType: ''
    }
  },
  webfontloader: {
    custom: {
      families: ['M PLUS Rounded 1c:n4,n7,n8', 'Fira Mono:n4'],
      urls: [
        'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:400,700,800&display=swap&subset=japanese',
        'https://fonts.googleapis.com/css?family=Fira+Mono&display=swap'
      ]
    }
  },
  'nuxt-compress': {
    gzip: {
      cache: true
    },
    brotli: {
      threshold: 10240
    }
  },
  build: {
    extend(config, _ctx) {
      if (!config.module) return
      config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-svg-inline-loader'
      })
    },
    postcss: {
      preset: {
        stage: 0
      }
    },
    optimizeCSS: {
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      }
    },
    analyze: {
      analyzerMode: 'server'
    }
  },
  hooks: {
    generate: {
      async before() {
        const entries = await fetchEntries(1000)
        await saveEntries(entries)
      }
    }
  },
  generate: {
    async routes() {
      const entries: BlogEntry[] = (await import('./assets/entries/list.json'!))
        .default

      const blogRoute = {
        route: '/blog',
        payload: entries
      }

      const entryRoutes = entries.map((entry) => ({
        route: `/blog/${entry.id}`,
        payload: entry
      }))

      return [blogRoute, ...entryRoutes]
    }
  }
}

export default config
