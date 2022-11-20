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
    }
})
