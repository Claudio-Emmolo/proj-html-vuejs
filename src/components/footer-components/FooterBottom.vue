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
                Softvus.</a> All rights reserved.
        </p>
        <SocialIcons :urlFacebook="'#'" :urlTwitter="'#'" :urlInstagram="'#'" />
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

p {
    font-size: 1.5rem;
}

a {
    text-decoration: none;
    color: $brand-blue;
    font-weight: 700;
}
</style>