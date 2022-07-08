<template>
  <div id="left-bar">
    <i-sidebar v-model="open" placement="left">
        <i-nav vertical>
            <i-nav-item to="/">
                Home
            </i-nav-item>
            <i-nav-item to="/service-orders">
                About
            </i-nav-item>
        </i-nav>
    </i-sidebar>
  </div>
</template>

<script>
export default {
  name: 'left-bar',

  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    open: {
      get: (vm) => vm.modelValue,
      set: (newValue) => this.$emit('update:value', newValue),
    },
    routes() {
      console.log(this.$router);
      return this.$router;
    },
  },
};
</script>
