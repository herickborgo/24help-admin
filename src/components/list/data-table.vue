<template>
  <div id="data-table">
    <b-row class="mb-3">
      <slot name="filters"></slot>
    </b-row>
    <b-table hover responsive :fields="fields" :items="items">
      <template #cell(actions)="data">
        <slot name="row-actions" v-bind="data"></slot>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'data-table',

  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    filters: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    fields() {
      return [...this.headers, { key: 'actions', label: 'Ações' }];
    },
  },
};
</script>
