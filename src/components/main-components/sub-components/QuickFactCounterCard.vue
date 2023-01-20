<script>
export default {
    name: 'QuickFactCounterCard',
    props: ['counterInfo'],
}
</script>

<template>
    <div class="counter-card col-3 gx43">
        <div class="inside-card">
            <span v-motion-slide-visible-top>{{ counterInfo.number }}</span>
            <h3>{{ counterInfo.description }}</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/partials/variables' as *;

div.inside-card {
    padding: 3rem 3.8rem;
    text-align: center;
    border: 1px solid $border-card-quick-fact;
    border-radius: 3rem;

    span {
        font-size: 5.5rem;
        font-weight: 600;

    }

    h3 {
        color: $description;
        font-size: 1.6rem;
        font-family: 'Barlow', sans-serif;

    }
}
</style>