<template>
  <header class="header">
    <span :class="{ expand: this.$store.getters.getHeaderState }" class="header__logo">
      JEFFREY MARTIN
    </span>
    <button :class="{ expand: this.$store.getters.getHeaderState }" class="header__nav"></button>
  </header>
</template>

<style lang="scss">
@import "~/assets/styles/blocks/header";
</style>
