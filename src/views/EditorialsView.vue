<template>
  <div class="container">
    <div class="row pt-4 justify-content-center">
      <div
          v-for="campaign in campaigns"
          class="col-12 col-sm-6 col-md-4 mb-3"
      >
        <router-link class="nav-link" :to="{name: 'editorials-view', params: {albumName: campaign.albumName}}">
          <div class="custom-hover-container">
            <div class="custom-hover-show d-flex align-items-center justify-content-center w-100 h-100">
              <h5 v-html="campaign.name" class="text-white text-uppercase"></h5>
            </div>
            <img
                v-lazy="require('@/assets/editorials/'+campaign.thumbnail)"
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
  name: 'EditorialsView',
  metaInfo() {
    return {
      title: "Darko AR | Editorials",
      meta: [
        {name: 'description', content: "Darko's editorial work"},
        {property: 'og:title', content: "Darko AR | Editorials"},
        {property: 'og:site_name', content: 'Darko AR'},
        {property: 'og:type', content: 'website'},
        {name: 'robots', content: 'index,follow'}
      ]
    }
  }
}
</script>

<script setup>
import {ref} from 'vue';

const campaigns = ref([
  {
    name: 'Antonija Lokvenec <br> <span class="text-lowercase">Енигма</span>',
    thumbnail: 'Enigma/AL_Cover.jpg',
    albumName: "enigma_antonjia_lokvenec"
  },
  {
    name: 'Andrijana Ilioska',
    thumbnail: 'Andrijana/AI_cover.avif',
    albumName: "andrijana_ilioska"
  },
  {
    name: 'Bellinda',
    thumbnail: 'Bellinda/Belllinda_cover_600x600.avif',
    albumName: "bellinda"
  },
  {
    name: 'Matea Mateska',
    thumbnail: 'MateaM/MM_cover.jpg',
    albumName: "matea-mateska"
  },
  {
    name: 'Pixel',
    thumbnail: 'PixelWeb/cover.jpg',
    albumName: "pixel-web"
  },
  {
    name: 'Teodora',
    thumbnail: 'Teodora/TS_Cover.jpg',
    albumName: "teodora"
  },
  {
    name: 'Viktorija Risteska',
    thumbnail: 'ViktorijaR/VR_Cover.jpg',
    albumName: "viktorija-risteska"
  },
  {
    name: 'Daniels',
    thumbnail: 'Daniels/cover.avif',
    albumName: "daniels"
  },
  {
    name: 'Elda',
    thumbnail: 'Elda/cover-_elda_1.jpg',
    albumName: "elda"
  },
  {
    name: 'Iman Totic',
    thumbnail: 'ImanT/cover.jpg',
    albumName: "iman"
  },
  {
    name: 'Monika',
    thumbnail: 'Monika/cover.jpg',
    albumName: "monika"
  },
  {
    name: 'VeraHagan',
    thumbnail: 'VeraHagan/cover.jpg',
    albumName: "vera"
  },
  {
    name: 'Alisa Dacic',
    thumbnail: 'AlisaDacic/cover.jpg',
    albumName: "alisadacic"
  },
  {
    name: 'Ilona',
    thumbnail: 'Ilona/Ilona_cover.jpg',
    albumName: "ilona"
  },
  {
    name: 'Mila',
    thumbnail: 'MilaM/mila_cover.jpg',
    albumName: "milam"
  },
  {
    name: 'Natasha',
    thumbnail: 'NatashaJ/Natasha-cover.jpg',
    albumName: "natashaj"
  },
  {
    name: 'Dea',
    thumbnail: 'Dea/cover.jpg',
    albumName: "dea"
  },
  {
    name: 'Elda',
    thumbnail: 'Elda2/elda-cover.jpg',
    albumName: "elda2"
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
  background-color: rgba(0,0,0,0.6);
  opacity: 1;
}
</style>