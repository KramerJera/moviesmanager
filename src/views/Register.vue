<template>
  <v-container fluid>
    <v-card
      elevation="0"
      class="pa-4"
    >
      <v-card-title class="pa-0 mb-6 text-center">Criar sua conta</v-card-title>
      <form-register 
        @register="createUser"
      />
    </v-card>
  </v-container>
</template>

<script>
import FormRegister from '../components/FormRegister.vue';
export default {
  name: "Register",
  components: {
    FormRegister
  },
  methods: {
    createUser(user) {
      console.log(user)
      // fazer o registro e redirecionar para o login
      // this.$router.push({ name: 'login' })
      // ou pegar os erros
    }
  }
};
</script>