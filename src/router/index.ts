import { createRouter, createWebHistory } from 'vue-router'
import AppContent from "@/components/AppContent.vue";
import NoteDetail from "@/components/NoteDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppContent
    },
    {
      path: '/notes/:id',
      name: 'postDetail',
      component: NoteDetail,
      props:true,
    },
  ]
})

export default router
