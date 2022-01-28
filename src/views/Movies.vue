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
          <search-movies></search-movies>
        </v-tab-item>

        <v-tab href="#watchlist">
          Sua lista
        </v-tab>
        <v-tab-item value="watchlist">
          <movies-list
            :movies="movies"
          ></movies-list>
        </v-tab-item>

        <v-tab href="#watched">
          Assistidos
        </v-tab>
        <v-tab-item value="watched">
          Filmes já assistidos
        </v-tab-item>
      </v-tabs>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MoviesList from '@/components/MoviesList.vue'
import SearchMovies from '@/components/SearchMovies.vue'

export default {
  name: 'Movies',
  components: {
    MoviesList,
    SearchMovies,
  },
  data () {
    return {
      profileName: '',
      profileId: this.$route.params.profileId,
      movies: [],
    }
  },
  computed: {
    ...mapGetters(['getMovies', 'getCurrentProfile']),
  },
  watch: {
    getMovies(value) {
      if (value) {
        this.movies = value;
      }
    },
    getCurrentProfile(value) {
      if (value) {
        this.profileName = value.name;
      }
    }
  },
  mounted () {
    var params = {
        profileId: this.profileId,
    }
    this.listMovies(params)
    this.getProfileInfos(params)
  },
  methods: {
    ...mapActions(['listMovies', 'getProfileInfos']),
    listProfileMovies() {
      var params = {
        profileId: this.profileId,
      }
      this.listMovies(params)
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