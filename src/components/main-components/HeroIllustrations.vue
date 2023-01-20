<script>
import { store } from '../../store';

export default {
    name: 'HeroIllustrations',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <img :src="store.getImagePath('left-man')" alt="Left Man" class="bg-img left-man">
    <img :src="store.getImagePath('right-man')" alt="Right Man" class="bg-img right-man">
    <img :src="store.getImagePath('globe1')" alt="Right Man" class="bg-img globe1">
    <img :src="store.getImagePath('globe2')" alt="Right Man" class="bg-img globe2">
    <img :src="store.getImagePath('globe3')" alt="Right Man" class="bg-img globe3">
    <img :src="store.getImagePath('light')" alt="Right Man" class="bg-img light">

    <img :src="store.getImagePath('dots-left')" alt="Right Man" class="bg-img dots-left">
    <img :src="store.getImagePath('dots-right')" alt="Right Man" class="bg-img dots-right">


</template>

<style lang="scss" scoped>
img.bg-img {
    position: absolute;
}


img.left-man {
    margin-top: 80px;
    animation: floating-man-left 5s ease-in-out 0s infinite normal none;
}

img.right-man {
    bottom: 38.5%;
    right: 1%;
    z-index: 3;
    animation: floating-man-right 5s ease-in-out 0s infinite normal none;
}

img.globe1 {
    top: 10%;
    left: 10%;
}

img.globe2 {
    top: 16%;
    left: 62%;
}

img.globe3 {
    top: -17%;
    left: 36%;
}

img.light {
    top: 12%;
    right: 11%;
    transform: scale(1.3);
    z-index: 2;
    animation: light 10s ease-in-out 0s infinite normal none;


}

img.dots-left {
    top: 21%;
    left: 12%;
    transform: scale(1.4);
}

img.dots-right {
    top: 11%;
    right: 5%;
    transform: scale(1.1);
}

@keyframes floating-man-right {
    0% {
        transform: translate(0, 0%);
    }

    50% {
        transform: translate(0, -8%);
    }

    100% {
        transform: translate(0 0);
    }
}

@keyframes floating-man-left {
    0% {}

    50% {
        transform: translate(5%, -2%) rotate(10deg);
    }

    100% {}
}

@keyframes light {
    0% {}

    50% {
        transform: scale(1.3) rotate(10deg);
    }

    100% {}
}
</style>