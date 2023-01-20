<script>
import FooterTop from './footer-components/FooterTop.vue';
import FooterBottom from './footer-components/FooterBottom.vue';


export default {
    name: 'AppFooter',
    components: { FooterTop, FooterBottom }
}
</script>

<template>
    <footer class="position-relative">
        <div class="wrapped-container">

            <!-- Import Top Footer Section -->
            <FooterTop v-motion-pop-visible />

            <!-- Separator Line -->
            <div v-motion-pop-visible class="separator"></div>

            <!-- Import Bottom Footer Section -->
            <FooterBottom v-motion-pop-visible />
        </div>

        <a href="#">
            <i class="fa-solid fa-arrow-up position-absolute"></i>
        </a>

    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

footer {
    padding: 8rem 0 2rem;
}

div.separator {
    height: 2px;
    background-color: $separator;
    margin: 3rem 0;
}

i.fa-arrow-up {
    bottom: 10%;
    right: 2%;
    padding: 1rem;
    color: $arrow-up-txt;
    background-color: $arrow-up-bg;

    &:hover {
        background-color: $arrow-up-hover;
    }
}
</style>