// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "DoubleYhun Portfolio",
            meta: [
                { name: "description", content: "FE개발자 양영훈 포트폴리오" },

                // Open Graph
                { property: "og:title", content: "DoubleYhun Portfolio" },
                { property: "og:description", content: "FE개발자 양영훈 포트폴리오" },
                { property: "og:image", content: "https://doubleyhun-382c0.web.app/yhun.png" },
                { property: "og:url", content: "https://doubleyhun-382c0.web.app/" },
                { property: "og:type", content: "website" },
            ],
        },
    },
    devtools: {enabled: true},
    css:
        [
            'vuetify/lib/styles/main.sass',
            '@mdi/font/css/materialdesignicons.min.css',
            '~/assets/main.sass',
            '~/assets/project.sass',
            '~/assets/profile.sass',
        ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        }
    }
})
