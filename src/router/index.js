import Vue from 'vue';
import VueRouter from 'vue-router';
import mainView from '@/views/mainView.vue';
import droneView from '@/views/droneView.vue';
import userInfo from '@/views/userInfo.vue';
import login from '@/views/login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
    name: 'mainView',
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/main',
    name: 'mainView',
    component: mainView,
  },
  {
    path: '/drone',
    name: 'droneView',
    component: droneView,
  },
  {
    path: '/user',
    name: 'userInfo',
    component: userInfo,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
