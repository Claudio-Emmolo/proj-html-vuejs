<script>
import { store } from '../../store';
import LoveAnimationCards from './sub-components/LoveAnimationCards.vue'

export default {
    name: 'MainLoveAnimationSection',
    components: { LoveAnimationCards },
    data() {
        return {
            store,
            loveAnimCardList: [
                {
                    tag: 1,
                    imgPath: 'smart1',
                    title: '3D modeling',
                    subtitle: "We constantly ask questions. It help us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations."
                },
                {
                    tag: 2,
                    imgPath: 'smart2',
                    title: 'Collaboration',
                    subtitle: "We constantly ask questions. It help us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations."
                },
                {
                    tag: 3,
                    imgPath: 'smart3',
                    title: 'Creativity',
                    subtitle: "We constantly ask questions. It help us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations."
                },
            ]
        }
    },
}
</script>

<template>
    <section id="love-animation" class="position-relative">
        <img :src="store.getImagePath('smart')" alt="Smart background image"
            class="smart-right-img position-absolute top-0 start-0">
        <div class="wrapped-container d-flex flex-column w-100">
            <div class="info-txt m-auto text-center">
                <span v-motion-slide-visible-once-bottom>Our Love For Animation</span>
                <h2 v-motion-slide-visible-once-bottom>We're Storytelling <br> Exports With Creative <br> Smarts</h2>
                <p v-motion-slide-visible-once-bottom>
                    Our culture inspires the creative and innovative spirit found throughout our Studio. We breathe life
                    into new ideas!

                </p>
            </div>
            <div class="container-fluid">
                <div class="love-animation-cards row justify-content-end">
                    <!-- Generate Cards -->
                    <LoveAnimationCards v-motion-slide-visible-once-right v-for="cardProprety in loveAnimCardList"
                        class="col-3 mx-3" :cardProprety="cardProprety" />
                </div>
            </div>
        </div>
        <img :src="store.getImagePath('smart4')" alt="Rocket img" class="rocket position-absolute">
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

section#love-animation {
    margin-top: 300px;
}

img.smart-right-img {
    width: 700px;
    height: 1200px;
}


div.info-txt {
    width: 50%;
    position: relative;
    z-index: 2;
    padding-left: 30px;
    padding-top: 150px;

    p {
        margin: 1rem 0 4rem;
    }
}

div.love-animation-cards {
    margin: 0 0 185px 100px;
}

img.rocket {
    width: 200px;
    height: 200px;
    bottom: 0;
    right: 10px
}
</style>