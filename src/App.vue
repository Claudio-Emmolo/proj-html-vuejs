<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue'


export default {
    name: 'App',
    components: { AppHeader, AppMain, AppFooter },
}
</script>

<template>
    <!-- Import Header -->
    <AppHeader />
    <!-- Import Main -->
    <AppMain />
    <!-- Import Footer -->
    <AppFooter />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

div.info-txt {

    span {
        display: block;
        color: $brand-blue;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    h2 {
        font-weight: bold;
        color: $brand-purple;
        font-size: 4.5rem;
    }

    p {
        color: $brand-purple;
        font-size: 1.35rem;
        margin: 1rem 0 2rem;
    }
}
</style>
