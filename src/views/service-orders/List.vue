<template>
  <div id="service-orders-list">
    <data-table :headers="headers" :items="items">
      <template #filters>
        <b-col cols="4">
          <b-form-group label="Status" label-for="status">
            <b-form-select
              id="status"
              :options="statusOptions"
              v-model="filters.status"
              size="lg"
            >
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group label="Nome Cliente" label-for="client-name">
            <b-form-input id="client-name" v-model="filters.client_name"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group label="Nome Prestador" label-for="client-name">
            <b-form-input id="client-name" v-model="filters.provider_name"></b-form-input>
          </b-form-group>
        </b-col>
        <!-- <b-col cols="12">
          <b-row align-h="end">
            <b-col cols="3">
              <b-button class="text-light" variant="info" block>Pesquisar</b-button>
            </b-col>
          </b-row>
        </b-col> -->
      </template>
      <template #row-actions>
        <b-button variant="info" class="text-light">
          <b-icon icon="info"></b-icon>
        </b-button>
      </template>
    </data-table>
  </div>
</template>

<script>
import DataTable from '@/components/list/data-table.vue';

export default {
  name: 'OrderOfServiceListView',

  components: {
    DataTable,
  },

  data: () => ({
    headers: [
      // { key: 'status', label: 'Status' },
      { key: 'created_at', label: 'Data - Hora' },
      { key: 'client_name', label: 'Nome Cliente' },
      { key: 'provider_name', label: 'Nome Prestador' },
      { key: 'category', label: 'Categoria' },
      { key: 'value', label: 'Valor Orçamento' },
      { key: 'address', label: 'Endereço' },
    ],
    items: [
      {
        status: 'awaiting_provider_service',
        created_at: '2022-07-07 - 10:00',
        client_name: 'João',
        provider_name: 'Marcos',
        category: 'Assitência Técnica Eletrônicos',
        value: 150.0,
        address: 'Zona 07 - Maringá/PR',
      },
      {
        status: 'finished',
        created_at: '2022-07-07 - 10:00',
        client_name: 'Janaina',
        provider_name: 'Jeferson',
        category: 'Assitência Técnica Linha Branca',
        value: 200.0,
        address: 'Jd. Pioneiro - Paiçandu/PR',
      },
      {
        status: 'not_found',
        created_at: '2022-07-07 - 10:00',
        client_name: 'Diego',
        provider_name: 'Odair',
        category: 'Serviços Gerais',
        value: 150.0,
        address: 'Zona 07 - Maringá/PR',
      },
    ],
    statusOptions: [
      { text: 'Busca realizada aguardando prestador aceitar', value: 'awaiting_provider_service' },
      { text: 'Prestador aceitou o chamado', value: 'service_provider_found' },
      { text: 'Nenhum prestador encontrado para essa busca', value: 'not_found' },
      { text: 'Cancelado', value: 'canceled' },
      { text: 'Concluido', value: 'finished' },
    ],
    filters: {
      status: '',
      datetime: '',
      client_name: '',
      provider_name: '',
    },
  }),
};
</script>
