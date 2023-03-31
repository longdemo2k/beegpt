import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import LoginLayout from "./components/login/LoginLayout.vue";
import HomeLayout from "./components/HomeLayout.vue";
import Login from "./components/login/LoginVue.vue";
import LoginPassword from "./components/login/LoginPassword.vue"
import SignUp from "./components/signUp/SignUp.vue"
import SignUpPassword from "./components/signUp/SignUpPassword"
import CreateAccount from "./components/signUp/CreateAccount.vue"
const routes = [

  { path: "/", component: App },
  { path: "/auth/login/password", component: LoginPassword },
  { path: "/auth/signup/password", component: SignUpPassword },
  { path: "/auth/signup/createAccount", component: CreateAccount },
  {
    path: "/auth",
    component: LoginLayout,
  },
  {
    path: "/auth/login",
    component: Login,
  },
  {
    path: "/auth/signup",
    component: SignUp,
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
