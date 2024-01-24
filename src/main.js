// import { createApp } from 'vue';
// import App from './App.vue';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
// import { createRouter, createWebHistory } from 'vue-router';
// import LoginPage from './components/pages/LoginPage';
// import RegisterPage from './components/pages/RegisterPage';
// import DashboardPage from './components/pages/DashboardPage';
  
// axios.defaults.baseURL = process.env.VUE_APP_API_URL
// axios.interceptors.request.use(function (config) {
//   config.headers['X-Binarybox-Api-Key'] = process.env.VUE_APP_API_KEY;
//   return config;
// });
  
  
// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: '/', component: LoginPage },
//     { path: '/register', component: RegisterPage },
//     { path: '/dashboard', component: DashboardPage },
//   ],
// });
  
// createApp(App).use(router).mount('#app');



import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import DashboardPage from './components/pages/DashboardPage';
import IndexPage from './components/pages/indexPage';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ /* options */ });
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone,faEdit,faTrash,faCheck,faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone,faEdit,faTrash,faCheck,faRemove)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
  
axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.interceptors.request.use(function (config) {
  config.headers['X-Binarybox-Api-Key'] = process.env.VUE_APP_API_KEY;
  return config;
});
  
  
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/dashboard', component: DashboardPage },
    { path: '/IndexPage', component: IndexPage },

  ],
});

library.add(faPhone)
createApp(App).use(router,toaster).component('font-awesome-icon', FontAwesomeIcon).mount('#app');