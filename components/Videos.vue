<template>
  <section class="videos">
    <div class="videos__wrapper">
      <div class="videos__column" v-for="i in 3" :key="i">
        <div class="videos__cell" v-for="i in 3" :key="i">
          <div class="videos__top">
            <video class="videos__video" loop muted autoplay>
              <source src="https://assets-global.website-files.com/6579b10df7dab74fc2e10b2a/65918e11d026cf5470ca8ea0_Jeffrey Martin - Red Station Wagon_1-transcode.webm">
            </video>
            <div class="videos__row videos__row--top">
              <span>
                Red Station Wagon | From ONE, To TENN.
              </span>
              <span>2023 </span>
            </div>
            <div class="videos__row videos__row--bottom">
              <span>
                Live Performance
              </span>
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
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~/assets/styles/blocks/videos";
</style>
