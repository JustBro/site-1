import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/pages/main/index';
import Layout from '@/pages/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'main', component: Main },
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;