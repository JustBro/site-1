<template>
  <div>
    <Header />
    <nuxt/>
    <footer>Footer</footer>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: { Header },
};
</script>

<style lang="scss">
@import "~/assets/styles/base/base.scss";
</style>
