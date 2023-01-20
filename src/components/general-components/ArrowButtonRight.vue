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

// General Scroll Arrow button styles
button.arrow-slider {
    width: max-content;
    border: 2px solid $arrow-border;
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
        background-color: $arrow-hover-bg;
        color: $arrow-hover-icon;
    }
}
</style>