<script>
import { store } from '../../store';
import TeamMemberCard from './sub-components/TeamMemberCard.vue'

export default {
    name: 'MainTeamMember',
    components: { TeamMemberCard },
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
    <section id="team-member">
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
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;


section#team-member {
    padding: 6rem 0;
}

div.info-txt {
    text-align: center;
    padding: 0 27rem;
    margin-bottom: 100px;
}
</style>