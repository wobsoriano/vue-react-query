import { QueryClient } from 'react-query/core';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

const app = createApp(App);

const queryClient = new QueryClient();

app.provide('queryClient', queryClient)

app.mount('#app');
