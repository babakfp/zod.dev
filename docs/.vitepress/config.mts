import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Zod",
    description: "TypeScript-First Schema Validation",
    head: [["link", { rel: "icon", href: "/logo.svg" }]],
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
})
