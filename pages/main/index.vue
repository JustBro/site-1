<template>
  <main class="main">
    <Hero />
    <Quote />
    <div class="space"></div>
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

.space {
  height: 300vh;
}
</style>
