export default [
  {
    path: '',
    name: 'ServiceOrdersList',
    component: () => import('@/views/ServiceOrders/List.vue'),
    meta: {
      requireAuthentication: true,
    },
  },
];
