<template>
    <NavbarComponent>
    </NavbarComponent>
   <h1>Bienvenue {{ this.$store.state.utilisateur.prenom + " " + this.$store.state.utilisateur.nom}} </h1>
    <div>
        Information utilisateur:
    </div>
    <div v-if="utilisateur">
        <h>
            {{ utilisateur }}
        </h>
    </div>
</template>
<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
    computed: {
        utilisateur() {
            return this.$store.state.utilisateur;
        },
    },
    components: { NavbarComponent }
}

</script>