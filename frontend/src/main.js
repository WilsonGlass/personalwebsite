import { createApp } from "vue";
import App from "./components/App.vue";
import "./styles.css";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSteam } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faSteam);
const app = createApp(App);
app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
//app.use(router);
app.mount("#app");