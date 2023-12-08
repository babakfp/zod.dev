<script setup>
import { VPDocAsideSponsors } from "vitepress/theme"
import sponsors from "./_data/sponsors.json"
</script>

<VPDocAsideSponsors
    :data="sponsors"
/>
