<template>
  <section ref="hero" class="hero">
    <img class="hero__img" src="../assets/images/img.jpg" alt="" />
    <h1 class="hero__name">
      <div class="hero__word">
        <span
          class="hero__letter"
          v-for="(letter, i) in name[0]"
          :key="letter"
          :style="'animation-delay:' + (name[0].length - i) * 40 + 'ms;'"
        >
          {{ letter }}
        </span>
      </div>
      <div class="hero__word">
        <span
          class="hero__letter"
          v-for="(letter, i) in name[1]"
          :key="letter"
          :style="'animation-delay:' + i * 40 + 'ms;'"
        >
          {{ letter }}
        </span>
      </div>
    </h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: ["JEFFREY", "MARTIN"],
      showHeader: false,
    };
  },
  methods: {
    checkPosition() {
      const isHeroHigh =
        this.$refs.hero.getBoundingClientRect().y < -(window.innerHeight / 2);
    
      if (isHeroHigh && !this.showHeader) {
        this.showHeader = isHeroHigh;
        this.$emit("showHeader", isHeroHigh);
      } else if (!isHeroHigh && !this.showHeader) {
        this.showHeader = isHeroHigh;
        this.$emit("showHeader", isHeroHigh);
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.checkPosition);
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/hero";
</style>
