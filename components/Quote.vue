<template>
  <section class="quote">
    <div ref="wrapper" class="quote__wrapper" :class="{ show: wrapperVisible }">
      <div class="quote__icon">
        <i class="icon icon--quotes"></i>
      </div>
      <span>MUSIC, POETRY, AND</span>
      <span>OBSERVATIONS AIMED</span>
      <span>DIRECTLY AT YOUR SOUL</span>
    </div>
    <div class="quote__author">
      <span>Melissa Clarke</span>
      <span class="quote__author--small">Americana Highways</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      wrapperVisible: false,
    };
  },
  mounted() {
    document.addEventListener("scroll", () => {
      const wrapperVisibility = this.$refs.wrapper.checkVisibility();

      console.log(wrapperVisibility); // не то, checkVisibility() определяет display и opacity

      if (wrapperVisibility && !this.wrapperVisible) {
        this.wrapperVisible == true;
      } else if (!wrapperVisibility && this.wrapperVisible) {
        this.wrapperVisible == false;
      }
    });
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/quote";
</style>
