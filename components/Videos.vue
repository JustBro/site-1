<template>
  <section class="videos">
    <div class="videos__wrapper">
      <div class="videos__row" v-for="infoArr in videos" :key="infoArr[0].name">
        <div
          class="videos__cell"
          v-for="videoInfo in infoArr"
          :key="videoInfo.id"
          @mouseover="playVideo"
          @mouseleave="pauseVideo"
        >
          <div class="videos__video-wrapper">
            <i class="icon icon--play"></i>
            <video class="videos__video" loop muted playsinline>
              <source :src="videoInfo.video" />
            </video>
          </div>
          <div class="videos__row videos__row--top">
            <span> {{ videoInfo.name }} </span>
            <span>{{ videoInfo.year }}</span>
          </div>
          <div class="videos__row videos__row--bottom">
            <span> {{ videoInfo.type }} </span>
            <div class="videos__play">
              <i class="icon icon--play"></i>
              <div class="videos__watch">
                <span class="videos__letter">W</span>
                <span class="videos__letter">A</span>
                <span class="videos__letter">T</span>
                <span class="videos__letter">C</span>
                <span class="videos__letter">H</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        [
          {
            name: "Red Station Wagon | From ONE, To TENN.",
            year: 2023,
            type: "Live Perfomance",
            video:
              "https://assets-global.website-files.com/6579b10df7dab74fc2e10b2a/65918e11d026cf5470ca8ea0_Jeffrey Martin - Red Station Wagon_1-transcode.webm",
            id: 10,
          },
          {
            name: "There Is a Treasure",
            year: 2023,
            type: "Music Vidoe",
            video:
              "https://assets-global.website-files.com/6579b10df7dab74fc2e10b2a/65918e2a4d6df02a5fd91d39_Jeffrey Martin - There Is a Treasure_1-transcode.webm",
            id: 10,
          },
          {
            name: "Finding The Heart (On Tour)",
            year: 2022,
            type: "Short Feature",
            video:
              "https://assets-global.website-files.com/6579b10df7dab74fc2e10b2a/65918e03dbb6f549d63e4e05_Jeffrey Martin - Finding The Heart_1-transcode.webm",
            id: 10,
          },
        ],
        [
          {
            name: "OurVinyl Sessions",
            year: 2022,
            type: "Live Perfomance",
            video:
              "https://assets-global.website-files.com/6579b10df7dab74fc2e10b2a/65918e0a50e3623a10fa47cb_Jeffrey Martin - OurVinyl Sessions_1-transcode.webm",
            id: 10,
          },
          {
            name: "Billy Burroughs | Live at Other Voices Dignity",
            year: 2022,
            type: "Live Perfomance",
            video:
              "https://assets-global.website-files.com/6579b10df7dab74fc2e10b2a/65918df05e79882f91867897_Jeffrey Martin - Billy Burroughs_1-transcode.webm",
            id: 10,
          },
          {
            name: "Sculptor | Live At The Rhududu",
            year: 2021,
            type: "Live Perfomance",
            video:
              "https://assets-global.website-files.com/6579b10df7dab74fc2e10b2a/65918e187aaa6e39df9cebc8_Jeffrey Martin - Sculptor_1-transcode.webm",
            id: 10,
          },
        ],
        [
          {
            name: "Audiotree Live Session",
            year: 2018,
            type: "Live Perfomance",
            video:
              "https://assets-global.website-files.com/6579b10df7dab74fc2e10b2a/65918de81c9471b30726faec_Jeffrey Martin - Audiotree_1-transcode.webm",
            id: 10,
          },
          {
            name: "Coal Fire | Timber House Concerts",
            year: 2016,
            type: "Live Perfomance",
            video:
              "https://assets-global.website-files.com/6579b10df7dab74fc2e10b2a/65918dfb75e1726ece95b5bf_Jeffrey Martin - Coal Fire_1-transcode.webm",
            id: 10,
          },
          {
            name: "Angeline",
            year: 2012,
            type: "Music Video",
            video:
              "https://assets-global.website-files.com/6579b10df7dab74fc2e10b2a/65918dd335540c235798df8c_Jeffrey Martin - Angeline_1-transcode.webm",
            id: 10,
          },
        ],
      ],
    };
  },
  methods: {
    playVideo(e) {
      e.target.closest(".videos__cell").querySelector("video").play();
    },
    pauseVideo(e) {
      e.target.closest(".videos__cell").querySelector("video").pause();
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/videos";
</style>
