<template>
  <main class="main">
    <Hero />
    <Quote />
    <Show @showUpcoming="showUpcoming" />
    <Upcoming />
    <Album />
    <Quotes />
    <Quote />
    <Quote />
    <Quote />
  </main>
</template>

<script>
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Show from "@/components/Show";
import Upcoming from "@/components/Upcoming";
import Album from "@/components/Album";
import Quotes from "@/components/Quotes";

export default {
  components: {
    Hero,
    Quote,
    Show,
    Upcoming,
    Album,
    Quotes,
  },
  methods: {
    showUpcoming() {
      const upcoming = document.querySelector(".upcoming");
      upcoming.setAttribute("style", "height:" + upcoming.scrollHeight + "px;");
      upcoming.scrollIntoView({ behavior: "smooth" });
      this.isUpcoming = true;
    },
    initLightScroll() {
      
    },
  },
  mounted() {
    this.initLightScroll();
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/pages/main";
</style>
