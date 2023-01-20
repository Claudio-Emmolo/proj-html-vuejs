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
                <div class="hero-txt">
                    <span id="pre-title" class="d-block">Image, Create, Experience</span>
                    <h1>We Animate <br> With Ninja-Like Precision</h1>
                    <p>
                        We are a character-driven animation studio striving to make high-quality animations.
                    </p>
                </div>

                <div class="hero-buttons">
                    <a href="#" class="pink-btn">Start Project</a>
                    <a href="#" class="blue-btn">Portfolio</a>
                </div>

                <div class="middle-video position-absolute w-100">
                    <div class="play-button position-relative">
                        <button class="play position-absolute d-flex">
                            <div class="internal-bg m-auto d-flex">

                                <i class="fa-solid fa-play m-auto"></i>
                            </div>
                        </button>
                        <img :src="store.getImagePath('middle')" alt="Midle Video thumb">
                    </div>
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
    padding-bottom: 240px;

    span {
        color: $pre-text-bg-violet;
        font-size: 1.85rem;
        font-weight: 600;
        margin-bottom: .5rem;
    }

    h1 {
        font-size: 6rem;
        font-weight: 700;
        color: $text-bg-violet;
        margin-bottom: 1rem;
    }

    p {
        color: $text-bg-violet;
        font-size: 1.8rem;
        margin-bottom: 5rem;
        font-family: 'Barlow', sans-serif;
    }
}

div.hero-buttons {
    a {
        text-decoration: none;
        margin: 0 1.5rem;
        font-size: 1.8rem;
        font-weight: 600;
    }

    a.pink-btn {
        color: $btn-bg-pink_txt;
        background-color: $btn-bg-pink_bg;
        padding: .8rem 2rem;
        border-radius: 2rem;
        border: 1px solid transparent;


        &:hover {
            color: $btn-bg-pink-hover_txt;
            border: 1px solid $btn-bg-pink_bg;
            background-color: transparent;
            -webkit-box-shadow: 0px 5px 13px 1px rgba($btn-bg-pink_bg, 0.65);
            box-shadow: 0px 3px 13px 1px rgba($btn-bg-pink_bg, 0.65);
        }
    }

    a.blue-btn {
        color: $btn-border-pink_txt;
        border: 1px solid $btn-border-pink-border-bg;
        padding: .8rem 2rem;
        border-radius: 2rem;

        -webkit-box-shadow: 0px 5px 13px 1px rgba($btn-border-pink-border-bg, 0.65);
        box-shadow: 0px 3px 13px 1px rgba($btn-border-pink-border-bg, 0.65);

        &:hover {
            color: $btn-border-pink-hover_txt;
            background-color: $btn-border-pink-border-bg;
            box-shadow: 0 0 0 0;
        }
    }
}

div.middle-video {
    transform: scale(1.65);
    bottom: -80%;
    z-index: 3;


    button.play {
        width: 80px;
        height: 80px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $white;
        background-color: $play-button-video-outside;
        border: 0;

        border-radius: 50%;

        div.internal-bg {
            width: 60px;
            height: 60px;
            background-color: $play-button-video-inside;
            border-radius: 50%;
        }

        i {
            font-size: 1.5rem;
            padding-left: 5px;
        }

    }

}


img.bottom-shape {
    background-image: url(../../assets/banner-bg.png);
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 220px;
}
</style>