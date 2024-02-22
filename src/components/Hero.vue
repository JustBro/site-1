<template>
  <div class="hero">
    <img class="hero__img" src="../assets/images/img.jpg" alt="" />
    <div class="hero__name">
      <div class="hero__word">
        <span v-for="letter, i in name[0]" :key="i">{{ letter }}</span>
      </div>
      <div class="hero__word">
        <span class="hero__letter" v-for="letter, i in name[1]" :key="i">{{ letter }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ["JEFFREY", "MARTIN"],
    };
  },
};
</script>

<style lang="scss">
@import "~/src/assets/styles/blocks/hero";
</style>
