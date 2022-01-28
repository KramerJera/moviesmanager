<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>  
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Deletar Perfil
        </v-card-title>
        <v-card-text>Tem certeza que deseja apagar o perfil de {{ profile.name }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false; deleteProfile()"
          >
            Continuar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'DeleteProfileDialog',
  props: {
    profile: Object
  },
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    deleteProfile() {
      this.$emit('deleteProfile', this.profile)
    }
  }
}
</script>