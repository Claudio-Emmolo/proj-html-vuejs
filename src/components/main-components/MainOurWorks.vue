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
                    <a href="#" class="see-works-btn">See Our Works</a>
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

}

a.see-works-btn {
    width: max-content;
    margin: 1.5rem 0 4rem;
    font-size: 1.6rem;
    text-decoration: none;
    font-size: 1.8rem;
    color: $btn-white-txt;
    border: 2px solid $btn-white-border;
    padding: .8rem 2rem;
    border-radius: 2rem;

    &:hover {
        background-color: $btn-white-hover-bg;
        color: $btn-white-hover-txt;
        border: 2px solid transparent;
    }
}
</style>