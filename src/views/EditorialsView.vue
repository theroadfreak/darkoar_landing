<template>
  <div class="container">
    <div class="row pt-4 justify-content-center">
      <div
          v-for="campaign in campaigns"
          class="col-12 col-sm-6 col-md-4 mb-3"
      >
        <router-link v-if="campaign.albumName !== 'coming-soon'" class="nav-link"
                     :to="{name: 'editorials-view', params: {albumName: campaign.albumName}}">
          <img
              v-lazy="require('@/assets/editorials/'+campaign.thumbnail)"
              :alt="campaign.name"
              class="w-100 custom-hover"
          >
          {{ campaign.name }}
        </router-link>
        <div v-else class="nav-link">
          <img
              v-lazy="require('@/assets/editorials/'+campaign.thumbnail)"
              :alt="campaign.name"
              class="w-100 custom-hover"
          >
          {{ campaign.name }}
        </div>

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
    name: 'Andrijana Ilioska',
    thumbnail: 'Andrijana/ai_cover.jpg',
    albumName: "andrijana_ilioska"
  },
  {
    name: 'Katerina',
    thumbnail: 'Katerina/ki_cover.jpg',
    albumName: "katerina"
  },
  {
    name: 'Marija',
    thumbnail: 'Marija/marija_cover.jpg',
    albumName: "marija"
  },
  {
    name: 'Ilarija',
    thumbnail: 'Ilarija/il_cover.jpg',
    albumName: "ilarija"
  },

  {
    name: 'Martina Markovska',
    thumbnail: 'MartinaMarkovska/Cover_Martina.jpg',
    albumName: "martina-mar"
  },
  {
    name: 'Antonija Lokvenec',
    thumbnail: 'Antonija2/antonija_cover.jpg',
    albumName: "antonija2"
  },
  {
    name: 'Monika Mateska',
    thumbnail: 'MonikaMateska/Cover_Monika.jpg',
    albumName: "monika-m"
  },
  {
    name: 'Elda',
    thumbnail: 'Elda/cover-_elda_1.jpg',
    albumName: "elda"
  },

  {
    name: 'Dea',
    thumbnail: 'Dea/cover.jpg',
    albumName: "dea"
  },
  {
    name: 'Mila',
    thumbnail: 'MilaM/mila_cover.jpg',
    albumName: "milam"
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
    name: 'Iman Totic',
    thumbnail: 'ImanT/cover.jpg',
    albumName: "iman"
  },

  {
    name: 'Vera Hagan',
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
    name: 'Natasha',
    thumbnail: 'NatashaJ/Natasha-cover.jpg',
    albumName: "natashaj"
  },


])
</script>

<style scoped>

.custom-hover {
  transition: all 0.7s ease;
  opacity: 1;
}

.custom-hover:hover {
  transition: all 0.7s ease;
  opacity: 0.8;
}
</style>