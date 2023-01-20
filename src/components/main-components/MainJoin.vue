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
    <img :src="store.getImagePath('shape-top')" alt="Shape Top" class="shape-wave wave-top">
    <section id="join">
        <div class="wrapped-container">

            <div class="info-txt text-center">
                <span v-motion-slide-visible-once-bottom>We Create New Worlds!</span>
                <h2 v-motion-slide-visible-once-bottom>Want Tips On Your Storytelling?</h2>
                <p v-motion-slide-visible-once-bottom>
                    Join our newsletter for tips on how to elevate brand through storytelling
                </p>
            </div>

            <!-- Email Form -->
            <div v-motion-pop-visible-once class="send-email d-flex justify-content-center align-items-center">
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
    background-position-y: -155px;

    padding: 5rem 0;
}

img.shape-wave {
    width: 100%;
    background-image: url(../../assets/preloader.png);
    background-size: cover;
    background-repeat: no-repeat;
}

img.wave-top {
    background-position-y: -120px;
}

img.wave-bottom {
    background-position-y: -830px;
}

div.info-txt {
    padding: 0 27rem;

    h2,
    p {
        color: $text-bg-violet;
    }

    span {
        color: $pre-text-bg-violet;
    }

    p {
        padding: 0;
        margin: 1.5rem 0;
    }
}

div.send-email {
    margin: 5rem auto 3rem;
    width: 65%;
    height: 80px;
    background-color: $send-email-box;
    border-radius: 3rem;

    input,
    button {
        font-family: 'Barlow', sans-serif;
    }

    input {
        width: 80%;
        height: 80%;
        outline: none;
        border: 0;
        border-radius: 3rem;
        font-size: 1.2rem;
        padding: 0 1rem;
    }

    button {
        width: 18%;
        height: 80%;
        background-color: $send-email-btn_bg;
        color: $send-email-btn_txt;
        border: 0;
        border-radius: 3rem;
        font-size: 1.5rem;
        font-weight: 500;

        &:hover {
            background-color: $send-email-btn-hover_bg;
            color: $send-email-btn-hover-txt;
            border: 1px solid transparent;
        }
    }
}
</style>