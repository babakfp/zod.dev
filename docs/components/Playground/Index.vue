<script setup lang="ts">
import { ref, onMounted } from "vue"
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue"
import { Codemirror } from "vue-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { oneDark } from "@codemirror/theme-one-dark"
import { useWebContainer, files } from "./index.js"
import { Terminal } from "xterm"
import "xterm/css/xterm.css"
import { type WebContainer } from "@webcontainer/api"

let webContainerInstance: WebContainer | undefined

const terminalElement = ref<HTMLElement>()

onMounted(async () => {
    editorContent.value = files["index.js"].file.contents

    const terminal = new Terminal({
        convertEol: true,
        fontFamily: "var(--vp-font-family-mono)",
    })

    if (terminalElement.value) {
        terminal.open(terminalElement.value)
    }

    terminal.writeln("Loading...")

    webContainerInstance = await useWebContainer()

    await webContainerInstance.mount(files)

    terminal.reset()
    terminal.writeln("pnpm i")
    const installProcess = await webContainerInstance.spawn("pnpm", ["i"])
    installProcess.output.pipeTo(
        new WritableStream({
            write(chunk) {
                terminal.write(chunk)
            },
        }),
    )
    if ((await installProcess.exit) === 0) {
        terminal.writeln("pnpm dev")
        const serverProcess = await webContainerInstance.spawn("pnpm", ["dev"])
        serverProcess.output.pipeTo(
            new WritableStream({
                write(chunk) {
                    terminal.write(chunk)
                },
            }),
        )
    }

    webContainerInstance.on("server-ready", () => {
        terminal.writeln("Ready!")
    })
    webContainerInstance.on("error", ({ message }) => {
        terminal.writeln(`Error! ${message}`)
    })
})

const handleFormSubmit = async () => {
    if (!webContainerInstance) return
    await webContainerInstance.fs.writeFile("index.js", editorContent.value)
}

const extensions = [javascript(), oneDark]
const editorContent = ref("")
</script>

<template>
    <div class="wrapper">
        <codemirror
            v-model="editorContent"
            :autofocus="true"
            :tab-size="4"
            :extensions="extensions"
            :style="{ 'min-height': '272px' }"
        />

        <form @submit.prevent="handleFormSubmit">
            <VPButton text="Submit & Validate" />
        </form>

        <div ref="terminalElement"></div>
    </div>
</template>

<style scoped>
.wrapper {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
}
</style>
