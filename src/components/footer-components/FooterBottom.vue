<script>
import SocialIcons from '../general-components/SocialIcons.vue';


export default {
    name: 'FooterBottom',
    components: { SocialIcons }
}
</script>

<template>
    <section id="bottom-footer" class="d-flex justify-content-between">
        <p>
            Copyright &copy; 2002
            <a href="#">
                Softivus.</a> All rights reserved.
        </p>
        <!-- Import Social Icons -->
        <SocialIcons :urlFacebook="'#'" :urlTwitter="'#'" :urlInstagram="'#'" />
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

p {
    font-size: 1.45rem;
    font-family: 'Barlow', sans-serif;
}

a {
    text-decoration: none;
    color: $href-link;
    font-weight: 700;

    &:hover {
        color: $href-hover-link;
    }
}
</style>