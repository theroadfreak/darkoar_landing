import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from "vue-meta";
import VueLazyload from "vue-lazyload";

const loadimage = require('@/assets/Sequence 01.gif')

createApp(App)
    .use(router)
    .use(VueLazyload, {
        preLoad: 1.3,
        loading: loadimage,
        attempt: 1
    })
    .mount('#app')
