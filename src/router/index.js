import { createRouter, createWebHistory } from 'vue-router'

const AppNotFound = () => import('@/pages/AppNotFound.vue')

const catchRoutes = [
  {
    path: '/:catchAll(.*)',
    component: AppNotFound,
  },
]

const mainRoutes = [
  {
    path: '/home',
    name: 'Главная страница',
    component: () => import('@/pages/AppHome.vue'),
  },
  {
    path: '/tasks',
    name: 'Задачи',
    component: () => import('@/pages/AppTasks.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...catchRoutes, ...mainRoutes],
})

export default router
