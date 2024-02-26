<template>
  <main class="main">
    <Hero />
    <Quote />
  </main>
</template>

<script>
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";

export default {
  components: { Hero, Quote },
};
</script>

<style lang="scss">
@import "~/assets/styles/pages/main";
</style>
