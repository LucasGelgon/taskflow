import { createApp } from 'vue'; //  createApp
import App from './App.vue'; //  composant racine App
import router from './router'; //  routeur
import 'bootstrap/dist/css/bootstrap.min.css'; //  Bootstrap

createApp(App)
  .use(router) 
  .mount('#app'); 
