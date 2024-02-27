<template>
  <section ref="quote" class="quote">
    <div ref="wrapper" class="quote__wrapper">
      <div class="quote__icon">
        <i class="icon icon--quotes"></i>
      </div>
      <span class="quote__string">MUSIC, POETRY, AND</span>
      <span class="quote__string">OBSERVATIONS AIMED</span>
      <span class="quote__string">DIRECTLY AT YOUR SOUL</span>
    </div>
    <div class="quote__author">
      <span>Melissa Clarke</span>
      <span class="quote__author--small">Americana Highways</span>
    </div>
  </section>
</template>

<script>
import { viewportTracking } from "@/assets/scripts/myLib";

export default {
  data() {
    return {};
  },
  mounted() {
    document.addEventListener(
      "scroll",
      viewportTracking(this.$refs.quote, this.$refs.wrapper, 50, "animate")
    );
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/quote";
</style>
