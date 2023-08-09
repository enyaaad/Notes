import { createRouter, createWebHistory } from 'vue-router'
import AppContent from "@/components/AppContent.vue";
import NoteDetail from "@/components/NoteDetail.vue";
import NotFound from "@/components/NotFound.vue";

export const RouteNames = {
  "home": AppContent,
  "noteDetail": NoteDetail,
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
          component:()=> RouteNames.home
        }
      ]
    },
    {
      path: '/notes/:id',
      name: 'noteDetail',
      component: RouteNames.noteDetail,
    },
    {
      path: "/:catchAll(.*)",
      name: 'notFound',
      component: RouteNames.notFound,
    },
  ]
})

export default router
