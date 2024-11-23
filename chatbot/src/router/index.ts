import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import AjudaView from '../views/AjudaView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: App,
  },
  {
    path: '/ajuda',
    name: 'ajuda',
    component: AjudaView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
