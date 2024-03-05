<template>
  <section ref="upcoming" class="upcoming">
    <h2 class="upcoming__title">UPCOMING SHOWS</h2>
    <ul class="upcoming__shows">
      <ShowsItem v-for="i in 5" :key="i" />
    </ul>
    <button ref="btn" @click="close" :class="{ expand: show }" class="upcoming__btn">
      HIDE DATES
    </button>
  </section>
</template>

<script>
import ShowsItem from "@/components/ShowsItem";

export default {
  data() {
    return {
      show: false,
      fix: false,
    };
  },
  components: {
    ShowsItem,
  },
  methods: {
    canShow() {
      if (!this.$refs.upcoming) return;

      const high =
        this.$refs.upcoming.getBoundingClientRect().y <
        window.innerHeight * 0.2;

      if (high && !this.show) {
        this.show = true;
      } else if (!high && this.show) {
        this.show = false;
      }
    },
    canFix() {
      if (!this.$refs.upcoming) return;

      const rect = this.$refs.upcoming.getBoundingClientRect();

      if (window.innerHeight >= rect.height + rect.y && !this.fix) {
        this.fix = true;
        this.$refs.btn.classList.add("fix");
      } else if (!(window.innerHeight >= rect.height + rect.y) && this.fix) {
        this.fix = false;
        this.$refs.btn.classList.remove("fix");
      }
    },
    close() {
      const show = document.querySelector(".show");
      const upcoming = this.$refs.upcoming;
      show.scrollIntoView({ behavior: 'smooth' });
      upcoming.setAttribute("style", "height: 0;")
    }
  },
  mounted() {
    this.canShow();
    this.canFix();
    document.addEventListener("scroll", this.canShow);
    document.addEventListener("scroll", this.canFix);
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/upcoming";
</style>
