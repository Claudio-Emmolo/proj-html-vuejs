<script>
import FooterTop from './footer-components/FooterTop.vue';

export default {
    name: 'AppFooter',
    components: { FooterTop }
}
</script>

<template>
    <footer>
        <div class="wrapped-container">

            <!-- Import Top Footer Section -->
            <FooterTop />

            <div class="separator"></div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

footer {
    padding: 8rem 0 2rem;
}

div.separator {
    height: 2px;
    background-color: $brand-gray;
    margin: 3rem 0;
}
</style>