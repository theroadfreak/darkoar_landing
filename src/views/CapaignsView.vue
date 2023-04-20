<template>
  <div class="container">
    <div class="row pt-4 justify-content-center" style="padding-bottom: 300px">
      <div
          v-for="campaign in campaigns"
          class="col-12 col-sm-6 col-md-4 mb-3"
      >
        <router-link class="nav-link" :to="{name: 'campaigns-view', params: {albumName: campaign.albumName}}">
          <div class="custom-hover-container">
            <div class="custom-hover-show d-flex align-items-center justify-content-center w-100 h-100">
              <h5 v-html="campaign.name" class="text-white text-uppercase"></h5>
            </div>
            <img
                v-lazy="require('@/assets/campaigns/'+campaign.thumbnail)"
                :alt="campaign.name"
                class="w-100"
            >
          </div>

        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CapaignsView",
  metaInfo() {
    return {
      title: "Darko AR | Campaigns",
      meta: [
        {name: 'description', content: "Darko's campaign work"},
        {property: 'og:title', content: "Darko AR | Campaigns"},
        {property: 'og:site_name', content: 'Darko AR'},
        {property: 'og:type', content: 'website'},
        {name: 'robots', content: 'index,follow'}
      ]
    }
  }
}
</script>

<script setup>
import {ref} from "vue";


const campaigns = ref([
  {
    name: 'Salt Milano <br> Montenegro',
    thumbnail: 'SLM/SLM_Cover.jpg',
    albumName: "salt-milano-montenegro"
  },
  {
    name: 'Salt Milano <br> Portofino',
    thumbnail: 'SLM_Portofino/cover02.jpg',
    albumName: "salt-milano-portofino"
  },
  {
    name: 'Salt Milano <br>Vourvourou Greece',
    thumbnail: 'SLM_Greece/cover_vv.jpg',
    albumName: "salt-milano-greece"
  },

])
</script>

<style scoped>
.custom-hover-container {
  position: relative;
}

.custom-hover-show {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.7s ease;
  opacity: 0;
  background-color: black;
}

.custom-hover-show:hover {
  transition: all 0.7s ease;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 1;
}
</style>