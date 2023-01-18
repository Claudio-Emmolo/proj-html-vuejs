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
    <header class="position-absolute w-100 py-3">
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

<style lang="scss" scoped>
header {
    z-index: 3;
}

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