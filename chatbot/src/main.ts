import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleLeft, faTrashCan, faSun, faMoon, faCircleQuestion, faArrowLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft, faTrashCan, faSun, faMoon, faCircleQuestion, faArrowLeft, faPaperPlane);

const routes = [
  { path: '/', component: App },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router).mount('#app');
