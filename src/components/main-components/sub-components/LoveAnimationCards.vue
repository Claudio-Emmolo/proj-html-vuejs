<script>
import { store } from '../../../store'

export default {
    name: 'LoveAnimationCards',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="card">
        <img :src="store.getImagePath('smart1')" alt="Smart1 icon">
        <h3 class="text-center">Titolo</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nam quia laborum fuga culpa dolores
            velit, quaerat quam, amet cupiditate assumenda dolorem ipsam nulla vitae iure vero quisquam vel aspernatur!
        </p>
    </div>
</template>

<style lang="scss">
div.card {
    background-color: cyan;
    padding: 2.5rem 1rem;

    img {
        margin: auto;
        width: 120px;
        height: 120px;
        margin-bottom: 1.2rem;
    }

    h3 {
        font-size: 2.8rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.4rem;
    }
}
</style>