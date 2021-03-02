<template>
  <div class="about">
    <ProfileOverlay v-if="!this.$store.state.loggedin" />
    <Profile/>
  </div>
  
</template>



<script>
// import Vartkaffe from '../components/Vartkaffe.vue'
import Profile from './Profile.vue'
import ProfileOverlay from '@/components/ProfileOverlay.vue'

export default {
  components: { Profile, ProfileOverlay },
}
</script>

<style>

</style>

