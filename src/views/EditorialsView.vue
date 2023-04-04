<template>
  <div class="container">
    <div class="row pt-4 justify-content-center">
      <div
          v-for="campaign in campaigns"
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
      >
        <router-link class="nav-link" :to="{name: 'editorials-view', params: {albumName: campaign.albumName}}">
          <img
              :src="require('@/assets/editorials/'+campaign.thumbnail)"
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
    name: 'Енигма | Antonija Lokvenec',
    thumbnail: 'Enigma/AL_Cover.jpg',
    albumName: "enigma_antonjia_lokvenec"
  },
  {
    name: 'Andrijana Ilioska',
    thumbnail: 'Andrijana/AI_cover.jpg',
    albumName: "andrijana_ilioska"
  },
  {
    name: 'Bellinda',
    thumbnail: 'Bellinda/Belllinda_cover_600x600.jpg',
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
    thumbnail: 'Daniels/cover.jpg',
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
    name: 'Vera Hagan',
    thumbnail: 'Vera Hagan/cover.jpg',
    albumName: "vera"
  },
  {
    name: 'Alisa Dacic',
    thumbnail: 'AlisaDacic/cover_AD.jpg',
    albumName: "alisadacic"
  },
  {
    name: 'Ilona',
    thumbnail: 'Ilona/Ilona_cover.jpg',
    albumName: "ilona"
  },
  {
    name: 'MilaM',
    thumbnail: 'MilaM/mila_cover.jpg',
    albumName: "milam"
  },
  {
    name: 'NatashaJ',
    thumbnail: 'NatashaJ/Natasha-cover.jpg',
    albumName: "natashaj"
  },
])
</script>
