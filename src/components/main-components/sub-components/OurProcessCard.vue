<script>
import { store } from '../../../store';

export default {
    name: 'OurProcessCard',
    props: ['cardContent'],
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="col-6 g-5">
        <div class="card-content position-relative">
            <div class="img-bg-rounded d-flex">
                <img :src="store.getImagePath(cardContent.imgPath)" alt="" class="m-auto">
            </div>
            <h3>{{ cardContent.title }}</h3>
            <p>
                {{ cardContent.subtitle }}
            </p>

            <div class="number position-absolute d-flex justify-content-center align-items-end">
                <span>{{ cardContent.number }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/partials/variables' as *;

div.card-content {
    text-align: center;
    border: 3px solid $brand_light-purple;
    border-radius: 2rem;
    padding: 2rem;

    div.img-bg-rounded {
        margin: auto;
        width: 150px;
        height: 150px;
        background-color: $brand-light-orange;
        border-radius: 50%;
        margin-bottom: 1.5rem;
    }

    h3 {
        font-size: 2.5rem;
        color: $brand-purple;
        margin-bottom: 1.2rem;
    }

    p {
        font-size: 1.5rem;
    }

    div.number {
        top: 0;
        right: 20px;

        width: 40px;
        height: 100px;
        background-color: $brand-light-purple;
        border-radius: 0 0 1rem 1rem;

        span {
            font-size: 1.3rem;
            color: $brand-purple;
            margin-bottom: .5rem;
            font-weight: 600;
        }
    }
}
</style>