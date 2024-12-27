import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "../src/router/index.js";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import "@/utils/customFn";

// =======================引入vxe=========================
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";


const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(router).use(VXETable);

app.mount("#app");
