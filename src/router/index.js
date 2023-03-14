import { createRouter, createWebHistory } from 'vue-router'
import QuizzView from '../views/QuizzView.vue';
import InfosView from '../views/InfosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InfosView
    },
    {
      path: '/quizz',
      name: 'quizz',
      component: QuizzView
    },
  ]
})

export default router
