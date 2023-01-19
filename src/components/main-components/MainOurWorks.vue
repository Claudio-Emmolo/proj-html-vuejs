<script>
import { store } from '../../store';


export default {
    name: 'MainOurWorks',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <section id="our-works">
        <div class="wrapped-container">
            <div class="info-txt">
                <span>Our Works</span>
                <h2>Featured Produtions</h2>
                <p>
                    Here's just a small sample of some of those project thath we're quite proud of. <br>
                    If you're looking for something specific feel free to get in contact with us

                </p>
            </div>
            <div class="container-fluid">
                <div class="row mb-5">
                    <div class="col-6 g-5">
                        <img :src="store.getImagePath('work1')" alt="Work Thumb" class="w-100">
                    </div>
                    <div class="col-6 g-5">
                        <img :src="store.getImagePath('work2')" alt="Work Thumb" class="w-100">
                    </div>
                    <div class="col-6 g-5">
                        <img :src="store.getImagePath('work3')" alt="Work Thumb" class="w-100">
                    </div>
                    <div class="col-6 g-5">
                        <img :src="store.getImagePath('work4')" alt="Work Thumb" class="w-100">
                    </div>
                </div>
                <div class="row justify-content-center">
                    <button>See More</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

section#our-works {
    padding: 8rem 0 1rem;
}

div.info-txt {
    text-align: center;

    span {
        display: block;
        color: $brand-blue;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    h2 {
        font-weight: bold;
        color: $brand-purple;
        font-size: 4.5rem;
    }

    p {
        color: $brand-purple;
        font-size: 1.35rem;
        margin: 1rem 0 2rem;
    }
}

button {
    width: max-content;
}
</style>