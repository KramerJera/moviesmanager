<template>
    <v-container 
      fluid
      class="moviesContainer"
    >
      <v-form 
        class="searchForm"
      >
        <v-row class="ma-8">
          <v-text-field
            v-model="name"
            label="Nome do filme"
            required
          ></v-text-field>
          
          <v-btn
            icon
            class="mt-4"
            @click="searchmovie"
          >
            <v-icon>mdi-magnify</v-icon> 
          </v-btn>
        </v-row>
      </v-form>
    </v-container>  
</template>

<script>
export default {
  name: 'SearchMovies',
  data () {
    return {
      name: '',
    }
  },
  methods: {
    searchmovie() {
      console.log(this.name)
    }
  }
}
</script>

<style lang="scss">
.moviesContainer {
  .searchForm {
    width: 50%;
  }
}
</style>