<template>
  <NavbarComponent></NavbarComponent>
  <div>
    <h1>Information Rapports:</h1>
  </div>
  <v-toolbar border density="comfortable">
        <v-col class="d-flex justify-space-around">
            <v-btn @click="ModifRapport">Modifier Rapport</v-btn>
            <v-btn @click="NouveauRapport">Nouveau Rapport</v-btn>
        </v-col>
    </v-toolbar>

  <v-text-field @change="getRapports(); this.isListVisible = false; this.isModifFormVisible = false" label="Date du rapport"
    v-model="dateRapport" type="date">
  </v-text-field>

  <v-card class="mx-auto">
    <v-list v-show="isListVisible">
      <v-list-item v-for="item in items" :key="item.id" :value="item.nom" @click="getRapport(item)">
        {{ item.nomMedecin + " " + item.prenomMedecin }}
      </v-list-item>
    </v-list>
  </v-card>
  <div v-show="isModifFormVisible" :key="maj">
    <v-text-field @keyup="getLesRapportsADate" label="motif" v-model="motif"></v-text-field>
    <v-text-field @keyup="getLesRapportsADate" label="bilan" v-model="bilan"></v-text-field>
    <v-btn size="large" color="green" @click="majRapport">Modifier</v-btn>
  </div>

  <div v-show="ListeRapport" :key="maj">

  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  name: "RapportsView",
  components: { NavbarComponent },
  data() {
    return {
      PrenomM: '',
      idVisiteur: this.$store.state.utilisateur.id,
      idRapport: '',
      nomM: '',
      motif: '',
      bilan: '',
      dateRapport: '',
      items: [],
      isModifFormVisible: false,
      isListVisible: false
    }
  },
  methods: {
    async getRapports() {
      try {
        this.items = await this.$store.state.dataService.getLesRapportsADate(this.idVisiteur, this.dateRapport);
        this.isListVisible = true;
        console.log(this.items);
      } catch (error) {
        console.error("Erreur lors de la récupération des rapports:", error);
      }
    },
    getRapport(item) {
      console.log(item);
      this.isModifFormVisible = true;
      this.isListVisible = false;
      this.motif = item.motif;
      this.bilan = item.bilan;
      this.idRapport=item.idRapport;

    },
    ModifRapport(){
      this.isModifFormVisible = true;
    },
    NouveauRapport(){
      this.isModifFormVisible = false;
    },

    majRapport() {
      let RapportModifier = {
        idRapport: this.idRapport,
        motif: this.motif,
        bilan: this.bilan
      };

      this.$store.state.dataService.majRapport(RapportModifier)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}

</script>