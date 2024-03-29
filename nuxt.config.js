// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    content: {
        documentDriven: true,
        highlight: {
            theme: {
                default: 'monokai',
                light: 'light-plus'
            },
            preload: [
                'java',
                'c#',
                'cpp',
                'scss',
                'rust',
                'xml',
                'sql',
                'docker',
                'yaml',
                'markdown',
                'ruby',
                'javascript',
                'json',
                'kotlin',
                'python',
                'typescript'
            ]
        }
    },
    modules: [
        '@nuxt/content',
    ],
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "~/assets/scss/globals.scss";'
                }
            }
        }
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            charset: 'utf-8',
            meta: [
                { name: 'copyright', content: 'Gerben Veenhof' }
            ]
        }
    },
    runtimeConfig: {
        public: {
            host: "https://gerbenveenhof.nl"
        }
    }
})
