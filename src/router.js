import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import LoginLayout from "./components/login/LoginLayout.vue";
import HomeLayout from "./components/HomeLayout.vue";
import Login from "./components/login/LoginVue.vue";
import LoginPassword from "./components/login/LoginPassword.vue"
const routes = [
  { path: "/", component: App },
  { path: "/auth/login/password", component: LoginPassword },
  {
    path: "/auth",
    component: LoginLayout,
  },
  {
    path: "/auth/login",
    component: Login,
  },
  {
    path: "/home",
    component: HomeLayout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
