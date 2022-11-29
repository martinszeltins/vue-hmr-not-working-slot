import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import AppModal from 'primevue/dialog'

const app = createApp(App);

app.use(PrimeVue);
app.component('AppModal', AppModal);
app.mount('#app')
