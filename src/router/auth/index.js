export default [
  {
    path: 'login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
    meta: {
      requireAuthentication: false,
    },
  },
  {
    path: 'recovery-password',
    name: 'RecoveryPassword',
    component: () => import('@/views/auth/RecoveryPassword.vue'),
    meta: {
      requireAuthentication: false,
    },
  },
];
