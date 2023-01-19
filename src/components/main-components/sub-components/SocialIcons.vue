<script>
export default {
    name: 'SocialIcons',
    props: ['urlFacebook', 'urlTwitter', 'urlInstagram']
}
</script>

<template>
    <div class="social-icons d-flex justify-content-center">

        <a :href="urlFacebook" class="social d-flex">
            <i class="fa-brands fa-facebook-f m-auto"></i>
        </a>


        <a :href="urlTwitter" class="social d-flex">
            <i class="fa-brands fa-twitter m-auto"></i>
        </a>


        <a :href="urlInstagram" class="social d-flex">
            <i class="fa-brands fa-instagram m-auto"></i>
        </a>

    </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/partials/variables' as *;


a.social {
    width: 50px;
    height: 50px;
    background-color: $white;
    border-radius: 50%;
    border: 1.5px solid $brand_dark-purple;

    margin: 0 .5rem;

    text-decoration: none;
    color: $brand-blue;


    i {
        font-size: 1.3rem;
        color: $brand-blue;
    }
}
</style>