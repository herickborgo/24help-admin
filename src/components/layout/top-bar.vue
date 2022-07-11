<template>
  <div id="top-bar">
    <b-navbar toggleable type="dark" variant="success">
      <b-navbar-toggle target="sidebar" v-b-toggle.sidebar></b-navbar-toggle>

      <b-navbar-brand href="#">24help</b-navbar-brand>

      <b-navbar-nav class="ml-auto" href="#">
        <b-nav-item @click="logout()">
          <b-icon-power></b-icon-power>
          Sair
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import Auth from '@/services/auth.service';

export default {
  name: 'top-bar',

  methods: {
    logout() {
      Auth.logout();
      this.$router.go();
    },
  },
};
</script>
