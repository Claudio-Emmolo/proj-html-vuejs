<script>
import { store } from '../../../store'

export default {
    name: 'LoveAnimationCards',
    props: ['cardProprety'],
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="card"
        :class="(cardProprety.tag == 1) ? 'card-bg-orange' : '' || (cardProprety.tag == 2) ? 'card-bg-blue' : '' || (cardProprety.tag == 3) ? 'card-bg-pink' : ''">
        <img :src="store.getImagePath(cardProprety.imgPath)" alt="Smart1 icon">
        <h3>{{ cardProprety.title }}</h3>
        <p>
            {{ cardProprety.subtitle }}
        </p>
    </div>
</template>

<style lang="scss">
@use '../../../styles/partials/variables' as *;


div.card {
    border-radius: 2rem;
    padding: 2.5rem 1rem;
    border: 2px solid $brand-gray;
    text-align: center;
    cursor: pointer;

    img {
        margin: auto;
        width: 100px;
        height: 100px;
        margin-bottom: 1.2rem;
    }


    h3 {
        font-size: 2.8rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.5rem;
    }
}

div.card-bg-orange {
    background: linear-gradient(0deg, $brand-light-orange 0%, $white 95%);

    &:hover {
        background: linear-gradient(180deg, $brand-light-orange 0%, $white 95%);
    }
}

div.card-bg-blue {
    background: linear-gradient(0deg, $brand_light-purple 0%, $white 95%);

    &:hover {
        background: linear-gradient(180deg, $brand_light-purple 0%, $white 95%);

    }
}

div.card-bg-pink {
    background: linear-gradient(0deg, $brand-pink 0%, $white 95%);

    &:hover {
        background: linear-gradient(180deg, $brand_light-purple 0%, $white 95%);
    }

}
</style>