<template>
    <v-container 
      fluid
      class="moviesContainer"
    >
      <v-form 
        class="searchForm"
        v-on:submit.prevent
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

      <v-flex d-flex>
        <v-layout wrap>
            <v-flex md4 v-for="movie in searchResults" :key="movie.id">
                <v-card class="ma-8">
                  <v-card-title>
                    {{ movie.title }}
                  </v-card-title>

                  <v-img
                    :src= "movie.poster_path"
                  ></v-img>

                  <v-card-text>
                    {{ movie.overview }}
                  </v-card-text>

                  <v-card-actions>
                    <v-btn text>
                      Já assisti
                    </v-btn>
                    <v-btn text>
                      Quero assistir
                    </v-btn>
                  </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
      </v-flex>

    </v-container>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SearchMovies',
  data () {
    return {
      name: '',
      profileId: this.$route.params.profileId,
      searchResults: '',
    }
  },
  computed: {
    ...mapGetters(['getSearchResults']),
  },
  watch: {
    getSearchResults(value) {
      if (value) {
        this.searchResults = value;
      }
    },
  },
  methods: {
    ...mapActions(['search']),
    searchmovie() {
      var params = {
        profileId: this.profileId,
        searchTerm: this.name,
      }
      this.search(params)
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