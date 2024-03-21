<template>
    <NavbarComponent>
    </NavbarComponent>
    <div>
        <h1>Information Rapports:</h1>
    </div>
    
    <v-text-field @change="getRapports();this.isListVisible=false;this.isModifFormVisible=false" label="Date du rapport" v-model="date" type="date"></v-text-field>
    
    <v-list-item v-for="item in items" :key="item.id" :value="item.nom" @click="getRapports(item)">
                    {{ item.id + " " + item.nom }}
    </v-list-item>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
    name: "RapportsView",
    data() {
        return {
            idVisiteur: this.$store.state.utilisateur.id,
            idRapport: '',
            motif: '',
            bilan: '',
            date: '',
            items: [],
            isModifFormVisible: false,
            isListVisible: false
        }
    },
    methods: {
        getRapports() {
    try {
        this.items = this.$store.state.dataService.getLesRapports(this.date);
    } catch (error) {
        console.error("Erreur lors de la récupération des rapports:", error);
    }
},

        getRapport(item) {
            try {
                const rapportDetail = this.$store.state.dataService.getLesRapports(item.id);
                console.log("Détails du rapport:", rapportDetail);
                this.motif = rapportDetail.motif;
                this.bilan = rapportDetail.bilan;
            } catch (error) {
                console.error("Erreur lors de la récupération du rapport:", error);
            }
        },

        majRapport() {
            try {
                // Logique pour mettre à jour un rapport
            } catch (error) {
                console.error("Erreur lors de la mise à jour du rapport:", error);
            }
        }
    },
    components: {
        NavbarComponent
    }
}
</script>