<template>
  <div id="default-layout">
    <!-- <left-bar /> -->
    <router-view/>
  </div>
</template>

<script>
// import LeftBar from '@/components/layout/left-bar.vue';

export default {
  name: 'default-layout',

  components: {
    // LeftBar,
  },

  data: () => ({
    open: false,
  }),
};
</script>
