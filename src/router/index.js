import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: "/",
    component:() => import('../views/login/index'),
    hidden:true
  },
  {
    path: "/login",
    component:() => import('../views/login/index'),
    hidden:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
