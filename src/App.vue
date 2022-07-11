<template>
  <div id="app">
    <div v-if="withLayout">
      <top-bar/>
      <left-bar/>
      <b-container fluid>
        <b-row align-h="center" align style="height: 100%">
          <b-col cols="10" sm="10" md="10" class="p-5">
            <b-card>
              <template #header>
                <h3>{{ title }}</h3>
              </template>
              <router-view/>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>

<script>
import LeftBar from '@/components/layout/left-bar.vue';
import TopBar from '@/components/layout/top-bar.vue';

export default {
  name: 'App',

  components: {
    LeftBar,
    TopBar,
  },

  computed: {
    title: (vm) => vm.$route.meta?.title,
    withLayout: (vm) => vm.$route.meta?.withLayout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
