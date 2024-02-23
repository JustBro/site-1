<template>
  <main class="main">
    <Hero />
    <div class="next-block"></div>
  </main>
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  components: { Hero },
};
</script>

<style lang="scss">
@import "~/assets/styles/pages/main";
</style>
