<script>
import { store } from '../../store';
import OutProcessCard from './sub-components/OurProcessCard.vue';
import ArrowButtonLeft from './sub-components/ArrowButtonLeft.vue';
import ArrowButtonRight from './sub-components/ArrowButtonRight.vue';

export default {
    name: 'MainOurProcess',
    components: { OutProcessCard, ArrowButtonLeft, ArrowButtonRight },
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
                        <ArrowButtonLeft />
                        <ArrowButtonRight />
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