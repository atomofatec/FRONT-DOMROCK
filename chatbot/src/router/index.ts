import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Ajuda from '../components/Ajuda.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: App,
  },
  {
    path: '/ajuda',
    name: 'ajuda',
    component: Ajuda,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
