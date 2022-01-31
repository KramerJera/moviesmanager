<template>
  <div v-if="movies.lenght > 0">{{ movies }}</div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    movies: Array
  },
  mounted () {
    
  }
}
</script>