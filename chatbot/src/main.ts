import { createApp } from 'vue';
import App from './App.vue'; // Verifique o caminho
import { createRouter, createWebHistory } from 'vue-router';
import Ajuda from './components/Ajuda.vue'; // Verifique o caminho
import '@fortawesome/fontawesome-free/css/all.css'; // Importa os ícones

const routes = [
  { path: '/', component: App },
  { path: '/ajuda', component: Ajuda }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app');
