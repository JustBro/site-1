<template>
  <section class="upcoming">
    <h2 class="upcoming__title">UPCOMING SHOWS</h2>
    <ul class="upcoming__shows">
      <ShowsItem v-for="i in 20" :key="i"/>
    </ul>
    <button class="upcoming__btn">HIDE DATES</button>
  </section>
</template>

<script>
import ShowsItem from "@/components/ShowsItem";

export default {
  components: {
    ShowsItem,
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/upcoming";
</style>
