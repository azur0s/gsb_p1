import { createRouter, createWebHashHistory } from 'vue-router'
import ConnexionPage from '../views/ConnexionPage.vue'
import DataView from '../views/DataView.vue'
import MedecinView from '../views/MedecinView'
import RapportsView from '../views/RapportsView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ConnexionPage
  },
  {
  path: '/Accueil',
  name: 'Accueil',
  component: DataView
},
{
  path: '/Medecin',
  name: 'Medecin',
  component: MedecinView
},
{
  path: '/Rapports',
  name: 'Rapports',
  component: RapportsView
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
