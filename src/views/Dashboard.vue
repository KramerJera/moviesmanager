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
      
      <delete-profile-dialog
        :profile="profile"
        @deleteProfile="deleteUserProfile"
      ></delete-profile-dialog>
    </v-row>

    <create-profile-dialog
      :canCreateProfile="canCreateProfile"
      @createProfile="createNewProfile"
    ></create-profile-dialog>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CreateProfileDialog from '@/components/CreateProfileDialog.vue'
import DeleteProfileDialog from '@/components/DeleteProfileDialog.vue'

export default {
  name: 'Dashboard',
  components: {
    CreateProfileDialog,
    DeleteProfileDialog
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
    ...mapActions(['listProfiles', 'createProfile', 'deleteProfile']),
    accessProfile(profile) {
      this.$router.push({ name: 'movies', params: { profileId: profile.id } })
    },
    createNewProfile(profile) {
      var newProfile = {
        name: profile
      };
      this.createProfile(newProfile);
    },
    deleteUserProfile(profile) {
      var profileToDelete = {
        id: profile.id
      }
      this.deleteProfile(profileToDelete)
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