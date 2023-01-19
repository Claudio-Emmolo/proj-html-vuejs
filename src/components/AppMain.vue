<script>
import MainHero from './main-components/MainHero.vue';
import MainLoveAnimationSection from './main-components/MainLoveAnimationSection.vue';
import MainQuickFact from './main-components/MainQuickFact.vue';
import MainOurWorks from './main-components/MainOurWorks.vue';
import MainOurProcess from './main-components/MainOurProcess.vue';
import MainTeamMember from './main-components/MainTeamMember.vue';
import MainClients from './main-components/MainClients.vue';
import MainJoin from './main-components/MainJoin.vue';







export default {
    name: 'AppMain',
    components: { MainHero, MainLoveAnimationSection, MainQuickFact, MainOurWorks, MainOurProcess, MainTeamMember, MainClients, MainJoin }
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
        <!-- Import Main Our Works Section -->
        <MainOurWorks />
        <!-- Import Main Our Process Section -->
        <MainOurProcess />
        <!-- Import Main Team Meber Section -->
        <MainTeamMember />
        <!-- Import Main Our Clients Section -->
        <MainClients />
        <!-- Import Main Join Section -->
        <MainJoin />


    </main>
</template>

<style lang="scss" scoped>

</style>