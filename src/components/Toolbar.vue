<template>
  <v-row justify="center" no-gutters>
    <v-col lg="8" md="12">
      <v-app-bar
        color="transparent"
        height="80"
        elevation="0"
        dark
      >
        <v-toolbar-title  class="tasks-title">
          <v-btn color="blue" text to="/">
            Movies Manager
          </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text color="#3e3e55">
          Deslogar
        </v-btn>
      </v-app-bar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Toolbar',
}
</script>