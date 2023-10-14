import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../src/router/router'

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


import Vue3Toastify from 'vue3-toastify';


const app = createApp(App)
app.component('Datatable', Vue3EasyDataTable)
// app.component('toast',Vue3Toastify)

app.use(router).mount('#app')
