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
      path: '/categorias_producto',
      name: 'categorias_productos',
      component: () => import('../views/CategoriaProductoView.vue'),
      children: [{ path: '', component: () => import('../components/categoriaProducto/CategoriaProductoList.vue') }]
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/ClienteView.vue'),
      children: [
        { path: '', component: () => import('../components/cliente/ClienteList.vue') },
        { path: 'crear', component: () => import('../components/cliente/ClienteCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/cliente/ClienteEdit.vue')
        }
      ]
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
  ]
})

export default router
