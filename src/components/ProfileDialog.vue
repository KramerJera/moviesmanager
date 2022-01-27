<template>
  <v-row
    no-gutters
    fill-height
  >
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          elevation="0"
          class="mb-8"
          outlined
          v-bind="attrs"
          v-on="on"
          :disabled="!canCreateProfile"
        >
          <v-icon left>
            mdi-plus-circle
          </v-icon>
          Criar perfil
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Novo perfil de usuário</span>
        </v-card-title>
        <v-container>
          <v-text-field
            v-model="name"
            label="Nome do perfil"
            required
          ></v-text-field>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false; createProfile()"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'ProfileDialog',
  props: {
    canCreateProfile: Boolean,
  },
  data () {
    return {
      name: '',
      dialog: false,
    }
  },
  methods: {
    createProfile() {
      this.$emit('createProfile', this.name)
    }
  }
}
</script>