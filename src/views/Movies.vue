<template>
  <div>
    <div>Bem vindo, {{ profileName }}</div>
    <div>{{ movies }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Movies',
  data () {
    return {
      profileName: '',
      profileId: '',
      movies: []
    }
  },
  computed: {
    ...mapGetters(['getSelectedProfile','getLocalStorageProfileName', 'getLocalStorageProfileId', 'getMovies']),
  },
  watch: {
    getMovies(value) {
      if (value) {
        this.movies = value;
      }
    }
  },
  mounted () {
    this.profileName = this.getLocalStorageProfileName;
    this.profileId = this.getLocalStorageProfileId;

    var params = {
        profileId: this.profileId,
      }
    this.listMovies(params)
  },
  methods: {
    ...mapActions(['listMovies']),
    listProfileMovies() {
      var params = {
        profileId: this.profileId,
      }
      this.listMovies(params)
    }
  }
}
</script>