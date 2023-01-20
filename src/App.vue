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
        color: $pre-text-bg-white;
        font-size: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }

    h2 {
        font-weight: bold;
        color: $text-bg-white;
        font-size: 4.5rem;
        margin-bottom: .3rem;
    }

    p {
        color: $text-bg-white;
        font-size: 1.45rem;
        margin: 1rem 0 2rem;
        font-family: 'Barlow', sans-serif;
    }
}
</style>
