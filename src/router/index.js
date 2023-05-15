// ==|== Imports ===================================================================================
import { createRouter, createWebHashHistory } from 'vue-router';

// ==|== Routes ====================================================================================
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../views/ErrorPage.vue')
  }
];

// ==|== Router ====================================================================================
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// ==|== Export ====================================================================================
export default router;
