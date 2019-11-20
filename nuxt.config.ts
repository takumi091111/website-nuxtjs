import { config } from 'dotenv'
import { Configuration } from '@nuxt/types'
import { fetchEntries } from './assets/utils/api'
import { saveEntries } from './assets/utils/generate'
import { BlogEntry } from '~/assets/interfaces/Entry'

config()

const NuxtConfig: Configuration = {
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
  loading: { color: '#f7f7f7' },
  css: ['minireset.css', './assets/css/global.css', './assets/css/animate.css'],
  plugins: [],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxt/typescript-build'
  ],
  modules: ['@nuxtjs/pwa', 'nuxt-webfontloader', 'nuxt-compress'],
  pwa: {
    manifest: {
      name: 'Asamac',
      short_name: 'Asamac',
      background_color: '#252627',
      description: "Asamac's Portfolio, and Blog",
      lang: 'ja'
    },
    meta: {
      name: 'Asamac',
      theme_color: '#252627'
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
    optimizeCSS: {
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: [
          'advanced',
          {
            autoprefixer: {
              add: false
            },
            discardComments: {
              removeAll: true
            },
            cssDeclarationSorter: {
              order: 'smacss'
            }
          }
        ]
      }
    },
    analyze: {
      analyzerMode: 'server'
    },
    cache: true,
    hardSource: true,
    parallel: true
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

export default NuxtConfig
