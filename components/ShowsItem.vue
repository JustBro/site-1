<template>
  <li class="shows-item">
    <div ref="item" class="shows-item__wrapper">
      <div class="shows-item__text">
        <h3 class="shows-item__title">{{ show.name }}</h3>
        <span class="shows-item__desctiption">{{ show.description }}</span>
      </div>
      <a :href="show.link" target="_blank" class="shows-item__link">TICKETS</a>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isUpcomingOpen: false,
    };
  },
  props: {
    show: {
      type: Object,
      default: {},
    },
  },
  watch: {
    "$store.state.expandUpcoming"(newValue) {
      if (newValue) {
        this.isUpcomingOpen = newValue;
      } else {
        setTimeout(() => {
          this.isUpcomingOpen = newValue;
        }, 1000);
      }
    },
  },
  methods: {
    animate() {
      if (!this.isUpcomingOpen) return;

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
            (-4 + (positionInViewport * 4) / 120) +
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
