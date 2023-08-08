import { createRouter, createWebHistory } from 'vue-router'
import AppContent from "@/components/AppContent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppContent
    },
  ]
})

export default router
