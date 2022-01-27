<template>
  <div class="dashboard">
    <v-row
      no-gutters
      fill-height
    >
      <v-col lg="10" md="12" class="ml-6 mt-10">
        <h1 class="mb-10">
          Selecione um perfil
        </h1>
      </v-col>
    </v-row>

    <v-row
      no-gutters 
      fill-height
    >
      <v-col
        md="4"
        lg="3"
        class="ml-4 mb-4"
        v-for="profile in profiles"
        :key="profile.id"
      >
        <v-btn
          elevation="0"
          class="mb-8"
          outlined
          @click="accessProfile(profile)"
        > 
          <v-icon left>
            mdi-account
          </v-icon>
          {{ profile.name }} 
        </v-btn>
      </v-col>
      <profile-dialog
        :canCreateProfile="canCreateProfile"
        @createProfile="createNewProfile"
      ></profile-dialog>
    </v-row>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProfileDialog from '@/components/ProfileDialog.vue'

export default {
  name: 'Dashboard',
  components: {
    ProfileDialog
  },
  data() {
    return {
      profiles: [],
      canCreateProfile: false,
    }
  },
  computed: {
    ...mapGetters(['currentUser', 'getToken', 'getProfiles']),
    user() {
      return this.currentUser;
    },
  },
  watch: {
    getProfiles(value) {
      if (value) {
        this.profiles = value;
        this.canCreateProfile = (this.profiles.length < 4 ? true : false);
      }
    }

  },
  mounted() {
    this.listProfiles();
  },
  methods: {
    ...mapActions(['listProfiles', 'createProfile']),
    accessProfile(profile) {
      console.log(profile.id)
    },
    createNewProfile(profile) {
      var newProfile = {
        name: profile
      };
      this.createProfile(newProfile);
    }
  }
}
</script>

<style lang="scss">
.dashboard {
  width: 100%;
  margin-top: 0;
  height: 100vh;
}
</style>