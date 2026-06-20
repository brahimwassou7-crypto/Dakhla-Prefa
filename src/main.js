import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n/I18n.js";
import router from "./router/router.js";

import "aos/dist/aos.css";
import Aos from "aos";
Aos.init();

createApp(App).use(i18n).use(router).mount("#app");
