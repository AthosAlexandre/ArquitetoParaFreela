// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/contato',
        name: 'contato',
        component: () => import(/* webpackChunkName: "contato" */ '@/views/Contato.vue'),
      },
      {
        path: '/blog',
        name: 'blog',
        component: () => import(/* webpackChunkName: "blog" */ '@/views/Blog.vue'),
      },
      {
        path: '/blog_cadastrar',
        name: 'blog_cadastrar',
        component: () => import(/* webpackChunkName: "blog_cadastrar" */ '@/views/BlogCadastrar.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
