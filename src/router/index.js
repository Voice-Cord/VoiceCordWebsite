import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from "@/supabase";
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
        path: '/upgrade',
        name: 'Upgrade',
        component: () => import('../views/Upgrade.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/servers',
        name: 'Servers',
        component: () => import('../views/Servers.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/logout',
        name: 'Logout',
        component: () => import('../views/Logout.vue')
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

const isLoggedIn = localStorage.getItem("discord.accessToken") != null;
console.log("isLoggedIn: " + isLoggedIn);

router.beforeEach((to, from) => {
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requiresAuth && !isLoggedIn) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        return {
            path: '/login',
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
        }
    }
})

export default router
