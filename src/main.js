import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../src/router/router'

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const app = createApp(App)
app.component('Datatable', Vue3EasyDataTable)

app.use(router).mount('#app')
