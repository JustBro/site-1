<template>
  <section ref="show" class="show">
    <video class="show__video" autoplay loop muted>
      <source src="video/Short_1.mp4" type="video/mp4" />
    </video>
    <div class="show__wrapper">
      <h2 class="show__title">next show</h2>
      <div class="show__description">
        <span>Thomas, WV</span>
        <span>Purple Fiddle</span>
      </div>
      <div ref="line" class="show__line"></div>
      <button class="show__btn" @click="$emit('showUpcoming')">view all dates</button>
    </div>
  </section>
</template>

<script>
import { viewportTracking } from "@/assets/scripts/myLib";

export default {
  mounted() {
    document.addEventListener(
      "scroll",
      viewportTracking(this.$refs.show, this.$refs.line, 80, "animate")
    );
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/show";
</style>
