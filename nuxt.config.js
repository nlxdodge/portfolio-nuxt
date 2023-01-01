// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    content: {
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
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                }
            ]
        }
    }
})
