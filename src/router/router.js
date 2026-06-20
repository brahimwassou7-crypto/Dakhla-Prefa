import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import Agglos from "@/pages/Agglos.vue";
import Pave from "@/pages/Pave.vue";
import Poutrelle from "@/pages/Poutrelle.vue";
import Hourdis from "@/pages/Hourdis.vue";
import Bordure from "@/pages/Bordure.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/agglos", component: Agglos },
  { path: "/pave", component: Pave },
  { path: "/poutrelle", component: Poutrelle },
  { path: "/hourdis", component: Hourdis },
  { path: "/bordure", component: Bordure },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
