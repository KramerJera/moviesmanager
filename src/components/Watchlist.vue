<template>
  <v-flex d-flex>
        <v-layout wrap>
            <v-flex 
              md4 
              v-for="movie in watchlist" 
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
                      @click="removeFromWatchlist(movie)"
                    >
                      Remover
                    </v-btn>
                    <v-btn 
                      text
                      @click="markAsWatched(movie)"
                    >
                      Assistido
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
  name: 'Watchlist',
  props: {
    watchlist: Array
  },
  computed: {
    ...mapGetters(['getWatchlist'])
  },
  watch: {
    getWatchlist(value) {
      if (value) {
        this.watchlist = value;
      }
    },
  },
  methods: {
    removeFromWatchlist(movie) {
      this.$emit('removeMovieFromList', movie)
    },
    markAsWatched(movie) {
      this.$emit('markAsWatched', movie)
    }
  }

}
</script>