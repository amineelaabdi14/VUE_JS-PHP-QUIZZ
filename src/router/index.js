import { createRouter, createWebHistory } from 'vue-router'
import QuizzView from '../views/QuizzView.vue';
import InfosView from '../views/InfosView.vue';
import ResultView from '../views/ResultView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect :'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: InfosView
    },
    {
      path: '/quizz',
      name: 'quizz',
      component: QuizzView
    },
    {
      path: '/result',
      name: 'result',
      component: ResultView
    },
  ]
})

export default router
