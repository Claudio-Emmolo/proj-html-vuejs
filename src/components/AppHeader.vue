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
                    <li>
                        <a href="#" class="quote-btn">Get a Quote</a>
                    </li>
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
    object-fit: contain;
}

nav ul {
    list-style-type: none;

    li {
        margin: auto 1rem;

        a {
            font-size: 1.5rem;
            font-weight: 600;
            text-decoration: none;
            color: $white;
        }

        a.quote-btn {
            color: $brand-purple;
            background-color: $brand-pink;
            padding: .8rem 2rem;
            border-radius: 2rem;
        }

    }

}
</style>