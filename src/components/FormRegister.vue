<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="[rules.required]"
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

    <div>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="birthdate"
            :rules="[rules.required]"
            label="Data de Nascimento"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="birthdate"
          :active-picker.sync="activePicker"
          :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>
    </div>

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
      activePicker: null,
      menu: false,
      valid: true,
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      birthdate: '',
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
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        const userRegister = {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation,
          birthdate: this.birthdate
        }

        this.$emit('register', userRegister)
      }
    },
    save (birthdate) {
      this.$refs.menu.save(birthdate)
    },
  }
}
</script>

<style lang="scss">

</style>