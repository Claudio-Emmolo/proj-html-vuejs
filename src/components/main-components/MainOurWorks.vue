<script>
import { store } from '../../store';


export default {
    name: 'MainOurWorks',
    data() {
        return {
            store,
            workCardItems: ['work1', 'work2', 'work3', 'work4']
        }
    },
}
</script>

<template>
    <section id="our-works">
        <div class="wrapped-container">
            <div class="info-txt">
                <span v-motion-slide-visible-once-bottom>Our Works</span>
                <h2 v-motion-slide-visible-once-bottom>Featured Produtions</h2>
                <p v-motion-slide-visible-once-bottom>
                    Here's just a small sample of some of those project that we're quite proud of. <br>
                    If you're looking for something specific feel free to get in contact with us

                </p>
            </div>
            <div class="container-fluid">
                <div class="row mb-5">
                    <div class="col-6 g-5" v-for="item in workCardItems">
                        <div class="inside-card w-100 h-100 position-relative top-0 start-0">
                            <div class="card-hover position-absolute">
                                <button class="play position-absolute d-flex">
                                    <div class="internal-bg m-auto d-flex">

                                        <i class="fa-solid fa-play m-auto"></i>
                                    </div>
                                </button>
                            </div>
                            <img :src="store.getImagePath(item)" alt="Work Thumb" class="w-100 h-100">
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <a href="#" class="see-works-btn">See Our Work</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

section#our-works {
    padding: 8rem 0 1rem;
}

div.info-txt {
    text-align: center;

}


div.inside-card {
    cursor: pointer;

    &:hover {
        transition: all .5s;
        transform: skewX(3deg);

        div.card-hover {
            display: block;
            animation: scale-hover 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
    }
}

div.card-hover {
    background-color: $our-words-hover-bg;
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
    display: none;

}



a.see-works-btn {
    width: max-content;
    margin: 1.5rem 0 4rem;
    font-size: 1.6rem;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 500;
    color: $btn-white-txt;
    border: 2px solid $btn-white-border;
    padding: .8rem 2rem;
    border-radius: 2rem;

    &:hover {

        background-color: $btn-white-hover-bg;
        color: $btn-white-hover-txt;
        border: 2px solid transparent;
    }
}

button.play {
    width: 80px;
    height: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $our-words-hover-play;
    background-color: $our-words-hover-play_bg-outside;
    border: 0;

    border-radius: 50%;

    &:hover {
        transition: all .2s ease-in-out;
        width: 90px;
        height: 90px;
    }

    &:hover i {
        transition: all .2s ease-in-out;

        font-size: 2rem;
    }

    div.internal-bg {
        width: 60px;
        height: 60px;
        background-color: $our-words-hover-play_bg-inside;
        border-radius: 50%;
    }

    i {
        font-size: 1.5rem;
        padding-left: 5px;
    }

}

@keyframes scale-hover {
    0% {
        transform: scale(0);

        opacity: 0;


    }

    100% {
        transform: scale(1);
        opacity: 1;

    }

}
</style>