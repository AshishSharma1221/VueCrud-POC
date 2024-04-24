import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/Products/View.vue'
import ProductCreate from '../views/Products/Create.vue'
import ProductEdit from '../views/Products/Edit.vue'
import AnalyserView from '../views/Analyser.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView
    },
    {
      path: '/product/create',
      name: 'productCreate',
      component: ProductCreate
    }, 
    {
      path: '/product/:id/edit',
      name: 'productEdit',
      component: ProductEdit
    },
    {
      path: '/analyser',
      name: 'analyser',
      component: AnalyserView
    },
  ]
})

export default router
