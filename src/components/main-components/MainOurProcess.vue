<script>
import { store } from '../../store'
export default {
    name: 'MainOurProcess',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <section id="our-process" class="position-relative">
        <img :src="store.getImagePath('process-thumb')" alt="Process Background Thumb"
            class="process-thumb position-absolute h-100">
        <div class="wrapped-container">
            <div class="row">
                <div class="col-6 offset-6">
                    <div class="info-txt">
                        <span>Our Process</span>
                        <h2>Our Process for Your Animation Production</h2>
                        <p>
                            We have an effective process for working on animation
                        </p>
                    </div>

                    <div class="row">
                        <div class="col-6 g-5">
                            <div class="card-content">
                                <div class="img-bg-rounded d-flex">
                                    <img :src="store.getImagePath('process1')" alt="" class="m-auto">
                                </div>
                                <h3>Pre-Production</h3>
                                <p>
                                    We'll take your idea and create a technical script which consists of action notes
                                    and animation descriptions
                                </p>
                            </div>
                        </div>
                        <div class="col-6 g-5">
                            <div class="card-content">
                                <div class="img-bg-rounded d-flex">
                                    <img :src="store.getImagePath('process1')" alt="" class="m-auto">
                                </div>
                                <h3>Pre-Production</h3>
                                <p>
                                    We'll take your idea and create a technical script which consists of action notes
                                    and animation descriptions
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '../../styles/partials/variables' as *;

section#our-process {
    padding: 5rem 0;
}

img.process-thumb {
    top: 0;
    left: -19%;
}


div.info-txt {
    padding-right: 5rem;

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
}
</style>