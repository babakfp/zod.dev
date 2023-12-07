import { HeadConfig } from "vitepress"

export const vitepressPrefersColorSchemeFaviconAutoSwitcher = (
    lightFaviconHref: string,
    darkFaviconHref: string,
): HeadConfig[] => {
    const lightFavicon: HeadConfig = [
        "link",
        {
            rel: "icon",
            href: lightFaviconHref,
            id: "vitepress-prefers-color-scheme-favicon-auto-switcher-light",
        },
    ]

    const darkFavicon: HeadConfig = [
        "link",
        {
            rel: "icon",
            href: darkFaviconHref,
            id: "vitepress-prefers-color-scheme-favicon-auto-switcher-dark",
        },
    ]

    const switcherScript: HeadConfig = [
        "script",
        {},
        `
            ;(() => {
                const iconLight = document.querySelector("#vitepress-prefers-color-scheme-favicon-auto-switcher-light")
                const iconDark = document.querySelector("#vitepress-prefers-color-scheme-favicon-auto-switcher-dark")

                new MutationObserver(mutationsList => {
                    for (const mutation of mutationsList) {
                        if (
                            mutation.type === "attributes" &&
                            mutation.attributeName === "class"
                        ) {
                            if (document.documentElement.classList.contains("dark")) {
                                iconLight?.remove()
                                document.head.append(iconDark)
                            } else {
                                document.head.append(iconLight)
                                iconDark?.remove()
                            }
                        }
                    }
                }).observe(document.documentElement, {
                    attributes: true,
                    attributeFilter: ["class"],
                })
            })()
        `,
    ]

    return [lightFavicon, darkFavicon, switcherScript]
}
