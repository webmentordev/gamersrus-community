// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    app: {
        head: {
            title: "GamersRUs — Official Website",
            meta: [
                { name: "description", content: "Welcome to GamersRUs official website. Our server provides the best Rust & perfect modded & vanilla gameplay. We run multiple balanced plugins to improve the quality of the game"}
            ],
            link: [
                {
                    rel: "shortcut icon", href: "https://files.facepunch.com/lewis/1b2911b1/rust-marque.svg"
                }
            ]
        }
    }
})
