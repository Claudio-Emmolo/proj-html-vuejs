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
}

img.right-man {
    bottom: 37%;
    right: 1%
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
    top: -18%;
    left: 36%;
}

img.light {
    top: 11%;
    right: 11%;
    transform: scale(1.3);
}

img.dots-left {
    top: 14%;
    left: 8%;
}

img.dots-right {
    top: 8%;
    right: 4%;
}
</style>