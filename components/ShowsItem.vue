<template>
  <li class="shows-item">
    <div ref="item" class="shows-item__wrapper">
      <div class="shows-item__text">
        <h3 class="shows-item__title">THOMAS, WV</h3>
        <span class="shows-item__desctiption">
          Wednesday, April 3, 2024 - Purple Fiddle
        </span>
      </div>
      <a class="shows-item__link">TICKETS</a>
    </div>
  </li>
</template>

<script>
export default {
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
    animate() {
      window.requestAnimationFrame(() => {
        const el = this.$refs.item;
        const positionY = el.getBoundingClientRect().y;
        const positionInViewport = (1 - positionY / window.innerHeight) * 100;
        let width = el.offsetWidth;
        let rotate =
          "transform: " +
          window.getComputedStyle(el).getPropertyValue("transform") +
          ";";

        if (positionInViewport <= 120 && positionInViewport >= 1) {
          rotate =
            "transform: rotateX(" +
            (-4 + (positionInViewport * 4) /120) +
            "deg);";
        }
        if (positionInViewport <= 120 && positionInViewport >= 1) {
          width = "width: " + (100 - 0.3 * positionInViewport) + "%;";
          el.setAttribute("style", rotate + width);
        }
      });
    },
  },
  mounted() {
    this.animate();
    document.addEventListener("scroll", this.animate);
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/shows-item";
</style>
