<script>
import { store } from '../../store';
import LoveAnimationCards from './sub-components/LoveAnimationCards.vue'

export default {
    name: 'MainLoveAnimationSection',
    components: { LoveAnimationCards },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <section id="love-animation" class="position-relative">
        <img :src="store.getImagePath('smart')" alt="Smart background image" class="position-absolute top-0 start-0">
        <div class="wrapped-container d-flex flex-column w-100">
            <div class="love-info-txt m-auto text-center">

                <span>PreTitle</span>
                <h2>Lorem ipsum <br> dolor sit amet <br> consectetur.</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eaque maiores molestiae sequi enim
                    fuga
                    natus reprehenderit ab ex debitis. Reprehenderit molestias ex quidem consequatur provident .
                </p>
            </div>
            <div class="container">
                <div class="row justify-content-end">
                    <!-- Import Card -->
                    <LoveAnimationCards class="col-3 mx-3" />
                    <LoveAnimationCards class="col-3 mx-3" />
                    <LoveAnimationCards class="col-3 mx-3" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section#love-animation {
    margin-top: 300px;
}

img {
    height: 120%;
}


div.love-info-txt {
    width: 50%;
    position: relative;
    z-index: 2;
    padding-top: 150px;

    span {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 4.5rem;
    }
}
</style>