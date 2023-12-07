import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Zod",
    description: "TypeScript-First Schema Validation",
    themeConfig: {
        logo: { light: "/logo-light.svg", dark: "/logo-dark.svg", alt: "Zod" },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Guide", link: "/guide/" },
            {
                text: "Resources",
                items: [
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
                                link: "https://discord.gg/KaSRdyX2vc",
                            },
                            {
                                text: "GitHub",
                                link: "https://github.com/colinhacks/zod",
                            },
                            {
                                text: "NPM",
                                link: "https://www.npmjs.com/package/zod",
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
                link: "/error-handling",
            },
            {
                text: "Sponsors",
                link: "/sponsors",
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
            { icon: "discord", link: "https://discord.gg/KaSRdyX2vc" },
            { icon: "github", link: "https://github.com/colinhacks/zod" },
        ],
        outline: {
            level: "deep",
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
