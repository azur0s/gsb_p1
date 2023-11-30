<template>
    <v-container>
        <v-text-field @keyup="getLesMedecins" label="Nom de medecin" v-model="nomMedecin">
        </v-text-field>
        <div v-if="getinfocliqued">
            {{ isNavMedVisible }}
      </div>

        <v-card class="mx-auto">
            <v-list v-show="isListVisible">
                <v-list-item v-for="item in items" :key="item.id" :value="item.nom" @click="getInfos(item)">
                    {{ item.nom + " " +item.prenom }}
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>

export default{
    name: 'RechercheMedecinComponent',
    data(){
        return{
            idMedecin: '',
            nomMedecin: '',
            items:[],
            isListVisible: false,
            item:'',
            isNavMedVisible:false,
        }
    },
    methods:{
        getLesMedecins(){
            console.log(this.nomMedecin)
            this.$store.state.dataService.getMedecins(this.nomMedecin)
            .then(
      (data)=>{
        console.log(this.nomMedecin);
        this.items=data;
        this.isListVisible=true;
      })
      .catch(
        (error)=>{
            console.log(error)
        }
      )
        },
        getInfos(item){
            console.log(item);
            this.isListVisible = false;
            this.$store.state.medecin = item;
            this.nomMedecin = item.nom + " " + item.prenom+ " "+item.id
            this.$parent.isNavMedVisible=true;
        }
    }
}
</script>

<style></style>