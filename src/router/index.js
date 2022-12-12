import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Error from "../components/Error/TheError.vue";
import TheGeneral from "../components/General/TheGeneral.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    //   // component: Error,
    // },
    {
      path: "/",
      name: "home",
      component: TheGeneral,
    },
    {
      path: "/where",
      name: "where",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../components/Error404/TheError404.vue"),
      component: Error,
    },
    {
      path: "/what",
      name: "what",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Error,
    },
    {
      path: "/who",
      name: "who",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Error,
    },
    {
      path: "/",
      name: "goBack",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TheGeneral,
    },
  ],
});

export default router;
