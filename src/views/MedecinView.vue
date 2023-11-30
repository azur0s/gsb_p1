<template>
    <NavbarComponent>
    </NavbarComponent>
    <div>
        <h1>Information Medecin:</h1>
    </div>
    <v-toolbar border density="comfortable" v-show="isNavMedVisible">
        <v-col class="d-flex justify-space-around">
            <v-btn @click="AfficheRapport">Consulter les rapports</v-btn>
            <v-btn @click="AfficheMedecin">Gérer le medecin</v-btn>
        </v-col>
    </v-toolbar>
    <RechercheMedecinComponent/>

    <div v-show="FicheMedecin">
        <FicheMedecinComponent/>
    </div> 

    <div v-show="ListeRapport" >
        <ListeRapportsComponent/>
    </div>

</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue';
import RechercheMedecinComponent from '@/components/RechercheMedecinComponent.vue';
import FicheMedecinComponent from '@/components/FicheMedecinComponent.vue';
import ListeRapportsComponent from '@/components/ListeRapportsComponent.vue'
export default {
    data(){
        return{
            ListeRapport:false,
            FicheMedecin:false,
            isNavMedVisible:false,
        }
    },
    components: { NavbarComponent, RechercheMedecinComponent,FicheMedecinComponent,ListeRapportsComponent},
methods: {
    AfficheMedecin(){
        this.FicheMedecin=true,
        this.ListeRapport=false
    },
    AfficheRapport(){
        this.FicheMedecin=false,
        this.ListeRapport=true
    }
}
}

</script>