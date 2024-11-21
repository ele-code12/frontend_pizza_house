import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import { useAuthStore } from '@/stores'
// import { getTokenFromLocalStorage } from '@/helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    /* {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }, */
    {
      path: '/pedidos',
      name: 'pedidos',
      component: () => import('../views/PedidoView.vue'),
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: () => import('../views/UsuarioView.vue')
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/ClienteView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/detalles-pedido',
      name: 'detalles-pedido',
      component: () => import('../views/DetallepedidoView.vue')
    },
    {
      path: '/productos',
      name: 'productos',
      component:() => import('../views/ProductoView.vue')
    },
    {
      path: '/promociones',
      name: 'promociones',
      component:() => import('../views/PromocionView.vue')
    }

  ]
})

/* router.beforeEach(async (to) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  if (authRequired && !getTokenFromLocalStorage()) {
    if (authStore) authStore.logout()
    authStore.returnUrl = to.fullPath
    return '/login'
  }
}) */

export default router
