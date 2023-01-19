<script>
import { store } from '../../store';

import QuickFactCounterCard from './sub-components/QuickFactCounterCard.vue';

export default {
    name: 'MainQuickFact',
    components: { QuickFactCounterCard },
    data() {
        return {
            store,
            counterCardsInfoList: [
                {
                    number: '700+',
                    description: 'Projects done'
                },
                {
                    number: '250+',
                    description: 'Happy Clients'
                },
                {
                    number: '25+',
                    description: 'Team Members'
                },
                {
                    number: '12+',
                    description: 'Years on the market'
                }
            ]
        }
    },
}
</script>

<template>
    <img :src="store.getImagePath('shape-top')" alt="Shape Wave Top" class="wave-top">
    <section id="main-quick-fact" class="position-relative">
        <!-- <img :src="store.getImagePath('globe1')" alt="Globe 1 img"
            class="globe-bg-img position-absolute top-50 start-50"> -->
        <div class="wrapped-container">
            <h2 class="text-center">Anidio Quick Facts</h2>

            <!-- Import and Generate Counter Cards -->
            <div class="container-fluid">
                <div class="row justify-content-around">
                    <QuickFactCounterCard v-for="counterInfo in counterCardsInfoList" :counterInfo="counterInfo" />
                </div>
            </div>

        </div>
    </section>
    <img :src="store.getImagePath('shape-bottom')" alt="Shape Wave Top" class="wave-bottom">
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

img.wave-top,
img.wave-bottom {
    width: 100%;
    background-image: url(../../assets/preloader.png);
    background-repeat: no-repeat;
    background-size: cover;
}

img.wave-top {
    background-position: top;

}

img.wave-bottom {
    background-position-y: -750px;
}

img.globe-bg-img {
    width: 500px;
    height: 500px;
    transform: translate(-50%, -50%);
    opacity: .3;
}

section#main-quick-fact {
    background-image: url(../../assets/preloader.png);
    background-size: cover;
    background-repeat: no-repeat;
    color: $white;
    padding: 120px 0;
}

h2 {
    z-index: 3;
    font-weight: bold;
    font-size: 4.5rem;
    margin-bottom: 5rem;
}
</style>