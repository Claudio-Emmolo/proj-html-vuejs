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
    <img :src="store.getImagePath('right-man')" alt="Right Man" class="bg-img end-0">
    <img :src="store.getImagePath('globe3')" alt="Right Man" class="bg-img globe3">
</template>

<style lang="scss" scoped>
img.bg-img {
    position: absolute;
}

img.left-man {
    margin-top: 80px;
}

img.globe3 {
    top: -20%;
    left: 36%;
}
</style>