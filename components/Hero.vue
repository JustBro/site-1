<template>
  <section ref="hero" class="hero">
    <img class="hero__img" src="../assets/images/img.jpg" alt="" />
    <h1 class="hero__name">
      <div class="hero__word">
        <span
          class="hero__letter"
          v-for="(letter, i) in name[0]"
          :key="i"
          :style="'animation-delay:' + (name[0].length - i) * 40 + 'ms;'"
        >
          {{ letter }}
        </span>
      </div>
      <div class="hero__word">
        <span
          class="hero__letter"
          v-for="(letter, i) in name[1]"
          :key="i"
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
    };
  },
  methods: {
    checkPosition() {
      const isHeroHigh =
        this.$refs.hero.getBoundingClientRect().y < -(window.innerHeight / 2);
      const headerState = this.$store.getters.getHeaderState;

      if (isHeroHigh && !headerState) {
        this.$store.commit("setHeaderState", true);
      } else if (!isHeroHigh && headerState) {
        this.$store.commit("setHeaderState", false);
      }
    },
  },
  mounted() {
    // this.checkPosition();
    document.addEventListener("scroll", this.checkPosition);
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/hero";
</style>
