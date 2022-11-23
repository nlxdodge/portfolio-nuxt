// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
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
                    additionalData: '@use "@/assets/style/_variables.scss" as *; @use "@glidejs/glide/src/assets/sass/glide.core.scss" as *; @use "include-media/dist/_include-media.scss" as *;'
                }
            }
        }
    }
})
