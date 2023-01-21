import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import EasterEggTriggerPlugin from "@/EasterEggTriggerPlugin";

const app = createApp(App);

app.use(EasterEggTriggerPlugin);
app.mount("#app");
