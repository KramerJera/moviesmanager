<template>
  <div class="moviesList">
    <v-row
      no-gutters
      fill-height
    >
      <h1>Bem vindo, {{ profileName }}</h1>
    </v-row>

    <v-divider></v-divider>

    <v-row
      no-gutters
      fill-height
    >
      <v-tabs>
        <v-tab href="#allmovies">
          Todos os filmes
        </v-tab>
        <v-tab-item value="allmovies">
          <search-movies
            @markAsWatched='markAsWatched'
          ></search-movies>
        </v-tab-item>

        <v-tab href="#watchlist">
          Sua lista
        </v-tab>
        <v-tab-item value="watchlist">
          <watchlist
            :watchlist="watchlist"
            @removeMovieFromList='removeMovieFromList'
            @markAsWatched='markAsWatched'
          ></watchlist>
        </v-tab-item>

        <v-tab href="#watched">
          Assistidos
        </v-tab>
        <v-tab-item value="watched">
          <watched-movies
            :watchedlist="watchedlist"
            @removeMovieFromList='removeMovieFromList'
          ></watched-movies>
        </v-tab-item>
      </v-tabs>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Watchlist from '@/components/Watchlist.vue'
import SearchMovies from '@/components/SearchMovies.vue'
import WatchedMovies from '@/components/WatchedMovies.vue'

export default {
  name: 'Movies',
  components: {
    Watchlist,
    SearchMovies,
    WatchedMovies
  },
  data () {
    return {
      profileName: '',
      profileId: this.$route.params.profileId,
      watchlist: '',
      watchedlist: '',
    }
  },
  computed: {
    ...mapGetters(['getCurrentProfile', 'getWatchlist', 'getWatchedlist']),
  },
  watch: {
    getCurrentProfile(value) {
      if (value) {
        this.profileName = value.name;
      }
    },
    getWatchlist(value) {
      if (value) {
        this.watchlist = value;
      }
    },
    getWatchedlist(value) {
      if (value) {
        this.watchedlist = value;
      }
    }
  },
  mounted () {
    var params = {
        profile_id: this.profileId,
    }
    this.getWatchlistMovies(params)
    this.getWatchedlistMovies(params)
    this.getProfileInfos(params)
  },
  methods: {
    ...mapActions(['getWatchlistMovies', 'getWatchedlistMovies', 'getProfileInfos', 'removeMovie', 'markMovieAsWatched']),
    removeMovieFromList(movie) {
      this.removeMovie(movie)
    },
    markAsWatched(movie) {
      movie.watched = true
      movie.watchlist = false
      this.markMovieAsWatched(movie)
    }
  }
}
</script>

<style lang="scss">
.moviesList {
  width: 100%;
  margin-top: 0;
  height: 100vh;
}
</style>