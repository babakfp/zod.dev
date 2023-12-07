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
                                link: "https://discord.gg/KaSRdyX2vc",
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
                items: [
                    {
                        text: "Introduction",
                        link: "/guide/#introduction",
                    },
                    {
                        text: "Installation",
                        link: "/guide/#installation",
                    },
                    {
                        text: "Basic usage",
                        link: "/guide/#basic-usage",
                    },
                    {
                        text: "Primitives",
                        link: "/guide/#primitives",
                    },
                    {
                        text: "Coercion for primitives",
                        link: "/guide/#coercion-for-primitives",
                    },
                    {
                        text: "Literals",
                        link: "/guide/#literals",
                    },
                    {
                        text: "Strings",
                        link: "/guide/#strings",
                    },
                    {
                        text: "Numbers",
                        link: "/guide/#numbers",
                    },
                    {
                        text: "BigInts",
                        link: "/guide/#big-ints",
                    },
                    {
                        text: "NaNs",
                        link: "/guide/#na-ns",
                    },
                    {
                        text: "Booleans",
                        link: "/guide/#booleans",
                    },
                    {
                        text: "Dates",
                        link: "/guide/#dates",
                    },
                    {
                        text: "Zod enums",
                        link: "/guide/#zod-enums",
                    },
                    {
                        text: "Native enums",
                        link: "/guide/#native-enums",
                    },
                    {
                        text: "Optionals",
                        link: "/guide/#optionals",
                    },
                    {
                        text: "Nullables",
                        link: "/guide/#nullables",
                    },
                    {
                        text: "Objects",
                        link: "/guide/#objects",
                    },
                    {
                        text: "Arrays",
                        link: "/guide/#arrays",
                    },
                    {
                        text: "Tuples",
                        link: "/guide/#tuples",
                    },
                    {
                        text: "Unions",
                        link: "/guide/#unions",
                    },
                    {
                        text: "Discriminated unions",
                        link: "/guide/#discriminated-unions",
                    },
                    {
                        text: "Records",
                        link: "/guide/#records",
                    },
                    {
                        text: "Maps",
                        link: "/guide/#maps",
                    },
                    {
                        text: "Sets",
                        link: "/guide/#sets",
                    },
                    {
                        text: "Intersections",
                        link: "/guide/#intersections",
                    },
                    {
                        text: "Recursive types",
                        link: "/guide/#recursive-types",
                    },
                    {
                        text: "Promises",
                        link: "/guide/#promises",
                    },
                    {
                        text: "Instanceof",
                        link: "/guide/#instanceof",
                    },
                    {
                        text: "Functions",
                        link: "/guide/#functions",
                    },
                    {
                        text: "Preprocess",
                        link: "/guide/#preprocess",
                    },
                    {
                        text: "Custom schemas",
                        link: "/guide/#custom-schemas",
                    },
                    {
                        text: "Schema methods",
                        link: "/guide/#schema-methods",
                    },
                    {
                        text: "Guides and concepts",
                        link: "/guide/#guides-and-concepts",
                    },
                    {
                        text: "Comparison",
                        link: "/guide/#comparison",
                    },
                    {
                        text: "Error Handling",
                        link: "/guide/error-handling",
                    },
                ],
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
