<template>
  <v-container>
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
import { mapActions } from 'vuex'

export default {
  name: "Login",
  components: {
    FormLogin
  },
  methods: {
    ...mapActions(['loginUser']),
    login(user) {
      this.loginUser(user)
      // Fazer o login
      // Salvar no estado
      // this.addUser({
      //  name: data.user.name,
      //  email: data.user.email
      // })
      // redirecionar para a dashboard
      // this.$router.push({ name: 'dashboard' })
      // ou pegar os erros
    }
  }
};
</script>