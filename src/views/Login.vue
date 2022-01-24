<template>
  <v-container fluid>
    <v-card
      elevation="0"
      class="pa-4"
    >
      <v-card-title class="pa-0 mb-6 text-center">Entrar</v-card-title>
      <form-login 
        @login="login"
      />
    </v-card>
  </v-container>
</template>

<script>
import FormLogin from '../components/FormLogin.vue'
export default {
  name: "Register",
  components: {
    FormLogin
  },
  methods: {
    login(user) {
      console.log(user)
    }
  }
};
</script>