---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
titleTemplate: TypeScript-First Schema Validation With Static Type Inference

hero:
    name: Zod
    text: TypeScript-First Schema Validation
    tagline: Achieve Limitless Schema Validation Through the Power of Static Type Inference.
    actions:
        - theme: brand
          text: Get Started
          link: /guide/
        - theme: alt
          text: Why Zod?
          link: /guide/#comparison
        - theme: alt
          text: Play
          link: /playground
    image:
        src: /logo.svg
        alt: Vite

features:
    - icon: 🌟
      title: TypeScript-First
      details: Type-check schemas with TypeScript seamlessly.
    - icon: 🚀
      title: Static Type Inference
      details: Leverage static type inference for robust code.
    - icon: 🛠️
      title: Rich Features
      details: Enjoy a concise API and comprehensive type support.
    - icon: 🔄
      title: Effortless Integration
      details: Seamlessly integrate Zod into your codebase with ease.
---

<script setup>
    import HomeSponsors from '#docs/components/HomeSponsors.vue'
</script>

<HomeSponsors />
