<template>
    <h1>Description Medecin:</h1>
    <v-text-field @keyup="getLesMedecins" label="Nom" v-model="nomMedecin"></v-text-field>
<v-text-field @keyup="getLesMedecins" label="Prenom" v-model="prenomMedecin"></v-text-field>
<v-text-field @keyup="getLesMedecins" label="Adresse" v-model="adresseMedecin"></v-text-field>
<v-text-field @keyup="getLesMedecins" label="Téléphone" v-model="telMedecin"></v-text-field>
<v-text-field @keyup="getLesMedecins" label="Spécialité" v-model="specialiteMedecin"></v-text-field> 
<v-btn size="large" color="green" @click="majMedecin">Modifier</v-btn>
</template>

<script>
export default {
    name: 'FicheMedecinComponent',
    data() {
    return {
      id: this.$store.state.medecin.id,
      nomMedecin: this.$store.state.medecin.nom,
      prenomMedecin: this.$store.state.medecin.prenom,
      adresseMedecin: this.$store.state.medecin.adresse,
      telMedecin: this.$store.state.medecin.tel,
      specialiteMedecin: this.$store.state.medecin.specialitecomplementaire ,
    };
  },
  methods: {
        majMedecin() {
        let medecinModifier = {
      id:this.id,
      nom: this.nomMedecin,
      prenom: this.prenomMedecin,
      adresse: this.adresseMedecin,
      tel: this.telMedecin,
      specialitecomplementaire : this.specialiteMedecin,
    };
        
       this.$store.state.dataService.majMedecin(medecinModifier)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
    
    
    },
  },

};
</script>


