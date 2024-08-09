import { createApp } from "vue";
import { createManager } from "@vue-youtube/core";
import App from "./App.vue";
import store from "./utility/index.js";
import router from "./router";

const app = createApp(App);
app.use(createManager());
app.use(store);
app.use(router);
app.mount("#app");
