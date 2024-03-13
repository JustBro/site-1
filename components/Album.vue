<template>
  <section class="album">
    <div class="album__border"></div>
    <div class="album__disk">
      <button class="album__btn-close">
        <i class="icon icon--close"></i>
      </button>
      <div class="album__info-horizon">
        <span>LP</span>
        <span>2023</span>
      </div>
      <div class="album__info-vertical">
        <div class="album__info-top">
          <span>Recorded in</span>
          <span>Portland, OR, US</span>
        </div>
        <span>© 2023 Jeffrey Martin</span>
      </div>
      <button class="album__btn">
        <span>discover</span>
      </button>
      <div class="album__info">
        <img src="../assets/images/album-1.jpg" alt="Album image" />
        <span>Currently playing</span>
        <span class="album__info-song-name">Red Station Wagon</span>
      </div>
    </div>
    <div class="album__wrapper">
      <h2 class="album__title">
        <span>thank God we</span>
        <span>left the garden</span>
      </h2>
      <div class="album__list">
        <span class="album__duration">38:34</span>
        <ul class="album__songs">
          <li class="album__song" v-for="song in songs" :key="song.name">
            <span class="album__song-name">{{ song.name }}</span>
            <div class="album__line"></div>
            <span>{{ song.duration }}</span>
          </li>
        </ul>
      </div>
      <div class="album__call">
        <button class="album__btn">
          <span>bye now</span>
        </button>
        <button class="album__btn">
          <span>listen on spotify</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      songs: [
        {
          name: "Lost Dog",
          duration: "02:59",
        },
        {
          name: "Garden",
          duration: "03:02",
        },
        {
          name: "Quiet Man",
          duration: "03:39",
        },
        {
          name: "Red Station Wagon",
          duration: "04:14",
        },
        {
          name: "Paper Crown",
          duration: "03:26",
        },
        {
          name: "There Is a Treasure",
          duration: "03:47",
        },
        {
          name: "All My Love",
          duration: "02:35",
        },
        {
          name: "Daylight",
          duration: "03:44",
        },
        {
          name: "I Didn’t Know",
          duration: "03:55",
        },
        {
          name: "Sculptor",
          duration: "03:29",
        },
        {
          name: "Walking",
          duration: "03:39",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/album";
</style>
