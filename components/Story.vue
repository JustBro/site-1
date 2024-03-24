<template>
  <section ref="story" class="story">
    <div class="story__side story__side--hero">
      <img
        class="story__img"
        src="~/assets/images/story-img.jpg"
        alt="Jeffrey Martin"
      />
      <div class="story__text">
        <p>
          As a babe Jeffrey Martin sought out solitude as often as he could find
          it. He’s always been that way, and he has never understood the whole
          phenomenon of smiling in pictures, although he is a very happy guy.
          One night in middle school he stayed up under the covers with a
          flashlight and a DiscMan, listening to Reba McEntire’s 'That’s the
          Night that the Lights Went Out in Georgia' on repeat until the DiscMan
          ran out of batteries. That night he became a songwriter, although he
          didn’t actually write a song until years later. After high school he
          spent a few years distracting himself from having to gather up the
          courage to do what he knew he had to do.
        </p>
        <p>
          Eventually he found his way to a writing degree, and then a teaching
          degree. He wrote most days like his life depended on it, all sorts of
          things, not just songs, but songs too. He fell in love with teaching
          high school English, which was fantastic because he never thought he’d
          actually come to truly love it. His students were fierce and
          unstoppable forces of noise and curiosity, and for all that they took
          from him in sleep and sense, they gave him a hundred times back in
          sparks and humility.
        </p>
        <p>
          All the while he was also playing truckloads of music. There was one
          weekend where he flew to LA while grading essays on the plane, played
          two shows, and then flew back home, still grading essays, and woke up
          to teach at 5 am on Monday morning. It was around this time he started
          wondering if such a life was sustainable.
        </p>
        <p>
          Alas, music, the tour life, was a constant raccoon scratching at the
          back door. Jeffrey spent nights on end sitting up in bed, and then
          sitting on the front porch, staring off into the dark, wondering if he
          could bear to leave teaching to go on tour full time. Eventually his
          brain caught up with what his guts had known for months. With tears in
          his eyes he announced to his students that he wouldn’t be back the
          following year, and that he didn’t feel right hollering at them to
          chase their dreams at all cost if he wasn’t going to do the same.
        </p>
        <p>
          Jeffrey Martin tours full time now. He is always making music, and he
          is always coming through your town. He misses teaching like you might
          miss a good old friend who you know you’ll meet again.
        </p>
      </div>
    </div>
    <div ref="bg" class="story__side story__side--bg">
      <img
        class="story__bg-img"
        src="~/assets/images/story-bg.jpg"
        alt="Forest"
      />
    </div>
  </section>
</template>

<script>
import { viewportTracking } from "@/assets/scripts/myLib";

export default {
  mounted() {
    document.addEventListener(
      "scroll",
      viewportTracking(this.$refs.story, this.$refs.bg, 90, "fix")
    );
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/story";
</style>
