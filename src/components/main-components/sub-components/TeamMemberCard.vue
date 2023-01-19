<script>
import { store } from '../../../store';
import SocialIcons from '../../general-components/SocialIcons.vue';

export default {
    name: 'TeamMemberCard',
    props: ['teamInfo'],
    components: { SocialIcons },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="col-4 g-5">
        <div class="inside-profile-card position-relative text-center">
            <img :src="store.getImagePath(teamInfo.imgPath)" alt="" class="position-absolute">
            <div class="txt">
                <h4>{{ teamInfo.name }}</h4>
                <span class="d-block">{{ teamInfo.role }}</span>

                <SocialIcons :urlFacebook="teamInfo.facebookUrl" :urlTwitter="teamInfo.twitterUrl"
                    :urlInstagram="teamInfo.InstagramUrl" class="social-icons" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/partials/variables' as *;


div.inside-profile-card {
    background-color: $brand-light-orange;
    border-radius: 2rem;

    img {
        top: -15%;
        left: 50%;
        transform: translateX(-50%);
    }

    div.txt {
        padding-top: 200px;

        h4 {
            font-size: 1.8rem;
            color: $brand-purple;
        }

        span {
            font-size: 1.5rem;
            font-weight: 100;
        }
    }

    .social-icons {
        padding: 3rem 0;
    }
}
</style>