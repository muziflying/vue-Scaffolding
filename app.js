import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import VueAxios from 'vue-axios';


Vue.use(VueRouter);
Vue.use(VueAxios,Axios);


import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI)


import router from './router/index.js';

import store from './store/index.js';

import App from './com/App.vue';

import './scss/main.scss';


new Vue ({
    el: '#app',
    router: router,
    store: store,
    data () {
        return {
            
        }
    },
    components: {
        'v-app': App
    }
})
