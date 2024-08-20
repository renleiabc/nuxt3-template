// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    host: '0.0.0.0', // 使用ip地址访问.
    port: 3050
  },

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-proxy-request',
    '@nuxtjs/robots'
  ],

  runtimeConfig: {
    // apiSecret 只能在服务器端上访问
    apiSecret: '123',
    // public 命名空间中定义的，在服务器端和客户端都可以普遍访问
    public: {
      apiBase: '/api'
    }
  },

  proxy: {
    options: [
      {
        target: 'http://3.27.66.68:8001',
        pathFilter: ['/api/**'],
        pathRewrite: {
          '^/api': ''
        }
      }
    ]
  },

  css: ['~/assets/sass/index.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  i18n: {
    strategy: 'no_prefix', // 添加路由前缀的方式,无前缀模式'no_prefix'，有前缀模式prefix_and_default
    locales: ['en', 'zh-cn'], // 配置语种
    defaultLocale: 'en', // 默认语种
    vueI18n: '~/locales/i18n.config.ts' // 通过vueI18n配置
  },

  typescript: {
    strict: true,
    shim: false
  },

  // vueuse
  vueuse: {
    ssrHandlers: true
  },

  // colorMode颜色模块，控制全局的变色
  colorMode: {
    classSuffix: ''
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/sass/element/index.scss" as element;`
        }
      }
    },
    build: {
      sourcemap: false, // 关闭source map
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('element-plugin')) {
              return 'componentUi';
            } else if (id.includes('axios')) {
              return 'axios';
            } else if (id.includes('lodash')) {
              return 'lodash';
            }
          }
        }
      }
    }
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark']
  },

  sourcemap: {
    // 是否生成 sourcemaps
    server: process.env.NODE_ENV === 'development',
    client: process.env.NODE_ENV === 'development'
  },

  robots: {
    rules: {
      // 允许被哪个搜索引擎抓取
      UserAgent: '*',
      // 不允许抓取的页面
      Disallow: ['/person*'],
      // 允许抓取的页面
      // Allow: ['/details*', '/label', '/label-tag/*', '/archive', '*', '/'],
      // 生成sitemap.xml
      Sitemap: (req: any) => `https://${req.headers.host}/sitemap.xml`
    }
  },
  compatibilityDate: '2024-08-20'
});
