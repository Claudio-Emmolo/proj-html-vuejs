<script>
import { store } from '../../../store';

export default {
    name: 'TeamMemberCard',
    props: ['teamInfo'],
    components: {},
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
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../../../styles/partials/variables' as *;


div.inside-profile-card {
    background-color: $brand-light-orange;
    border-radius: 2rem;

    img {
        top: -25%;
        left: 50%;
        transform: translateX(-50%);
    }

    div.txt {
        padding-top: 180px;

        h4 {
            font-size: 1.8rem;
            color: $brand-purple;
        }

        span {
            font-size: 1.5rem;
            font-weight: 100;
            padding-bottom: 2rem;
        }
    }
}
</style>