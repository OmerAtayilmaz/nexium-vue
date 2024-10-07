import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/auth/SignupView.vue')
    },
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
      component: () => import('../views/layouts/CategoryLayouts.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/CategoryView.vue'),
          props: true,
          name: 'category-list'
        },

        {
          path: ':slug',
          component: () => import('../views/CategoryDetailView.vue'),
          props: true,
          name: 'category-detail'
        }
      ]
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
