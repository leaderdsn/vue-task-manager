import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const AppNotFound = defineAsyncComponent(
  () => import('@/pages/AppNotFound.vue'),
)

const catchRoutes = [
  {
    path: '/:catchAll(.*)',
    component: AppNotFound,
  },
]

const mainRoutes = [
  {
    path: '/',
    name: 'Главная страница',
    alias: '/home',
    component: () => import('@/pages/AppHome.vue'),
  },
  {
    path: '/tasks',
    name: 'Задачи',
    component: () => import('@/pages/AppTasks.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...catchRoutes, ...mainRoutes],
})

export default router
