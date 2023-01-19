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
    border: 1px solid $brand-purple;
    background-color: transparent;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 0 .3rem;
    opacity: .5;
    font-size: 2rem;
}
</style>