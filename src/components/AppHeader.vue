<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            navbarItems: [
                'Home',
                'About Us',
                'Portfolio',
                'Our Process',
                'Pricing',
                'Blog',
                'Contact',]
        }
    },
}
</script>

<template>
    <header class="position-absolute w-100">
        <div class="wrapped-container d-flex justify-content-between">

            <img :src="store.getImagePath('logo')" alt="Main Logo" id="main-logo">
            <nav class="my-auto">
                <ul class="m-0 d-flex align-item-center">
                    <li v-for="item in navbarItems">
                        <a href="#">
                            {{ item }}
                        </a>
                    </li>
                    <a href="#" class="quote-btn">Get a quote</a>
                </ul>
            </nav>

        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

header {
    margin: 2rem 0;
    z-index: 3;
}

img#main-logo {
    width: 180px;
}

nav ul {
    list-style-type: none;

    li {
        margin: 0 1rem;

        a {
            text-decoration: none;
            color: $white;
            font-weight: bold;
        }
    }
}
</style>