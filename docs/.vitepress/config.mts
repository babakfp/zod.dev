import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Zod",
    description: "TypeScript-First Schema Validation",
    themeConfig: {
        logo: { light: "/logo-light.svg", dark: "/logo-dark.svg", alt: "Zod" },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/markdown-examples" },
            {
                text: "More",
                items: [
                    { text: "NPM", link: "https://www.npmjs.com/package/zod" },
                    { text: "Deno", link: "https://deno.land/x/zod" },
                    { text: "tRPC", link: "https://trpc.io" },
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
                link: "/guide",
            },
            {
                text: "Migrations",
                link: "/migrations",
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
                text: "Error Handling",
                link: "/error-handling",
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
