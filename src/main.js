import { createApp } from "vue";
import App from "./App.vue";

import "@/styles/styles.scss";
import "@/styles/theme.scss";
import router from "./router";

import globalDirectives from "./directives";

const app = createApp(App);
app.use(router);
app.use(globalDirectives);

app.mount("#app");
