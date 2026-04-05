import { createApp } from 'vue';
import './assets/main.css';
import App from './App.vue';
import TimeCalculator from './components/TimeCalculator.vue';

const appName = import.meta.env.VITE_APP_NAME || 'Time Calculator';
document.title = appName;

const app = createApp(App);

app.component('TimeCalculator', TimeCalculator);

app.mount('#app');
