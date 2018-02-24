import firebase from "firebase";
import { firebaseConfig } from "./config";

import Vue from "vue";
import App from "./App.vue";

import { router } from "./router"; //Rutas
import { store } from "./store"; //Store

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig); //Inicializa app firebase

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
