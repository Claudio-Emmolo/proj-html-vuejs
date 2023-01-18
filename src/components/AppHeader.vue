<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <header>
        <div class="wrapped-container d-flex justify-content-between">

            <img :src="store.getImagePath('logo')" alt="Main Logo" id="main-logo">
            <nav class="my-auto">
                <ul class="m-0 d-flex align-item-center">
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
            </nav>

        </div>
    </header>
</template>

<style lang="scss">
img#main-logo {
    width: 180px;
}

nav ul {
    list-style-type: none;

    li {
        margin: 0 1rem;
    }
}
</style>