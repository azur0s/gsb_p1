<template>
    <v-toolbar border density="comfortable">
        <v-col class="d-flex justify-space-around">
            <v-btn to="/Accueil">Accueil</v-btn>
        </v-col>
        <v-col class="d-flex justify-space-around">
            <v-btn to="/Rapports">Rapports</v-btn>
        </v-col>
        <v-col class="d-flex justify-space-around">
            <v-btn to="/Medecin">Medecin</v-btn>
        </v-col>
        <v-col class="d-flex justify-space-around">
            <v-btn to="/">Deconnexion</v-btn>
        </v-col>
        <v-col class="d-flex justify-space-around">
            <v-btn><a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank">Amuse moi</a></v-btn>
        </v-col>
    </v-toolbar>
</template>

<script>
export default{
    name: 'navbarComponent'
}
</script>

<style></style>