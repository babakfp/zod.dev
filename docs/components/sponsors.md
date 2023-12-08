<script setup>
import Sponsors from './components/Sponsors.vue'
import sponsors from "./_data/sponsors.json"
</script>

<Sponsors
    tier="Gold"
    size="big"
    :data="sponsors[0].items"
/>

<br />

<Sponsors
    tier="Silver"
    size="big"
    :data="sponsors[1].items"
/>

<br />

<Sponsors
    tier="Bronze"
    size="big"
    :data="sponsors[2].items"
/>
