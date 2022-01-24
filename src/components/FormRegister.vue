<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      label="Nome"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="rules.emailRules"
      label="E-mail"
      required
    ></v-text-field>
    
    <v-text-field
      v-model="password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="showPassword ? 'text' : 'password'"
      name="input-10-1"
      label="Senha"
      hint="Mínimo 8 caracteres"
      counter
      @click:append="showPassword = !showPassword"
    ></v-text-field>

    <v-text-field
      v-model="passwordConfirmation"
      :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.passwordMatch]"
      :type="showPasswordConfirmation ? 'text' : 'password'"
      name="input-10-1"
      label="Confirmação de senha"
      hint="Mínimo 8 caracteres"
      counter
      @click:append="showPasswordConfirmation = !showPasswordConfirmation"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Criar conta
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'FormRegister',
  data() {
    return {
      valid: true,
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      showPassword: false,
      showPasswordConfirmation: false,
      rules: {
        required: value => !!value || 'Obrigatório',
        min: v => v.length >= 8 || 'Mínimo 8 caracteres',
        passwordMatch: () => this.password === this.passwordConfirmation || ('Senha e confirmação de senha devem ser iguais'),
        emailRules: [
          v => !!v || 'Obrigatório',
          v => /.+@.+\..+/.test(v) || 'E-mail deve ser um endereço válido'
        ],
      },
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        const userRegister = {
          name: this.name,
          email: this.email,
          password: this.password
        }

        this.$emit('register', userRegister)
      }
    }
  }
}
</script>

<style lang="scss">

</style>