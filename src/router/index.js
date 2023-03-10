import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Logout from "../views/Logout.vue";
import NotFound from "../views/NotFound.vue";
import { authService } from "../classes/authService.js";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/documentation",
        name: "Documentation",
        component: () => import("../views/Docs.vue"),
    },
    {
        path: "/invite",
        name: "Invite",
        component: () => import("../views/Invite.vue"),
    },
    {
        path: "/upgrade",
        name: "Upgrade",
        component: () => import("../views/Upgrade.vue"),
        meta: { requiresAuth: true },
    },
    {
        path: "/servers",
        name: "Servers",
        component: () => import("../views/Servers.vue"),
        meta: { requiresAuth: true },
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/logout",
        name: "Logout",
        component: Logout,
    },
    {
        path: "/:pathMatch(.*)",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from) => {
    const isLoggedIn = authService.isLoggedIn();
    console.log("ROUTER LOGIN STATE:", isLoggedIn);

    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requiresAuth && !isLoggedIn) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        return {
            path: "/login",
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
        };
    }
});

export default router;
