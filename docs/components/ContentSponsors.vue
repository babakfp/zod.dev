<script setup>
import Sponsors from "#docs/components/Sponsors.vue"
import sponsors from "#docs/_data/sponsorsData.json"
</script>

<template>
    <Sponsors tier="Gold" size="big" :data="sponsors[0].items" />
    <br />
    <Sponsors tier="Silver" size="big" :data="sponsors[1].items" />
    <br />
    <Sponsors tier="Bronze" size="big" :data="sponsors[2].items" />
</template>
