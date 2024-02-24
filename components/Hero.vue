<template>
  <section class="hero">
    <img class="hero__img" src="../assets/images/img.jpg" alt="" />
    <div class="hero__name">
      <div class="hero__word">
        <span
          class="hero__letter"
          v-for="(letter, i) in name[0]"
          :key="letter"
          :style="'animation-delay:' + ((name[0].length - i) * 40) + 'ms;'"
        >
          {{ letter }}
        </span>
      </div>
      <div class="hero__word">
        <span
          class="hero__letter"
          v-for="letter, i in name[1]"
          :key="letter"
          :style="'animation-delay:' + (i * 40) + 'ms;'"
        >
          {{ letter }}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: ["JEFFREY", "MARTIN"],
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/hero";
</style>
