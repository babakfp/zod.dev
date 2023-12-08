<!-- Copied from vuejs/vitepress/src/client/theme-default/components/VPSponsorsGrid.vue -->

<script setup lang="ts">
import { ref } from "vue"
import { useSponsorsGrid } from "vitepress/dist/client/theme-default/composables/sponsor-grid"

export type GridSize = "xmini" | "mini" | "small" | "medium" | "big"
export interface Sponsor {
    name: string
    img: string
    url: string
    description?: string
    alt?: string
    isImgFullyRounded?: boolean
}
interface Props {
    size?: GridSize
    data: Sponsor[]
    tier: "Bronze" | "Silver" | "Gold"
}
const props = withDefaults(defineProps<Props>(), {
    size: "medium",
})

const el = ref(null)

useSponsorsGrid({ el, size: props.size })
</script>

<template>
    <div class="VPSponsorsGrid vp-sponsor-grid" :class="[size]" ref="el">
        <div
            v-for="sponsor in data"
            :key="sponsor.name"
            class="vp-sponsor-grid-item"
        >
            <a
                class="vp-sponsor-grid-link"
                :href="sponsor.url"
                target="_blank"
                rel="sponsored noopener"
            >
                <article class="vp-sponsor-grid-box">
                    <img
                        class="vp-sponsor-grid-image"
                        :class="{
                            'img-is-fully-rounded': sponsor.isImgFullyRounded,
                        }"
                        :src="sponsor.img"
                        :alt="sponsor.alt || sponsor.name"
                    />
                    <h4 class="sponsor-name">{{ sponsor.name }}</h4>
                    <p
                        v-if="props.tier === 'Gold' && sponsor.description"
                        v-html="sponsor.description"
                    ></p>
                    <p
                        v-else-if="
                            props.tier === 'Gold' && !sponsor.description
                        "
                    >
                        Click to learn more
                    </p>
                </article>
            </a>
        </div>
    </div>
</template>

<style scoped>
.vp-sponsor-grid.mini .vp-sponsor-grid-box,
.vp-sponsor-grid.xmini .vp-sponsor-grid-box {
    align-content: center;
}
.vp-sponsor-grid.mini .sponsor-name,
.vp-sponsor-grid.xmini .sponsor-name {
    font-size: 14px;
    margin-top: 0.25rem;
}
.vp-sponsor-grid.mini .vp-sponsor-grid-link,
.vp-sponsor-grid.xmini .vp-sponsor-grid-link {
    height: 100%;
}
.vp-sponsor-grid.mini .vp-sponsor-grid-link {
    padding: 2rem 1rem;
}
.vp-sponsor-grid.xmini .vp-sponsor-grid-link {
    padding: 1rem;
}
.vp-sponsor-grid.mini .vp-sponsor-grid-image,
.vp-sponsor-grid.xmini .vp-sponsor-grid-image {
    max-width: calc(96px * 1.5);
    max-height: calc(24px * 1.5);
}
.vp-sponsor-grid.big .vp-sponsor-grid-link {
    height: 100%;
    padding: 2rem 1rem;
}
.sponsor-name {
    margin-top: 0.5rem;
}
.vp-sponsor-grid-link {
    text-decoration: none;
    color: var(--vp-c-text-1);
}
.vp-sponsor-grid-box {
    display: grid;
    align-content: start;
    justify-items: center;
    text-align: center;
}
.vp-sponsor-grid-box p {
    margin: 0;
    font-size: 12px;
    line-height: 16px;
    text-wrap: balance;
    margin-top: 0.25rem;
}
.img-is-fully-rounded {
    border-radius: 9999px;
}
.vp-sponsor-grid-item,
.vp-sponsor-grid-image {
    transition: 250ms;
}
.dark .vp-sponsor-grid-item:hover {
    background-color: rgba(101, 117, 133, 0.26);
}
.dark .vp-sponsor-grid-item:hover .vp-sponsor-grid-image {
    filter: grayscale(0);
}
.dark .vp-sponsor-grid-image {
    filter: grayscale(1);
}
</style>
