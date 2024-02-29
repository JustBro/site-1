<template>
  <main class="main">
    <Hero />
    <Quote />
    <Show />
    <Upcoming />
    <div class="space"></div>
  </main>
</template>

<script>
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Show from "@/components/Show";
import Upcoming from "@/components/Upcoming";

export default {
  components: {
    Hero,
    Quote,
    Show,
    Upcoming,
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/pages/main";

.space {
  position: relative;
  z-index: 1;
  height: 300vh;
  background-color: $bg-black;
}
</style>
