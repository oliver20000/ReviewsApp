import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ReviewDetails from '@/views/ReviewDetails.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/review/:id', name: 'ReviewDetails', component: ReviewDetails }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;