<script>
import { store } from '../../store'

export default {
    name: 'MainClients',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <section id="our-clients">
        <div class="wrapped-container">
            <div class="info-txt text-center">
                <span>Why Anidio studio?</span>
                <h2>We Love Our Clients</h2>
                <p>
                    We are trusted throughout adland and have a wealth of recommendations from start-ups to renowned
                    global brands
                </p>
            </div>
            <div class="container-fluid">
                <div class="row justify-content-around">
                    <div class="col-2">
                        <img :src="store.getImagePath('sponsor5')" alt="Pillar Logo" class="w-100">
                    </div>
                    <div class="col-2">
                        <img :src="store.getImagePath('sponsor6')" alt="Digital Eagle Logo" class="w-100">
                    </div>
                    <div class="col-2">
                        <img :src="store.getImagePath('sponsor1')" alt="Supreme Logo" class="w-100">
                    </div>
                    <div class="col-2">
                        <img :src="store.getImagePath('sponsor2')" alt="Phoenix Logo" class="w-100">
                    </div>
                    <div class="col-2">
                        <img :src="store.getImagePath('sponsor3')" alt="Cooperation Logo" class="w-100">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section#our-clients {
    padding: 5rem 0;
}

div.info-txt {
    padding: 0 27rem;
    margin-bottom: 100px;
}
</style>