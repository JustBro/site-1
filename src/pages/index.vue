<template>
  <div>
    <header>Header</header>
    <nav v-if="this.$route.path === '/'">
      <br />
      <router-link to="/main">Main</router-link>
      <br />
      <br />
      <router-link to="/about">About</router-link>
      <br />
      <br />
      <router-link to="/ui-kit">UI Kit</router-link>
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

<style lang="scss"></style>
