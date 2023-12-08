<!-- Copied from vuejs/vitepress/src/client/theme-default/components/VPSponsors.vue -->

<script setup lang="ts">
import type { Sponsor } from "#docs/components/SponsorsGrid.vue"
import { computed } from "vue"
import VPSponsorsGrid from "#docs/components/SponsorsGrid.vue"

export type GridSize = "xmini" | "mini" | "small" | "medium" | "big"
export interface Sponsors {
    tier?: string
    size?: GridSize
    items: Sponsor[]
}
interface Props {
    mode?: "normal" | "aside"
    tier: "Bronze" | "Silver" | "Gold"
    size?: GridSize
    data: Sponsors[] | Sponsor[]
}
const props = withDefaults(defineProps<Props>(), {
    mode: "normal",
})

const sponsors = computed(() => {
    const isSponsors = props.data.some(s => {
        return "items" in s
    })

    if (isSponsors) {
        return props.data as Sponsors[]
    }

    return [
        { tier: props.tier, size: props.size, items: props.data as Sponsor[] },
    ]
})
</script>

<template>
    <div class="VPSponsors vp-sponsor" :class="[mode]">
        <section
            v-for="(sponsor, index) in sponsors"
            :key="index"
            class="vp-sponsor-section"
        >
            <h3 v-if="sponsor.tier" class="vp-sponsor-tier">
                {{ sponsor.tier }}
            </h3>
            <VPSponsorsGrid
                :tier="props.tier"
                :size="sponsor.size"
                :data="sponsor.items"
            />
        </section>
    </div>
</template>
