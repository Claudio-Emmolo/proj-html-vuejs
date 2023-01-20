<script>
import { store } from '../store';

export default {
    name: 'SiteLoader',
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div class="site-loader d-flex">
        <img class="m-auto" :src="store.getImagePath('rocket-banner')" alt="">
    </div>
</template>

<style lang="scss">
div.site-loader {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/preloader.png);
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 10;

    img {
        animation: loader 2s ease-in-out 0s infinite normal none;

    }
}

@keyframes loader {
    0% {
        transform: translateX(-30%);
    }

    100% {
        transform: translateX(30%);
    }
}
</style>