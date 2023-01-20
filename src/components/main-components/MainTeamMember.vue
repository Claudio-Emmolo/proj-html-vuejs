<script>
import { store } from '../../store';
import TeamMemberCard from './sub-components/TeamMemberCard.vue';
import ArrowButtonLeft from '../general-components/ArrowButtonLeft.vue';
import ArrowButtonRight from '../general-components/ArrowButtonRight.vue';


export default {
    name: 'MainTeamMember',
    components: { TeamMemberCard, ArrowButtonLeft, ArrowButtonRight },
    data() {
        return {
            store,
            slider: '0px',
            breakpointSlider: 0,
            activePoint: 1,
            teamMemberInfoList: [
                {
                    imgPath: 'team1',
                    name: 'Robert Coleman',
                    role: 'Owner & Creative Director',
                    facebookUrl: '#',
                    twitterUrl: '#',
                    InstagramUrl: '#',
                },
                {
                    imgPath: 'team2',
                    name: 'Don Woods',
                    role: 'Administrator',
                    facebookUrl: '#',
                    twitterUrl: '#',
                    InstagramUrl: '#',
                },
                {
                    imgPath: 'team2',
                    name: 'Tomas Nash',
                    role: '2d animator & Compositor',
                    facebookUrl: '#',
                    twitterUrl: '#',
                    InstagramUrl: '#',
                },
                {
                    imgPath: 'team1',
                    name: 'Robert Coleman',
                    role: '2d animator & Compositor',
                    facebookUrl: '#',
                    twitterUrl: '#',
                    InstagramUrl: '#',
                },
                {
                    imgPath: 'team2',
                    name: 'Tomas Nash',
                    role: '2d animator & Compositor',
                    facebookUrl: '#',
                    twitterUrl: '#',
                    InstagramUrl: '#',
                },
                {
                    imgPath: 'team2',
                    name: 'Tomas Nash',
                    role: '2d animator & Compositor',
                    facebookUrl: '#',
                    twitterUrl: '#',
                    InstagramUrl: '#',
                },
                {
                    imgPath: 'team1',
                    name: 'Robert Coleman',
                    role: '2d animator & Compositor',
                    facebookUrl: '#',
                    twitterUrl: '#',
                    InstagramUrl: '#',
                },
                {
                    imgPath: 'team2',
                    name: 'Tomas Nash',
                    role: '2d animator & Compositor',
                    facebookUrl: '#',
                    twitterUrl: '#',
                    InstagramUrl: '#',
                },
                {
                    imgPath: 'team2',
                    name: 'Tomas Nash',
                    role: '2d animator & Compositor',
                    facebookUrl: '#',
                    twitterUrl: '#',
                    InstagramUrl: '#',
                },
                {
                    imgPath: 'team1',
                    name: 'Robert Coleman',
                    role: '2d animator & Compositor',
                    facebookUrl: '#',
                    twitterUrl: '#',
                    InstagramUrl: '#',
                },
                {
                    imgPath: 'team2',
                    name: 'Tomas Nash',
                    role: '2d animator & Compositor',
                    facebookUrl: '#',
                    twitterUrl: '#',
                    InstagramUrl: '#',
                },
                {
                    imgPath: 'team2',
                    name: 'Tomas Nash',
                    role: '2d animator & Compositor',
                    facebookUrl: '#',
                    twitterUrl: '#',
                    InstagramUrl: '#',
                },
            ]
        }
    },
    methods: {

        prevSlider() {
            if (this.breakpointSlider == 0) {
                this.breakpointSlider = 6400;
                this.activePoint = 5;
            }

            this.activePoint = this.activePoint - 1;
            this.breakpointSlider = this.breakpointSlider - 1600;
            this.slider = `-${this.breakpointSlider}px`;
            console.log(this.breakpointSlider)
        },

        nextSlider() {
            if (this.breakpointSlider == 4800) {
                this.breakpointSlider = -1600;
                this.activePoint = 0;
            }
            this.activePoint += 1;
            this.breakpointSlider += 1600;
            this.slider = `-${this.breakpointSlider}px`;
            console.log(this.breakpointSlider)
        },

        autoplay() {
            setInterval(() => {
                this.nextSlider();
            }, 3000);
        }
    },

    created() {
        this.autoplay()
    }
}
</script>

<template>
    <section id="team-member" class="position-relative">
        <img :src="store.getImagePath('shape')" alt="" class="shape position-absolute">
        <img :src="store.getImagePath('shape2')" alt="" class="shape2  position-absolute">


        <div class="wrapped-container">

            <div class="info-txt">
                <span>Anidio Magic Team Member</span>
                <h2>Let Us Animate Your Project</h2>
                <p>
                    We create new worlds!Let's collaborate and create engaging, effective, award-winning animations
                </p>
            </div>

            <div class="container-fluid overflow-hidden">
                <div class="slider">
                    <div class="row flex-nowrap">
                        <TeamMemberCard v-for="teamInfo in teamMemberInfoList" :teamInfo="teamInfo" />
                    </div>
                </div>
                <div class="row">
                    <div class="team-slider d-flex justify-content-center align-items-center">
                        <ArrowButtonLeft @click="prevSlider()" />
                        <i class="fa-solid fa-circle" :class="(activePoint == 1) ? 'active' : ''"></i>
                        <i class="fa-solid fa-circle" :class="(activePoint == 2) ? 'active' : ''"></i>
                        <i class="fa-solid fa-circle" :class="(activePoint == 3) ? 'active' : ''"></i>
                        <i class="fa-solid fa-circle" :class="(activePoint == 4) ? 'active' : ''"></i>
                        <ArrowButtonRight @click="nextSlider()" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;


section#team-member {
    padding: 6rem 0;
}

img.shape {
    top: 16%;
    width: 55%;
    height: 81%;
}


img.shape2 {
    top: 110px;
    right: 0;
    width: 54%;
    height: 64%;
}

div.info-txt {
    text-align: center;
    padding: 0 27rem;
    margin-bottom: 100px;
}

div.slider {
    transform: translate(v-bind(slider), 0);
    transition: all .5s;
}

div.team-slider {
    width: 100%;
    margin: 2.5rem 0;

    i {
        color: $slider-circle;
        margin: 0 .5rem;
    }


    .active {
        color: $slider-circle-active;
    }
}
</style>