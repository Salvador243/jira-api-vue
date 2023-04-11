import { createApp, ref } from 'vue';
import App from './App.vue';
import jQuery from 'jquery';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './style.css';
import './assets/style.scss';
import router from './router';
import 'bootstrap/dist/js/bootstrap.js';
import 'select2';

const app = createApp(App);

const ancho = ref(window.innerWidth);
app.config.globalProperties.$ancho = ancho;

window.addEventListener('resize', () => {
    ancho.value = window.innerWidth;
});

app.config.globalProperties.$ = jQuery;

app.use(router).use(createPinia()).mount('#app');
