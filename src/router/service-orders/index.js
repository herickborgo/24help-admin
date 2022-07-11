export default [
  {
    path: '',
    name: 'ServiceOrdersList',
    component: () => import('@/views/service-orders/List.vue'),
    meta: {
      withLayout: true,
      requireAuthentication: true,
      title: 'Lista de Chamados',
      sidebar: {
        label: 'Lista de Chamados',
        icon: 'list',
      },
    },
  },
];
