<template>
  <main class="main">
    <Hero />
    <Quote />
    <Show @showUpcoming="showUpcoming" />
    <Upcoming />
    <Album />
  </main>
</template>

<script>
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Show from "@/components/Show";
import Upcoming from "@/components/Upcoming";
import Album from "@/components/Album";

export default {
  components: {
    Hero,
    Quote,
    Show,
    Upcoming,
    Album,
  },
  methods: {
    showUpcoming() {
      const upcoming = document.querySelector(".upcoming");
      upcoming.setAttribute("style", "height:" + upcoming.scrollHeight + "px;");
      upcoming.scrollIntoView({ behavior: 'smooth' });
      this.isUpcoming = true;
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/pages/main";
</style>
