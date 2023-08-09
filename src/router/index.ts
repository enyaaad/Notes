import { createRouter, createWebHistory } from 'vue-router'
import AppContent from "@/components/AppContent.vue";
import NoteDetail from "@/components/NoteDetail.vue";
import NotFound from "@/components/NotFound.vue";

export const RouteNames = {
  "home": "home",
  "noteDetail": "noteDetail",
  "notFound": NotFound
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path : "/home"},
      children:[
        {
          path:"/home",
          name: 'home',
          component:()=> AppContent
        }
      ]
    },
    {
      path: '/notes/:id',
      name: 'noteDetail',
      component: NoteDetail,
    },
    {
      path: "/:catchAll(.*)",
      name: 'notFound',
      component: NotFound,
    },
  ]
})

export default router
