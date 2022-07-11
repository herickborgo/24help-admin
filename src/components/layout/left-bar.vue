<template>
  <div id="left-bar">
    <b-sidebar
      id="sidebar"
      bg-variant="success"
      backdrop-variant="transparent"
      shadow
    >
      <template #header>
        <b-button
          aria-label="Close"
          class="close border-light px-3 py-0"
          variant="success"
          @click="closeSidebar()"
          size="xs"
          style="border-radius: .25rem;"
        >
          <b-icon icon="x" scale="1.5" variant="light"/>
        </b-button>
      </template>
      <menu-list :routes="routes"></menu-list>
    </b-sidebar>
  </div>
</template>

<script>
import MenuList from '@/components/layout/left-bar/menu-list.vue';

export default {
  name: 'left-bar',

  components: {
    MenuList,
  },

  computed: {
    routes() {
      return this.getRoutes(this.$router.options.routes.find((route) => route.path === '/')?.children);
    },
  },

  methods: {
    closeSidebar() {
      this.$root.$emit('bv::toggle::collapse', 'sidebar');
    },
    getRoutes(routes) {
      return routes.filter((route) => route.meta?.sidebar)
        .map((route) => {
          const { sidebar } = route.meta;

          sidebar.name = route.name ?? route.path.replace('/', '').trim();

          if (route.children) {
            sidebar.children = this.getRoutes(route.children);
          }

          return sidebar;
        });
    },
  },
};
</script>
