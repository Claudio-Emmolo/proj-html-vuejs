<script>
export default {
    name: 'SocialIcons',
    props: ['urlFacebook', 'urlTwitter', 'urlInstagram']
}
</script>

<template>
    <div class="social-icons d-flex justify-content-center">
        <!-- Facebook -->
        <a :href="urlFacebook" class="social d-flex">
            <i class="fa-brands fa-facebook-f m-auto"></i>
        </a>

        <!-- Twitter -->
        <a :href="urlTwitter" class="social d-flex">
            <i class="fa-brands fa-twitter m-auto"></i>
        </a>

        <!-- Instagram -->
        <a :href="urlInstagram" class="social d-flex">
            <i class="fa-brands fa-instagram m-auto"></i>
        </a>

    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;


a.social {
    width: 50px;
    height: 50px;
    background-color: $social-bg;
    border-radius: 50%;
    border: 1.5px solid $social-border;

    margin: 0 .5rem;

    text-decoration: none;
    color: $brand-blue;


    i {
        font-size: 1.3rem;
        color: $social-icon;
    }

    &:hover {
        background-color: $social-bg-hover;
        border: 1.5px solid transparent;

        i {
            color: $social-icon-hover;
        }
    }
}
</style>