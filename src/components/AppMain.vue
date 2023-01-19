<script>
import MainHero from './main-components/MainHero.vue';
import MainLoveAnimationSection from './main-components/MainLoveAnimationSection.vue';
import MainQuickFact from './main-components/MainQuickFact.vue'


export default {
    name: 'AppMain',
    components: { MainHero, MainLoveAnimationSection, MainQuickFact }
}
</script>

<template>
    <main>
        <!-- Import Hero -->
        <MainHero />
        <!-- Import Love Animation Section -->
        <MainLoveAnimationSection />
        <!-- Import Main Quick Fact Section -->
        <MainQuickFact />
    </main>
</template>

<style lang="scss" scoped>

</style>