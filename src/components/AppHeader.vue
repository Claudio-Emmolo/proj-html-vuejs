<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            navbarItems: [
                {
                    title: 'Home',
                    url: '#'
                },
                {
                    title: 'About Us',
                    url: '#'
                },
                {
                    title: 'Portfolio',
                    url: '#'
                },
                {
                    title: 'Our Process',
                    url: '#'
                },
                {
                    title: 'Pricing',
                    url: '#'
                },
                {
                    title: 'Blog',
                    url: '#'
                },
                {
                    title: 'Contact',
                    url: '#'
                },
            ]
        }
    },
}
</script>

<template>
    <header class="position-absolute w-100">
        <div class="wrapped-container d-flex justify-content-between">
            <a href="#">
                <img :src="store.getImagePath('logo')" alt="Main Logo" id="main-logo">
            </a>
            <nav class="my-auto">
                <ul class="m-0 d-flex align-item-center">
                    <!-- Generate navbar items -->
                    <li v-for="item in navbarItems">
                        <a :href="item.url">
                            {{ item.title }}
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
            color: $menu-item;


            &:hover {
                color: $menu-hover-item;
            }
        }

        a.quote-btn {
            color: $btn-bg-pink_txt;
            background-color: $btn-bg-pink_bg;
            padding: .8rem 2rem;
            border-radius: 2rem;
            border: 2px solid transparent;


            &:hover {
                background-color: transparent;
                color: $btn-bg-pink-hover_txt;
                border: 2px solid $btn-bg-pink_bg;
                -webkit-box-shadow: 0px 5px 13px 1px rgba($btn-bg-pink_bg, 0.65);
                box-shadow: 0px 3px 13px 1px rgba($btn-bg-pink_bg, 0.65);
            }
        }


    }

}
</style>