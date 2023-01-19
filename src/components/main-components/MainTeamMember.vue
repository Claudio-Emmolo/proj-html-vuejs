<script>
import { store } from '../../store'

export default {
    name: 'MainTeamMember',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <section id="team-member">
        <div class="info-txt">
            <span>Anidio Magic Team Member</span>
            <h2>Let Us Animate Your Project</h2>
            <p>
                We create new worlds!Let's collaborate and create engaging, effective, award-winning animations
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section#team-member {
    padding: 6rem 0;
}

div.info-txt {
    text-align: center;
    padding: 0 37rem;
}
</style>