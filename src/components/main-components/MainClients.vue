<script>
import { store } from '../../store'

export default {
    name: 'MainClients',
    data() {
        return {
            store,
            clientImgList: [
                {
                    imgPath: 'sponsor5',
                    alt: 'Pillar Logo'
                },
                {
                    imgPath: 'sponsor6',
                    alt: 'Digital Eagle Logo'
                },
                {
                    imgPath: 'sponsor1',
                    alt: 'Supreme Logo'
                },
                {
                    imgPath: 'sponsor2',
                    alt: 'Phoenix Logo'
                },
                {
                    imgPath: 'sponsor3',
                    alt: 'Cooperation Logo'
                },
            ]
        }
    },
}
</script>

<template>
    <section id="our-clients">
        <div class="wrapped-container">
            <div class="info-txt text-center">
                <span v-motion-slide-visible-once-bottom>Why Anidio studio?</span>
                <h2 v-motion-slide-visible-once-bottom>We Love Our Clients</h2>
                <p v-motion-slide-visible-once-bottom>
                    We are trusted throughout adland and have a wealth of recommendations from start-ups to renowned
                    global brands
                </p>
            </div>
            <div class="container-fluid " v-motion-slide-visible-once-left>
                <div class="row justify-content-around">
                    <div class="col-2" v-for="imgUrl in clientImgList">
                        <img :src="store.getImagePath(imgUrl.imgPath)" :alt="imgUrl.alt" class="w-100">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section#our-clients {
    padding: 8rem 0 10rem;
}

div.info-txt {
    padding: 0 27rem;
    margin-bottom: 100px;
}
</style>