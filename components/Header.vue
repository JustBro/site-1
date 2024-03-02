<template>
  <header class="header">
    <span :class="{ expand: $store.getters.getHeaderState }" class="header__logo">
      JEFFREY MARTIN
    </span>
    <nav
      :class="{ expand: $store.getters.getHeaderState }"
      class="header__nav"
    ></nav>
  </header>
</template>

<style lang="scss">
@import "~/assets/styles/blocks/header";
</style>
