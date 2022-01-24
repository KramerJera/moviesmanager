<template>
  <div>
    <v-btn
      @click="goTo('register')"
    >
      Criar conta
    </v-btn>
    <v-btn
      @click="goTo('login')"
    >
      Já possuo conta
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goTo(name) {
      this.$router.push({ name: name })
    }
  }
}
</script>