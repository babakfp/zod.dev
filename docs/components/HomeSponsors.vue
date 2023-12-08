<script setup>
import { VPHomeSponsors } from "vitepress/theme"
import sponsors from "../_data/sponsorsData.json"
</script>

<template>
    <VPHomeSponsors
        message="Zod is free and open source, made possible by wonderful sponsors."
        actionText="Become a Sponsor!"
        actionLink="https://github.com/sponsors/colinhacks"
        :data="sponsors"
    />
</template>
