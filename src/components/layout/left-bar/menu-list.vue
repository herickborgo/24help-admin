<template>
  <div id="menu-list">
    <b-nav vertical>
      <div
        v-for="route in routes"
        :key="route.name"
      >
        <b-nav-item
          v-if="route.children && route.children.length > 0"
          v-b-toggle="`submenu-${route.name}`"
          link-classes="bg-success text-light"
        >
          <b-row>
            <b-col cols="3">
              <b-icon :icon="route.icon"></b-icon>
            </b-col>
            <b-col cols="6" class="text-start">
              {{ route.label }}
            </b-col>
            <b-col cols="3" class="text-start">
              <b-icon
                :icon="submenuIcons.find((el) => el.submenu === `submenu-${route.name}`)?.icon"
              ></b-icon>
            </b-col>
          </b-row>
          <b-row>
            <b-collapse :id="`submenu-${route.name}`" class="p-0 mx-0 mt-2">
              <menu-list :routes="route.children"></menu-list>
            </b-collapse>
          </b-row>
        </b-nav-item>
        <b-nav-item
          v-else
          :to="{ name: route.name }"
          exact
          :active="isActive(route)"
          :link-classes="!isActive(route) ? 'bg-success text-light' : ''"
          active-class="bg-light text-success"
        >
          <b-row>
            <b-col cols="3">
              <b-icon :icon="route.icon"></b-icon>
            </b-col>
            <b-col class="text-start">
              {{ route.label }}
            </b-col>
          </b-row>
        </b-nav-item>
      </div>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'menu-list',

  props: {
    routes: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    submenuIcons: [],
  }),

  created() {
    this.submenuIcons = this.routes
      .filter((route) => !!route.children)
      .map((route) => ({
        submenu: `submenu-${route.name}`,
        icon: 'caret-down-fill',
      }));

    this.$root.$on('bv::collapse::sync-state', (submenu, value) => {
      this.submenuIcons.forEach((element, key) => {
        if (element.submenu !== submenu) {
          return;
        }

        this.submenuIcons[key].icon = value ? 'caret-up-fill' : 'caret-down-fill';
      });
    });
  },

  methods: {
    isActive(route) {
      return this.$route.name && this.$route.name === route.name;
    },
  },
};
</script>
