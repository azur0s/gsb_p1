<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="login"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Login"
        ></v-text-field>

        <v-text-field
          v-model="mdp"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="MDP"
          placeholder="ecrire le mot de passe"
          type="password"
        ></v-text-field>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          @click="getLogin"
          variant="elevated"
        >
          Connexion
        </v-btn>
      </v-form>


      <div v-if="ErrorMessage" class="error-message mt-4">
        <v-alert type="error" outlined icon="mdi-check-circle-outline" class="error-box">
          {{ ErrorMessage }}
        </v-alert>
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
import DataService from '@/services/DataService'
var dataService=new DataService();
export default {
  data() {
    return {
      form: false,
      login: null,
      mdp: null,
      loading: false,
      authmessage:'',
      authmessagetype:'',
      message: '', 
      ErrorMessage:null,

    };
  },
  methods: {
    getLogin(){
      dataService.getVisiteur(this.login,this.mdp)
    .then(
      (data)=>{
        this.$store.state.utilisateur=data;
        console.log(data);
        this.$router.push('/Accueil');
      })
      .catch(
        ()=>{
          this.isVisible=true
          this.ErrorMessage='error';
        }
      )
    },
  },
};


</script>