<template>
  <section
    ref="upcoming"
    class="upcoming"
    :class="{ 'upcoming--hide': !showUpcoming }"
    :style="'height: ' + height + 'px;'"
  >
    <h2 class="upcoming__title">UPCOMING SHOWS</h2>
    <ul class="upcoming__shows">
      <ShowsItem v-for="show in shows" :key="show.name" :show="show" />
    </ul>
    <button
      ref="btn"
      @click="close"
      class="upcoming__btn"
      :class="{ expand: showBtn }"
    >
      HIDE DATES
    </button>
  </section>
</template>

<script>
import ShowsItem from "@/components/ShowsItem";

export default {
  data() {
    return {
      showUpcoming: false,
      showBtn: false,
      height: 0,
      fix: false,
      shows: [
        {
          name: "THOMAS, WV",
          description: "Wednesday, April 3, 2024 - Purple Fiddle",
          link:
            "https://www.songkick.com/concerts/41333956-jeffrey-martin-at-purple-fiddle?utm_source=11593&utm_medium=partner&utm_campaign=ticket-link&utm_content=382006",
        },
        {
          name: "HAGERSTOWN, MD",
          description: "Thursday, April 4, 2024 - hub city vinyl",
          link:
            "https://www.songkick.com/concerts/41644445-jeffrey-martin-at-hub-city-vinyl?utm_source=11593&utm_medium=partner&utm_campaign=ticket-link&utm_content=382006",
        },
        {
          name: "WASHINGTON, DC",
          description: "Friday, April 5, 2024 - Pie Shop",
          link:
            "https://www.songkick.com/concerts/41333964-jeffrey-martin-at-pie-shop?utm_source=11593&utm_medium=partner&utm_campaign=ticket-link&utm_content=382006",
        },
        {
          name: "PHILADELPHIA, PA",
          description: "Saturday, April 6, 2024 - World Cafe Live",
          link:
            "https://www.songkick.com/concerts/41333972-jeffrey-martin-at-world-cafe-live?utm_source=11593&utm_medium=partner&utm_campaign=ticket-link&utm_content=382006",
        },
        {
          name: "BROOKLYN, NY",
          description: "Sunday, April 7, 2024 - The Sultan Room",
          link:
            "https://www.songkick.com/concerts/41333978-jeffrey-martin-at-sultan-room?utm_source=11593&utm_medium=partner&utm_campaign=ticket-link&utm_content=382006",
        },
        {
          name: "MARCELLUS, NY",
          description: "Monday, April 8, 2024 - Riseform Brewing Company",
          link:
            "https://www.eventbrite.com/e/jeffrey-martin-tickets-800361762577?utm_experiment=test_share_listing&aff=ebdsshios",
        },
        {
          name: "CAMBRIDGE, MA",
          description: "Wednesday, April 10, 2024 - Club Passim",
          link:
            "https://www.songkick.com/concerts/41333986-jeffrey-martin-at-club-passim?utm_source=11593&utm_medium=partner&utm_campaign=ticket-link&utm_content=382006",
        },
        {
          name: "AMHERST, MA",
          description: "Friday, April 12, 2024 - The Drake",
          link:
            "https://www.songkick.com/concerts/41333997-jeffrey-martin-at-drake?utm_source=11593&utm_medium=partner&utm_campaign=ticket-link&utm_content=382006",
        },
        {
          name: "EXETER, NH",
          description: "Saturday, April 13, 2024 - The Word Barn",
          link:
            "https://www.songkick.com/concerts/41334002-jeffrey-martin-at-word-barn?utm_source=11593&utm_medium=partner&utm_campaign=ticket-link&utm_content=382006",
        },
        {
          name: "SOUTH BURLINGTON, VT",
          description: "Tuesday, April 16, 2024 - Higher Ground",
          link:
            "https://www.songkick.com/concerts/41334010-jeffrey-martin-at-higher-ground?utm_source=11593&utm_medium=partner&utm_campaign=ticket-link&utm_content=382006",
        },
        {
          name: "GALWAY, NY",
          description: "Wednesday, April 17, 2024 - Cock N'Bull",
          link:
            "https://www.songkick.com/concerts/41334012-jeffrey-martin-at-cock-nbull?utm_source=11593&utm_medium=partner&utm_campaign=ticket-link&utm_content=382006",
        },
        {
          name: "PROVIDENCE, RI",
          description: "Thursday, April 18, 2024 - Fête Lounge",
          link:
            "https://www.songkick.com/concerts/41334017-jeffrey-martin-at-fete-lounge?utm_source=11593&utm_medium=partner&utm_campaign=ticket-link&utm_content=382006",
        },
        {
          name: "KILKENNY, IRELAND",
          description: "Friday, May 3, 2024 - Kilkenny Roots Festival",
          link: "https://kilkennyroots.com/booking/jeffrey-martin/",
        },
        {
          name: "MINNEAPOLIS, MN",
          description: "Thursday, May 9, 2024 - 7th Street Entry",
          link:
            "https://www.songkick.com/concerts/41334025-jeffrey-martin-at-7th-street-entry?utm_source=11593&utm_medium=partner&utm_campaign=ticket-link&utm_content=382006",
        },
      ],
    };
  },
  watch: {
    "$store.state.expandUpcoming"(newValue) {
      if (newValue) this.height = this.$refs.upcoming.scrollHeight;
      this.showUpcoming = newValue;
    },
  },
  components: {
    ShowsItem,
  },
  methods: {
    canShow() {
      const high =
        this.$refs.upcoming.getBoundingClientRect().y <
        window.innerHeight * 0.2;

      if (high && !this.showBtn) {
        this.showBtn = true;
      } else if (!high && this.showBtn) {
        this.showBtn = false;
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
      const showSection = document.querySelector(".show");
      showSection.scrollIntoView({ behavior: "smooth" });

      this.height = 0;
      this.$store.commit("setUpcomingState", false);
    },
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
