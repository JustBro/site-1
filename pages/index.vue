<template>
  <main class="main">
    <Hero />
    <Quote />
    <Show />
    <Upcoming />
    <Album />
    <Quotes />
    <Videos />
    <Story />
  </main>
</template>

<script>
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Show from "@/components/Show";
import Upcoming from "@/components/Upcoming";
import Album from "@/components/Album";
import Quotes from "@/components/Quotes";
import Videos from "@/components/Videos";
import Story from "@/components/Story";

export default {
  components: {
    Hero,
    Quote,
    Show,
    Upcoming,
    Album,
    Quotes,
    Videos,
    Story,
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/pages/main";
</style>
