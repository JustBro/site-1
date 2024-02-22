<template>
  <div>
    <header>Header</header>
    <nav v-if="this.$route.path === '/'">
      <br />
      <router-link to="/main">Main</router-link>
      <br />
      <br />
    </nav>
    <router-view />
    <footer>Footer</footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~/src/assets/styles/base/base.scss";
</style>
