export default class DataService{
    async getVisiteur(unLogin,unMdp){
        var params = new URLSearchParams({
            login:unLogin,
            mdp:unMdp
        });
        var response= await fetch('http://localhost/restGSB/connexion?'+params);
        var items=await response.json();
        return items;
    }

    async getMedecins(unMedecin){
        var params = new URLSearchParams({
            nom:unMedecin,
        });
        var response= await fetch('http://localhost/restGSB/medecins?'+params);
        var items=await response.json();
        console.log(items);
        return items;
    }

    async getLesRapports(unRapport){
        var response= await fetch('http://localhost/restGSB/rapports/'+unRapport);
        var items=await response.json();
        console.log(items);
        return items;
    }

    async majMedecin(props){
        var requestOptions= {
            method:"PUT",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(props)
        };
        var item = await fetch('http://localhost/restGSB/majMedecin',requestOptions);
        return item;
    }
}