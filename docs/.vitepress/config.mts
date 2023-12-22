import { defineConfig } from "vitepress"

const metaDescription =
    "TypeScript-first schema validation with static type inference"

const googleTagManagerID = "G-FG8DDV0GBR"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Zod",
    description: "TypeScript-First Schema Validation",
    head: [
        ["link", { rel: "icon", href: "/logo.svg" }],

        [
            "meta",
            {
                name: "description",
                content: metaDescription,
            },
        ],

        [
            "meta",
            {
                name: "twitter:title",
                content: metaDescription,
            },
        ],
        ["meta", { name: "twitter:card", content: "summary_large_image" }],
        ["meta", { name: "twitter:site", content: "@colinhacks" }],
        [
            "meta",
            {
                name: "twitter:image:src",
                content:
                    "https://opengraph.githubassets.com/1cac1150838995e1f7d1643c00eee51a5d884f2054f995c9d3225b07b0eddb39/colinhacks/zod",
            },
        ],

        [
            "meta",
            {
                property: "og:image",
                content:
                    "https://opengraph.githubassets.com/1cac1150838995e1f7d1643c00eee51a5d884f2054f995c9d3225b07b0eddb39/colinhacks/zod",
            },
        ],
        [
            "meta",
            {
                property: "og:image:alt",
                content: metaDescription,
            },
        ],
        ["meta", { property: "og:image:width", content: "1200" }],
        ["meta", { property: "og:image:height", content: "600" }],
        ["meta", { property: "og:site_name", content: "GitHub" }],
        ["meta", { property: "og:type", content: "object" }],
        [
            "meta",
            {
                property: "og:title",
                content: metaDescription,
            },
        ],
        [
            "meta",
            {
                property: "og:url",
                content: "https://github.com/colinhacks/zod",
            },
        ],
        [
            "meta",
            {
                property: "og:description",
                content: metaDescription,
            },
        ],

        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png",
            },
        ],
        ["link", { rel: "manifest", href: "/site.webmanifest" }],
        [
            "link",
            {
                rel: "mask-icon",
                href: "/safari-pinned-tab.svg",
                color: "#5bbad5",
            },
        ],
        ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
        ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
        [
            "meta",
            {
                name: "msapplication-config",
                content: "/browserconfig.xml",
            },
        ],
        ["meta", { name: "theme-color", content: "#ffffff" }],

        [
            "script",
            {
                async: "",
                src: `https://www.googletagmanager.com/gtag/js?id=${googleTagManagerID}`,
            },
        ],
        [
            "script",
            {},
            `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag("js", new Date());
                gtag("config", "${googleTagManagerID}");
            `,
        ],
    ],
    themeConfig: {
        logo: { src: "/logo.svg", alt: "Zod" },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Guide", link: "/guide/" },
            {
                text: "Resources",
                items: [
                    { text: "NPM", link: "https://www.npmjs.com/package/zod" },
                    { text: "Deno", link: "https://deno.land/x/zod" },
                    { text: "tRPC", link: "https://trpc.io" },
                    {
                        items: [
                            {
                                text: "Twitter",
                                link: "https://twitter.com/colinhacks",
                            },
                            {
                                text: "Discord Chat",
                                link: "https://discord.gg/RcG33DQJdf",
                            },
                            {
                                text: "GitHub",
                                link: "https://github.com/colinhacks/zod",
                            },
                        ],
                    },
                ],
            },
            {
                text: "v3.22.4",
                items: [
                    { text: "Changelog", link: "/changelog" },
                    { text: "Migrations", link: "/migrations" },
                    { text: "Contributing", link: "/contributing" },
                    {
                        text: "Issues",
                        link: "https://github.com/colinhacks/zod/issues/new",
                    },
                ],
            },
        ],
        sidebar: [
            {
                text: "Guide",
                link: "/guide/",
            },
            {
                text: "Error Handling",
                link: "/guide/error-handling",
            },
            {
                text: "Migrations",
                link: "/migrations/",
                items: [
                    {
                        text: "Zod 1 → Zod 2",
                        link: "/migrations/v1-v2",
                    },
                    {
                        text: "Zod 2 → Zod 3",
                        link: "/migrations/v2-v3",
                    },
                ],
                collapsed: true,
            },
            {
                text: "Sponsors",
                link: "/sponsors",
            },
            {
                text: "Changelog",
                link: "/changelog",
            },
            {
                text: "Code of Conduct",
                link: "/code-of-conduct",
            },
            {
                text: "Contributing",
                link: "/contributing",
            },
            {
                text: "License",
                link: "/license",
            },
        ],
        socialLinks: [
            { icon: "twitter", link: "https://twitter.com/colinhacks" },
            { icon: "discord", link: "https://discord.gg/RcG33DQJdf" },
            { icon: "github", link: "https://github.com/colinhacks/zod" },
        ],
        outline: {
            level: "deep",
        },
        search: {
            provider: "local",
        },
    },
    locales: {
        root: {
            label: "English",
            lang: "en",
        },
        zh: {
            label: "Chinese",
            lang: "zh",
        },
    },
    cleanUrls: true,
    vite: {
        plugins: [
            {
                name: "cross-origin-isolated-plugin",
                configureServer: server => {
                    server.middlewares.use((req, res, next) => {
                        if (req.originalUrl === "/playground") {
                            res.setHeader(
                                "Cross-Origin-Embedder-Policy",
                                "require-corp",
                            )
                            res.setHeader(
                                "Cross-Origin-Opener-Policy",
                                "same-origin",
                            )
                        }
                        next()
                    })
                },
            },
        ],
    },
})
