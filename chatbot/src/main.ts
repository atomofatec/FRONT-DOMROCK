import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css';

const routes = [
  { path: '/', component: App }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app');
