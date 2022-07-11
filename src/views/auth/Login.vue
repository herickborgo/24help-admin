<template>
  <div id="login">
    <b-container fluid style="height: 100vh">
      <b-row align-v="center" align-h="center" style="height: 100%">
        <b-col cols="10" sm="10" md="6" lg="5" xl="4">
          <b-form @submit="onSubmit($event)">
            <b-card>
              <template #header>
                24Help
              </template>
              <b-form-group
                id="form-group-password"
                label="Email"
                label-for="email"
              >
                <b-input
                  id="email"
                  v-model="payload.email"
                  type="email"
                  required
                ></b-input>
              </b-form-group>
              <b-form-group
                id="form-group-password"
                label="Senha"
                label-for="password"
              >
                <b-input
                  id="password"
                  v-model="payload.password"
                  type="password"
                  required
                ></b-input>
              </b-form-group>
              <template #footer>
                <b-row between>
                  <b-col cols="12" sm="12" md="6">
                    <b-button
                      variant="secondary"
                      @click="recoveryPassword()"
                      block
                    >
                      <span style="font-size:.8rem">Recuperar Senha</span>
                    </b-button>
                  </b-col>
                  <b-col cols="12" sm="12" md="6">
                    <b-button
                      type="submit"
                      variant="success"
                      @click="onSubmit($event)"
                      block
                    >
                      Entrar
                    </b-button>
                  </b-col>
                </b-row>
              </template>
            </b-card>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Auth from '@/services/auth.service';

export default {
  name: 'LoginView',

  data: () => ({
    payload: {
      email: '',
      password: '',
    },
  }),

  methods: {
    onSubmit(event) {
      event.preventDefault();

      if (Auth.login(this.payload)) {
        this.$router.replace({ name: 'ServiceOrdersList' });
      }
    },
    recoveryPassword() {
      this.$router.push({ name: 'RecoveryPassword' });
    },
  },
};
</script>
