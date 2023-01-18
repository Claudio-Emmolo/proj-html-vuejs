<script>
export default {
    name: 'MainHero',
}
</script>

<template>
    <section id="hero">
        <div class="wrapped-container h-100 d-flex">
            <div class="inside m-auto">
                <h1>Cose</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quasi adipisci deleniti natus,
                    magnam
                    ipsam ducimus voluptatem dolorum eum perspiciatis eligendi fugit tempore sint repellendus beatae,
                    sequi
                    molestias veniam possimus?
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
section#hero {
    background-image: url(../../assets/banner-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px; //To remove
}
</style>