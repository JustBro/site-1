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
export default {
  data() {
    return {};
  },
  methods: {
    viewportTracking(el, changeEl = el, percent, className) {
      return () => {
        const positionY = el.getBoundingClientRect().y;
        const classList = changeEl.classList;
        const viewportHeight = window.innerHeight;
        const positionInViewport = (1 - positionY / viewportHeight) * 100;

        if (positionInViewport > percent && !classList.contains(className)) {
          classList.add(className);
        } else if (
          positionInViewport < percent &&
          classList.contains(className)
        ) {
          classList.remove(className);
        }
      };
    },
  },
  mounted() {
    document.addEventListener(
      "scroll",
      this.viewportTracking(this.$refs.quote, this.$refs.wrapper, 50, "animate")
    );
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/quote";
</style>
