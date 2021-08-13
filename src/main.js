import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
const fb = require('./firebaseConfig')
import { store } from './store.js'
import '@fortawesome/fontawesome-free/css/all.css'
import VueClipboard from 'vue-clipboard2'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueMeta from 'vue-meta'
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB0BbVxzUzuAqMSfIOth1gAV5OlxCSeLL0",
    authDomain: "kinkslink.firebaseapp.com",
    projectId: "kinkslink",
    storageBucket: "kinkslink.appspot.com",
    messagingSenderId: "726566974518",
    appId: "1:726566974518:web:903c3beb0a10daff4c1497"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueClipboard)
Vue.use(VueMeta)
Vue.use(vuetify, {
    iconfont: 'fa'
})

// handle page reloads
let app
fb.auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            vuetify,
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})