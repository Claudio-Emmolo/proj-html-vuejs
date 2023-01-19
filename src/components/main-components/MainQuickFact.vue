<script>
export default {
    name: 'MainQuickFact'
}
</script>

<template>
    <section id="main-quick-fact">
        <div class="wrapped-container">
            <h2 class="text-center">Anidio Quick Facts</h2>
            <div class="container-fluid">
                <div class="row justify-content-around">

                    <div class="counter-card col-3 gx43">
                        <div class="inside-card">
                            <span>000+</span>
                            <h3>Project Done</h3>
                        </div>
                    </div>

                    <div class="counter-card col-3 gx-4">
                        <div class="inside-card">
                            <span>000+</span>
                            <h3>Project Done</h3>
                        </div>
                    </div>
                    <div class="counter-card col-3 gx-4">
                        <div class="inside-card">
                            <span>000+</span>
                            <h3>Project Done</h3>
                        </div>
                    </div>
                    <div class="counter-card col-3 gx-4">
                        <div class="inside-card">
                            <span>000+</span>
                            <h3>Project Done</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;


section#main-quick-fact {
    background-image: url(../../assets/counter-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    color: $white;
    padding: 2rem 0;
}

h2 {
    font-weight: bold;
    font-size: 4.5rem;
    margin-bottom: 5rem;
}

div.inside-card {
    padding: 2rem 4.5rem;
    text-align: center;
    border: 1px solid $white;
    border-radius: 3rem;

    span {
        font-size: 7rem;
    }

    h3 {
        color: $brand-orange;
        font-size: 1.8rem;
    }
}
</style>