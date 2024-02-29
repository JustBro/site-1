<template>
    <header class="header">
        <span v-if="show" class="header__logo">JEFFREY MARTIN</span>
        <nav v-if="show" class="header__nav"></nav>
    </header>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            },
        },
    }
</script>

<style lang="scss">
@import "~/assets/styles/blocks/header";
</style>