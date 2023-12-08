<script setup>
import { VPDocAsideSponsors } from "vitepress/theme"
import sponsors from "./_data/sponsors.json"
</script>

<VPDocAsideSponsors
    tier="Gold"
    size="big"
    :data="sponsors[0].items"
/>

<br />

<VPDocAsideSponsors
    tier="Silver"
    size="medium"
    :data="sponsors[1].items"
/>

<br />

<VPDocAsideSponsors
    tier="Bronze"
    size="xmini"
    :data="sponsors[2].items"
/>
