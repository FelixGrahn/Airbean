<template>
  <div class="about">
    <ProfileOverlay v-if="!this.$store.state.loggedin" />
    <OrderHistory/>
  </div>
  
</template>



<script>
import OrderHistory from './OrderHistory.vue'
import ProfileOverlay from '@/components/ProfileOverlay.vue'

export default {
  components: { OrderHistory, ProfileOverlay },
}
</script>

<style>
.about {
  min-height: var(--minheight);
}
</style>

