import { createApp } from "vue";
import { createPinia } from "pinia"; // https://pinia.vuejs.org/getting-started.html#installation
import router from "./router";
import "./style.css";
import App from "./App.vue";

createApp(App).use(createPinia()).use(router).mount("#app");
