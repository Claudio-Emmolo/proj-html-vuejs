<script>
export default {
    name: 'ArrowButtonRight'
}
</script>

<template>
    <button class="arrow-slider">
        <i class="fa-solid fa-arrow-right"></i>
    </button>
</template>

<style lang="scss">
@use '../../styles/partials/variables' as *;


button.arrow-slider {
    width: max-content;
    border: 2px solid $brand-gray;
    background-color: transparent;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 0 .3rem;
    opacity: .4;
    font-size: 2rem;
    z-index: 3;

    &:hover {
        opacity: 1;
        background-color: $brand-orange;
        color: $white;
    }
}
</style>