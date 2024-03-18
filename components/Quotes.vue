<template>
  <section class="quotes">
    <ul class="quotes__column" v-for="qoutesList in quotes" :key="qoutesList">
      <li class="quotes__quote" v-for="qoute in qoutesList" :key="quote">
        <p class="quotes__text">{{ qoute.text }}</p>
        <div class="quotes__author-wrapper">
          <span class="quotes__author">{{ qoute.author }}</span>
          <a href=""  class="quotes__link">
            <i class="icon icon--arrow"></i>
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      quotes: [
        [
          {
            text:
              "Songs that are stark in their simplicity, yet emotionally rich in a way that can catch your breath in your throat or leave your eyes suddenly damp.",
            author: "PASTE",
          },
          {
            text:
              "Martin has delivered one of the finest albums of recent times, which if there is any justice should elevate him to the very forefront of the current crop of confessional singer-songwriters and sit high in all the end of year top ten lists. ",
            author: "AMERICANA UK",
          },
          {
            text:
              "There Is A Treasure’ is a deeply human gift of a song and I hope it makes you feel have as blessed as it makes me feel.",
            author: "EAR TO THE GROUND",
          },
          {
            text: "Such honesty, depth, wisdom, and insight.",
            author: "FOLK RADIO",
          },
        ],
        [
          {
            text:
              "Martin’s most mesmerizing album — a masterpiece in any time zone.",
            author: "UNCUT",
          },
          {
            text:
              "Tales of hardship, heartbreak, and hard-won hope that should resonate with anyone living a life in this particular world at this particular time.",
            author: "BANDCAMP",
          },
          {
            text:
              "Martin has one of the best voices in folk music and should be a household name.",
            author: "GLIDE MAGAZINE",
          },
          {
            text:
              "Martin is an ingenious lyricist and observer of life, and his evocatively-titled album speaks to a celebration of all of the rough edges that make us human.",
            author: "ADOBE & TEARDROPS",
          },
        ],
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/quotes";
</style>
