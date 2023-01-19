<script>
import { store } from '../../store';
import OutProcessCard from './sub-components/OurProcessCard.vue'

export default {
    name: 'MainOurProcess',
    components: { OutProcessCard },
    data() {
        return {
            store,
            ourProcessCardContentList: [
                {
                    imgPath: 'process2',
                    title: 'Pre-Production',
                    subtitle: "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
                    number: 4
                },
                {
                    imgPath: 'process1',
                    title: 'Scripting',
                    subtitle: "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
                    number: 1
                }
            ]
        }
    },
}
</script>

<template>
    <section id="our-process" class="position-relative">
        <img :src="store.getImagePath('process-thumb')" alt="Process Background Thumb"
            class="process-thumb position-absolute h-100">
        <div class="wrapped-container">
            <div class="row">
                <div class="col-6 offset-6">
                    <div class="info-txt">
                        <span>Our Process</span>
                        <h2>Our Process for Your Animation Production</h2>
                        <p>
                            We have an effective process for working on animation
                        </p>
                    </div>

                    <div class="row">
                        <OutProcessCard v-for="cardContent in ourProcessCardContentList" :cardContent="cardContent" />
                    </div>

                    <div class="arrow-btn row">
                        <button>
                            <i class="fa-solid fa-arrow-left"></i>
                        </button>
                        <button>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
        <img :src="store.getImagePath('smart4')" alt="Rocket img" class="rocket position-absolute">

    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

section#our-process {
    padding: 5rem 0;
}

img.process-thumb {
    top: 0;
    left: -19%;
}


div.info-txt {
    padding-right: 5rem;

    span {
        display: block;
        color: $brand-blue;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    h2 {
        font-weight: bold;
        color: $brand-purple;
        font-size: 4.5rem;
    }

    p {
        color: $brand-purple;
        font-size: 1.35rem;
        margin: 1rem 0 2rem;
    }
}

div.arrow-btn {
    padding: 2rem 0;
    margin-left: 1rem;

    button {
        width: max-content;
        border: 1px solid $brand-purple;
        background-color: transparent;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin: 0 .3rem;
        opacity: .5;
        font-size: 2rem;
    }
}

img.rocket {
    width: 200px;
    height: 200px;
    right: 10px
}
</style>