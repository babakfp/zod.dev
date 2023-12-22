import { WebContainer, type FileSystemTree } from "@webcontainer/api"

// Call only once
let webContainerPromise: Promise<WebContainer>

export const useWebContainer = async () => {
    if (!webContainerPromise) {
        webContainerPromise = WebContainer.boot()
    }
    return await webContainerPromise
}

const paths = import.meta.glob("./files/*", { as: "raw", eager: true })

export const files = Object.fromEntries(
    Object.entries(paths).map(([path, content]) => [
        path.replace("./files/", ""),
        { file: { contents: content } },
    ]),
) satisfies FileSystemTree
