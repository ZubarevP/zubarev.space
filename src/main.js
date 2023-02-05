import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/main.scss";

import App from "./App.vue";

const app = createApp(App);
app.config.unwrapInjectedRef = true;
app.use(createPinia());
app.mount("#app");
