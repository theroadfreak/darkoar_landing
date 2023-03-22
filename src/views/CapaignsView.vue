<template>
  <div class="container">
    <div class="row mt-4 justify-content-center">
      <div
          v-for="campaign in campaigns"
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
      >
        <router-link class="nav-link" :to="{name: 'campaigns-view', params: {albumName: campaign.albumName}}">
          <img
              :src="require('@/assets/campaigns/'+campaign.thumbnail)"
              :alt="campaign.name"
              class="w-100"
          >
          {{ campaign.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CapaignsView"
}
</script>

<script setup>
import {ref} from "vue";


const campaigns = ref([
  {
    name: 'Salt Milano | Montenegro',
    thumbnail: 'SLM/SLM_Cover.jpg',
    albumName: "salt-milano-montenegro"
  },

])
</script>

<style scoped>

</style>