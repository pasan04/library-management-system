import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'vuex';

const store = createStore({
    state(){
        return {
            counter:0
        };
    },
    mutations:{
        increment(state){
            state.counter = state.counter+1;
        },
        increase(state, payload){
            state.counter = state.counter+payload;
        }
    }
})

createApp(App).use(store).use(router).mount('#app')
