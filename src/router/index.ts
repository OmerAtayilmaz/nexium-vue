import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    //İletişim Sayfası
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => null
    },
    //Page kategorilerinin listelendigi sayfa
    {
      path: '/category',
      name: 'category',
      component: () => null
    },
    //Bir kategoriden tüm postların listelendigi sayfa
    {
      path:'/category/:slug',
      name:'category',
      component: () => null,
    },
    // 1 page için detay sayfası
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: () => import('../views/PostView.vue')
    }
  ]
})

export default router
