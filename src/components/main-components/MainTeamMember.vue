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
        <div class="wrapped-container">

            <div class="info-txt">
                <span>Anidio Magic Team Member</span>
                <h2>Let Us Animate Your Project</h2>
                <p>
                    We create new worlds!Let's collaborate and create engaging, effective, award-winning animations
                </p>
            </div>

            <div class="container-fluid">
                <div class="row">

                    <div class="col-4 g-5">
                        <div class="inside-profile-card position-relative text-center">
                            <img :src="store.getImagePath('team1')" alt="" class="position-absolute">
                            <div class="txt">
                                <h4>Nome Cognome</h4>
                                <span class="d-block">Mansione</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-4 g-5">
                        <div class="inside-profile-card position-relative text-center">
                            <img :src="store.getImagePath('team1')" alt="" class="position-absolute">
                            <div class="txt">
                                <h4>Nome Cognome</h4>
                                <span class="d-block">Mansione</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-4 g-5">
                        <div class="inside-profile-card position-relative text-center">
                            <img :src="store.getImagePath('team1')" alt="" class="position-absolute">
                            <div class="txt">
                                <h4>Nome Cognome</h4>
                                <span class="d-block">Mansione</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;


section#team-member {
    padding: 6rem 0;
}

div.info-txt {
    text-align: center;
    padding: 0 27rem;
    margin-bottom: 100px;
}

div.inside-profile-card {
    background-color: $brand-light-orange;
    border-radius: 2rem;

    img {
        top: -25%;
        left: 50%;
        transform: translateX(-50%);
    }

    div.txt {
        padding-top: 180px;

        h4 {
            font-size: 1.8rem;
            color: $brand-purple;
        }

        span {
            font-size: 1.5rem;
            font-weight: 100;
            padding-bottom: 2rem;
        }
    }
}
</style>