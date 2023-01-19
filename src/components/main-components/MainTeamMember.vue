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
            ]
        }
    },
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

            <div class="container-fluid">
                <div class="row">
                    <TeamMemberCard v-for="teamInfo in teamMemberInfoList" :teamInfo="teamInfo" />
                </div>
                <div class="row">
                    <div class="team-slider d-flex justify-content-center align-items-center">
                        <ArrowButtonLeft />
                        <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-circle active"></i>
                        <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-circle"></i>
                        <ArrowButtonRight />
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
    top: 14%;
    width: 45%;
}


img.shape2 {
    top: 131px;
    right: 0;
    width: 54%;
}

div.info-txt {
    text-align: center;
    padding: 0 27rem;
    margin-bottom: 100px;
}

div.team-slider {
    width: 100%;
    margin: 2.5rem 0;

    i {
        color: $brand_dark-purple;
        margin: 0 .5rem;
    }

    .active {
        color: $brand-orange;
    }
}
</style>