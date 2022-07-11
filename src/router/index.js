import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthRoutes from '@/router/auth';
import ServiceOrdersRoutes from '@/router/service-orders';
import Auth from '@/services/auth.service';
import Storage from '@/services/storage.service';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/components/layout/layout-router-view.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          withLayout: true,
          requireAuthentication: true,
          title: 'Inicio',
          sidebar: {
            label: 'Inicio',
            icon: 'house',
          },
        },
      },
      {
        path: 'service-orders',
        component: () => import('@/components/layout/layout-router-view.vue'),
        children: ServiceOrdersRoutes,
        meta: {
          sidebar: {
            label: 'Chamados',
            icon: 'tools',
          },
        },
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('@/components/layout/layout-router-view.vue'),
    children: AuthRoutes,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.name !== 'Login' && !Auth.isAuthenticated() && to.meta.requireAuthentication) {
    Auth.logout();
    return next({ name: 'Login' });
  }

  if (to.name === 'Login' && Auth.isAuthenticated()) {
    const rollbackRoute = Storage.get('rollback-route');
    return next(rollbackRoute);
  }

  Storage.set('rollback-route', to.fullPath);
  return next();
});

export default router;
