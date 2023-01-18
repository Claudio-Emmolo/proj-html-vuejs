<script>
import { store } from '../../store';
import HeroIllustrations from './HeroIllustrations.vue'

export default {
    name: 'MainHero',
    components: { HeroIllustrations },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section id="hero" class="position-relative">
        <HeroIllustrations />
        <div class="wrapped-container hero-content h-100 d-flex">
            <div class="hero-inside-info m-auto text-center position-relative">
                <div class="hero-txt mb-4">
                    <span id="pre-title" class="d-block">Image, Create, Experience</span>
                    <h1>We Animate <br> With Ninja-Like Precision</h1>
                    <p>
                        We are a character-driven animation studio striving to make high-quality animations.
                    </p>
                </div>

                <div class="hero-buttons mb-5">
                    <button class="me-5">ITEM</button>
                    <button>ITEM</button>
                </div>

                <div class="middle-video position-absolute w-100">
                    <img :src="store.getImagePath('middle')" alt="Midle Video thumb">
                </div>
            </div>
        </div>
        <img :src="store.getImagePath('bottom-shape')" alt="" class="bottom-shape">
    </section>
</template>

<style lang="scss">
@use '../../styles/partials/variables' as *;


section#hero {
    padding-top: 220px;
    background-image: url(../../assets/banner-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
}

div.hero-content {
    padding-bottom: 200px;
}

div.hero-inside-info {
    padding-bottom: 255px;

    span {
        color: $brand-orange;
        font-size: 1.85rem;
        font-weight: 600;
        margin-bottom: .5rem;
    }

    h1 {
        font-size: 6rem;
        font-weight: 700;
        color: $white;
        margin-bottom: 1rem;
    }

    p {
        color: $white;
        font-size: 1.8rem;
    }
}

div.middle-video {
    transform: scale(1.65);
    bottom: -80%;
}

img.bottom-shape {
    background-image: url(../../assets/banner-bg.png);
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 200px;
}
</style>