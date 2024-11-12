import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores';
import { getTokenFromLocalStorage } from '@/helpers';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  /*   {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }, */
    {
      path: '/categoriasProducto',
      name: 'categoriasProductos',
      component: () => import('../views/CategoriaProductoView.vue'),
      children: [{ path: '', component: () => import('../components/categoriaProducto/CategoriaProductoList.vue') }]
    },
    // {
    //   path: '/productos',
    //   name: 'Productos',
    //   component: () => import('../views/'),
    //   children: [{ path: '', component: () => import('../components/producto/ProductoList.vue') }]
    // },
    {
      path: '/promociones',
      name: 'promociones',
      component: () => import('../views/PromocionView.vue'),
      children: [{ path: '', component: () => import('../components/promocion/PromocionCreate.vue') }]
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
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/UsuarioView.vue'),
      children: [{ path: '', component: () => import('../components/usuario/UsuarioList.vue') }]
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
router.beforeEach(async to => {
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !getTokenFromLocalStorage()) {
    if (authStore) authStore.logout();
    authStore.returnUrl = to.fullPath;
    return "/login";
  }
});

export default router
