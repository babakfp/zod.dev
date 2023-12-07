import { HeadConfig } from "vitepress"

export const faviconsPrefersColorScheme = (
    lightFaviconHref: string,
    darkFaviconHref: string,
) =>
    [
        [
            "link",
            {
                rel: "icon",
                href: lightFaviconHref,
                id: "favicons-prefers-color-scheme-light",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                href: darkFaviconHref,
                id: "favicons-prefers-color-scheme-dark",
            },
        ],
        [
            "script",
            {},
            `
            ;(() => {
                const iconLight = document.querySelector("#favicons-prefers-color-scheme-light")
                const iconDark = document.querySelector("#favicons-prefers-color-scheme-dark")

                new MutationObserver(mutationsList => {
                    for (const mutation of mutationsList) {
                        if (
                            mutation.type === "attributes" &&
                            mutation.attributeName === "class"
                        ) {
                            if (document.documentElement.classList.contains("dark")) {
                                iconLight.remove()
                                document.head.append(iconDark)
                            } else {
                                document.head.append(iconLight)
                                iconDark.remove()
                            }
                        }
                    }
                }).observe(document.documentElement, {
                    attributes: true,
                    attributeFilter: ["class"],
                })
            })()
        `,
        ],
    ] satisfies HeadConfig[]
