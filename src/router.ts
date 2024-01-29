import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "hello",
    component: () => import("./components/HelloWorld.vue"),
  },
  {
    path: "/movies",
    name: "movies",
    component: () => import("./components/MovieList.vue"),
  },
  {
    path: "/movies-add",
    name: "movies-add",
    component: () => import("./components/MovieAdd.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;