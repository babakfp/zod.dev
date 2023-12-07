<script setup>
import { VPHomeSponsors } from "vitepress/theme"

const sponsors = [
    {
        tier: "Gold",
        size: "big",
        items: [
            {
                name: "Speakeasy",
                url: "https://speakeasyapi.dev",
                img: "https://avatars.githubusercontent.com/u/91446104?s=200&v=4",
                alt: "Speakeasy API",
                description: "SDKs, Terraform, Docs.<br/>Your API made enterprise-ready.",
            },
            {
                name: "Glow Wallet",
                url: "https://glow.app",
                img: "https://i.imgur.com/R0R43S2.jpg",
                alt: "Glow Wallet",
                description: "Your new favorite<br/>Solana wallet.",
            },
            {
                name: "Deletype",
                url: "https://deletype.com",
                img: "https://avatars0.githubusercontent.com/u/15068039?s=200&v=4",
                alt: "Deletype logo",
                description: "",
            },
            {
                name: "Trigger.dev",
                url: "https://trigger.dev",
                img: "https://avatars.githubusercontent.com/u/95297378?s=200&v=4",
                alt: "Trigger.dev logo",
                description: "Effortless automation for developers.",
            },
            {
                name: "Transloadit",
                url: "https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github",
                img: "https://avatars.githubusercontent.com/u/125754?s=200&v=4",
                alt: "Transloadit logo",
                description: "Simple file processing for developers.",
            },
            {
                name: "Infisical",
                url: "https://infisical.com",
                img: "https://avatars.githubusercontent.com/u/107880645?s=200&v=4",
                alt: "Infisical logo",
                description: "Open-source platform for secret<br/>management: sync secrets across your<br/>team/infrastructure and prevent secret leaks.",
            },
            {
                name: "Whop",
                url: "https://whop.com",
                img: "https://avatars.githubusercontent.com/u/91036480?s=200&v=4",
                alt: "Whop logo",
                description: "A marketplace for really cool internet products.",
            },
            {
                name: "CryptoJobsList",
                url: "https://cryptojobslist.com",
                img: "https://avatars.githubusercontent.com/u/36402888?s=200&v=4",
                alt: "CryptoJobsList logo",
                description: "The biggest list of crypto, blockchain and Web3 jobs",
            },
            {
                name: "Plain.",
                url: "https://plain.com",
                img: "https://avatars.githubusercontent.com/u/70170949?s=200&v=4",
                alt: "Plain logo",
                description: "How developers support their users.",
            },
            {
                name: "Inngest",
                url: "https://inngest.com",
                img: "https://avatars.githubusercontent.com/u/78935958?s=200&v=4",
                alt: "Inngest logo",
                description: "Serverless queues + durable workflows for TypeScript",
            },
        ],
    },
    {
        tier: "Silver",
        size: "big",
        items: [
            {
                name: "Numeric",
                url: "https://www.numeric.io",
                img: "https://i.imgur.com/kTiLtZt.png",
                alt: "Numeric logo",
                description: "",
            },
            {
                name: "Marcato Partners",
                url: "https://marcatopartners.com",
                img: "https://avatars.githubusercontent.com/u/84106192?s=200&v=4",
                alt: "Marcato Partners",
                description: "",
            },
            {
                name: "Interval",
                url: "https://interval.com",
                img: "https://avatars.githubusercontent.com/u/67802063?s=200&v=4",
                alt: "Interval",
                description: "",
            },
            {
                name: "Seasoned Software",
                url: "https://seasoned.cc",
                img: "https://avatars.githubusercontent.com/u/33913103?s=200&v=4",
                alt: "Seasoned Software",
                description: "",
            },
            {
                name: "Bamboo Creative",
                url: "https://www.bamboocreative.nz",
                img: "https://avatars.githubusercontent.com/u/41406870?v=4",
                alt: "Bamboo Creative logo",
                description: "",
            },
        ],
    },
    {
        tier: "Bronze",
        size: "big",
        items: [
            {
                name: "Brandon Bayer",
                url: "https://twitter.com/flybayer",
                img: "https://avatars2.githubusercontent.com/u/8813276?s=460&u=4ff8beb9a67b173015c4b426a92d89cab960af1b&v=4",
                alt: "Brandon Bayer",
                description: 'The creator of <a href="https://blitzjs.com">Blitz.js</a>',
            },
            {
                name: "Jiří Brabec",
                url: "https://github.com/brabeji",
                img: "https://avatars.githubusercontent.com/u/2237954?v=4",
                alt: "Jiří Brabec",
                description: "",
            },
            {
                name: "Alex Johansson",
                url: "https://twitter.com/alexdotjs",
                img: "https://avatars.githubusercontent.com/u/459267?v=4",
                alt: "Alex Johansson",
                description: "",
            },
            {
                name: "Fungible Systems",
                url: "https://fungible.systems",
                img: "https://avatars.githubusercontent.com/u/80220121?s=200&v=4",
                alt: "Fungible Systems logo",
                description: "",
            },
            {
                name: "Adaptable",
                url: "https://adaptable.io",
                img: "https://avatars.githubusercontent.com/u/60378268?s=200&v=4",
                alt: "Adaptable",
                description: "",
            },
            {
                name: "Avana Wallet",
                url: "https://www.avanawallet.com",
                img: "https://avatars.githubusercontent.com/u/105452197?s=200&v=4",
                alt: "Avana Wallet logo",
                description: "Solana non-custodial wallet",
            },
            {
                name: "Jason Lengstorf",
                url: "https://learnwithjason.dev",
                img: "https://avatars.githubusercontent.com/u/66575486?s=200&v=4",
                alt: "Learn with Jason logo",
                description: "",
            },
            {
                name: "Global Illumination, Inc.",
                url: "https://ill.inc",
                img: "https://avatars.githubusercontent.com/u/89107581?s=200&v=4",
                alt: "Global Illumination",
                description: "",
            },
            {
                name: "MasterBorn",
                url: "https://www.masterborn.com/career?utm_source=github&utm_medium=referral&utm_campaign=zodsponsoring",
                img: "https://avatars.githubusercontent.com/u/48984031?s=200&v=4",
                alt: "MasterBorn logo",
                description: "",
            },
        ],
    },
]
</script>

<VPHomeSponsors
    message="Zod is free and open source, made possible by wonderful sponsors."
    actionText="Become a Sponsor!"
    actionLink="https://github.com/sponsors/colinhacks"
    :data="sponsors"
/>
