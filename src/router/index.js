import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('../views/Support.vue')
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: () => import('../views/Docs.vue')
  },
  {
    path: '/invite',
    name: 'Invite',
    component: () => import('../views/Invite.vue')
  },
  {
    path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
