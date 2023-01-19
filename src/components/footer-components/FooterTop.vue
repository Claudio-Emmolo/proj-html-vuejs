<script>
import { store } from '../../store';

export default {
    name: 'FooterTop',
    data() {
        return {
            store,
            footerNavbarList: ['About Us', 'Porfolio', 'Pricing', 'Career', 'Contact']
        }
    },
}
</script>

<template>
    <section id="top-footer" class="d-flex justify-content-between">
        <img :src="store.getImagePath('footer-logo')" alt="Anido Logo">
        <nav class="d-flex">
            <ul class="m-auto d-flex align-items-center p-0 ">
                <li v-for="item in footerNavbarList">
                    <a href="#">
                        {{ item }}
                    </a>
                </li>
            </ul>
        </nav>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

img {
    width: 180px;
    object-fit: cover;
}

nav ul {
    list-style-type: none;

    li a {
        margin: 0;
        margin: 0 1rem;
        text-decoration: none;
        color: $black;
        font-size: 1.5rem;
        font-weight: 600;
    }
}
</style>