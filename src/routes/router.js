import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/pages/main/index';
import About from '@/pages/about/index';
import Layout from '@/pages/index';
import UIKit from '@/pages/ui-kit';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'main', component: Main },
      { path: 'about', component: About },
      { path: 'ui-kit', component: UIKit },
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;