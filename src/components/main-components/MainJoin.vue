<script>
import { store } from '../../store';

export default {
    name: 'MainJoin',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <img :src="store.getImagePath('shape-top')" alt="Shape Top" class="shape-wave">
    <section id="join">
        <div class="wrapped-container">

            <div class="info-txt text-center">
                <span>We Create New Worlds!</span>
                <h2>Want Tips On Your Storytelling?</h2>
                <p>
                    Join our newsletter for tips on how to elevate brand through storytelling
                </p>
            </div>
            <div class="send-email d-flex justify-content-center align-items-center">
                <input type="email" placeholder="Enter you email">
                <button>Submit</button>
            </div>
        </div>
    </section>
    <img :src="store.getImagePath('shape-bottom')" alt="Shape Bottom" class="shape-wave wave-bottom">
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;


section#join {
    background-image: url(../../assets/preloader.png);
    background-size: cover;
    background-repeat: no-repeat;

    padding: 5rem 0;
}

img.shape-wave {
    width: 100%;
    background-image: url(../../assets/preloader.png);
    background-size: cover;
    background-repeat: no-repeat;
}

img.wave-bottom {
    background-position-y: -643px;
}

div.info-txt {
    padding: 0 27rem;

    h2,
    p {
        color: $white;
    }

    span {
        color: $brand-orange;
    }

    p {
        margin: 0;
        padding: 0;
    }
}

div.send-email {
    margin: 6rem auto 3rem;
    width: 65%;
    height: 80px;
    background-color: $white;
    border-radius: 3rem;

    input {
        width: 80%;
        height: 80%;
        outline: none;
        border: 0;
        border-radius: 3rem;
        font-size: 1.2rem;
        padding-right: 1rem;
    }

    button {
        width: 18%;
        height: 80%;
        background-color: $brand-pink;
        border: 0;
        border-radius: 3rem;
        font-size: 1.5rem;
        font-weight: 600;
    }
}
</style>