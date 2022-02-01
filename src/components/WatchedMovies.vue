<template>
  <v-flex d-flex>
        <v-layout wrap>
            <v-flex 
              md4 
              v-for="movie in watchedlist" 
              :key="movie.id"
            >
                <v-card 
                  class="ma-8"
                >
                  <v-card-title>
                    {{ movie.title }}
                  </v-card-title>

                  <v-img
                    :src= "movie.poster"
                  ></v-img>

                  <v-card-text>
                    {{ movie.description }}
                  </v-card-text>

                  <v-card-actions>
                    <v-btn 
                      text
                      color="red"
                      @click="removeFromWatchedlist(movie)"
                    >
                      Remover
                    </v-btn>
                  </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
      </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WatchedMovies',
  props: {
    watchedlist: Array
  },
  computed: {
    ...mapGetters(['getWatchedlist'])
  },
  watch: {
    getWatchedlist(value) {
      if (value) {
        this.watchedlist = value;
      }
    },
  },
  methods: {
    removeFromWatchedlist(movie) {
      this.$emit('removeMovieFromList', movie)
    },
  }

}
</script>