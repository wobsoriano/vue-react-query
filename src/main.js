import { QueryClient } from 'react-query/core';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

const app = createApp(App);

app.config.globalProperties.queryClient = new QueryClient();

app.mount('#app');
