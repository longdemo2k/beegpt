import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import LoginLayout from "./components/LoginLayout"
import HomeLayout from './components/HomeLayout.vue'
const routes = [
  { path: "/", component: App },
  {
    path: "/login",
    component: LoginLayout,
  },
  {
    path: '/home',
    component: HomeLayout
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
