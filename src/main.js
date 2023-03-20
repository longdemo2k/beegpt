import { createApp  } from 'vue'
import App from './App.vue'
import "./assets/styles/global.css"
import store from "./store/store.js"
import router from './router'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')