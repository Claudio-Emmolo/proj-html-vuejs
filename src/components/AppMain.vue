<script>
import MainHero from './main-components/MainHero.vue';
import MainLoveAnimationSection from './main-components/MainLoveAnimationSection.vue'

export default {
    name: 'AppMain',
    components: { MainHero, MainLoveAnimationSection }
}
</script>

<template>
    <main>
        <!-- Import Hero -->
        <MainHero />
        <!-- Import Love Animation Section -->
        <MainLoveAnimationSection />
    </main>
</template>

<style lang="scss" scoped>

</style>