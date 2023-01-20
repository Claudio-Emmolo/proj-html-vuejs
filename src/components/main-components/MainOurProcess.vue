<script>
import { store } from '../../store';
import OutProcessCard from './sub-components/OurProcessCard.vue';
import ArrowButtonLeft from '../general-components/ArrowButtonLeft.vue';
import ArrowButtonRight from '../general-components/ArrowButtonRight.vue';

export default {
    name: 'MainOurProcess',
    components: { OutProcessCard, ArrowButtonLeft, ArrowButtonRight },
    data() {
        return {
            store,
            slider: '0px',
            breakpointSlider: 0,
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
                },
                {
                    imgPath: 'process2',
                    title: 'Pre-Production',
                    subtitle: "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
                    number: 2
                },
                {
                    imgPath: 'process1',
                    title: 'Scripting',
                    subtitle: "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
                    number: 3
                },
                {
                    imgPath: 'process2',
                    title: 'Pre-Production',
                    subtitle: "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
                    number: 4
                },
            ]
        }
    },
    methods: {
        prevSlider() {
            if (this.breakpointSlider == 0) {
                this.breakpointSlider = 1215;
            }
            this.breakpointSlider = this.breakpointSlider - 405;
            this.slider = `-${this.breakpointSlider}px`;
            console.log(this.breakpointSlider)
        },

        nextSlider() {
            if (this.breakpointSlider == 1215) {
                this.breakpointSlider = -0;
            }
            this.breakpointSlider += 405;
            this.slider = `-${this.breakpointSlider}px`;
            console.log(this.breakpointSlider)
        }
    }
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
                    <div class="overflow-hidden">
                        <div class="slider">
                            <div class="row flex-nowrap">
                                <OutProcessCard v-for="cardContent in ourProcessCardContentList"
                                    :cardContent="cardContent" />
                            </div>
                        </div>
                    </div>

                    <div class="arrow-btn row">
                        <ArrowButtonLeft @click="prevSlider()" />
                        <ArrowButtonRight @click="nextSlider()" />
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
    padding: 7rem 0 4rem;
}

img.process-thumb {
    top: 0;
    left: -22%;
}

div.slider {
    transform: translate(v-bind(slider), 0);
    transition: all .5s;
    // transform: translate(-405px, 0);
}

div.info-txt {
    padding-right: 5rem;
}

div.arrow-btn {
    padding: 2rem 0;
    margin-left: 1.3rem;
}

img.rocket {
    width: 200px;
    height: 200px;
    right: 15px;
    bottom: -81px;
}
</style>