<template>
  <div class="container my-5">
    <div class="row">
      <div v-for="item in picturesToShow.pictures"
           class="col-12 mb-3"
           :class="item.orientation === 'landscape' ? '' : 'col-md-6'">
        <img
            :src="require('@/assets/editorials/'+picturesToShow.folder + item.picture)"
            :alt="item.picture"
            class="w-100 h-auto"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditorialsRenderView"
}
</script>

<script setup>
import {onMounted, ref} from 'vue';

const props = defineProps({
  albumName: null,
})
const picturesToShow = ref({folder: '', pictures: []});
const albums = ref([
  {
    name: 'enigma_antonjia_lokvenec',
    folder: 'Enigma/',
    pictures: [
      {picture: 'Lokvenec_Lokvenec_00.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_01.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_02.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_03.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_04.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_05.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_06.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_07.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_08.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_09.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_010.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_011.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_012.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_013.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_014.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_015.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_019.jpg', orientation: ''},
      {picture: 'Lokvenec_Lokvenec_016.jpg', orientation: 'landscape'},
      {picture: 'Lokvenec_Lokvenec_017.jpg', orientation: 'landscape'},
      {picture: 'Lokvenec_Lokvenec_018.jpg', orientation: 'landscape'},
    ]
  },
  {
    name: 'andrijana_ilioska',
    folder: 'Andrijana/',
    pictures: [
      {picture: 'Andrijana_Ilioska_02.jpg', orientation: ''},
      {picture: 'Andrijana_Ilioska_03.jpg', orientation: ''},
      {picture: 'Andrijana_Ilioska_01.jpg', orientation: 'landscape'},
      {picture: 'Andrijana_Ilioska_00.jpg', orientation: ''},
      {picture: 'Andrijana_Ilioska_04.jpg', orientation: 'landscape'},
    ]
  },
  {
    name: 'bellinda',
    folder: 'Bellinda/',
    pictures: [
      {picture: 'Bellinda_1.jpg', orientation: 'landscape'},
      {picture: 'Bellinda_4.jpg', orientation: ''},
      {picture: 'Bellinda_5.jpg', orientation: ''},
      {picture: 'Bellinda_6.jpg', orientation: ''},
      {picture: 'Bellinda_7.jpg', orientation: ''}
    ]
  },
  {
    name: 'matea-mateska',
    folder: 'MateaM/',
    pictures: [
      {picture: 'matea_web_1.jpg', orientation: ''},
      {picture: 'matea_web_2.jpg', orientation: ''},
      {picture: 'matea_web_3.jpg', orientation: ''},
      {picture: 'matea_web_4.jpg', orientation: ''},
      {picture: 'matea_web_5.jpg', orientation: ''},
      {picture: 'matea_web_13.jpg', orientation: ''},
      {picture: 'matea_web_6.jpg', orientation: 'landscape'},
      {picture: 'matea_web_7.jpg', orientation: ''},
      {picture: 'matea_web_8.jpg', orientation: ''},
      {picture: 'matea_web_9.jpg', orientation: ''},
      {picture: 'matea_web_10.jpg', orientation: ''},
      {picture: 'matea_web_11.jpg', orientation: ''},
      {picture: 'matea_web_12.jpg', orientation: ''},
    ],
  },
  {
    name: 'pixel-web',
    folder: 'PixelWeb/',
    pictures: [
      {picture: 'Pixel.qt_1.jpg', orientation: ''},
      {picture: 'Pixel.qt_2.jpg', orientation: ''},
      {picture: 'Pixel.qt_3.jpg', orientation: ''},
      {picture: 'Pixel.qt_4.jpg', orientation: ''},
      {picture: 'Pixel.qt_5.jpg', orientation: ''},
      {picture: 'Pixel.qt_6.jpg', orientation: ''},
      {picture: 'Pixel.qt_7.jpg', orientation: ''},
    ],
  },
  {
    name: 'teodora',
    folder: 'Teodora/',
    pictures: [
      {picture: 'teodora_srb_04.jpg', orientation: ''},
      {picture: 'teodora_srb_02.jpg', orientation: ''},
      {picture: 'teodora_srb_03.jpg', orientation: ''},
      {picture: 'teodora_srb_00.jpg', orientation: ''},
      {picture: 'teodora_srb_01.jpg', orientation: ''},
    ],
  },
  {
    name: 'viktorija-risteska',
    folder: 'ViktorijaR/',
    pictures: [
      {picture: 'victorija_r_01.jpg', orientation: ''},
      {picture: 'victorija_r_02.jpg', orientation: ''},
    ],
  },
  {
    name: 'daniels',
    folder: 'Daniels/',
    pictures: [
      {picture: 'JDaniels_1.jpg', orientation: ''},
      {picture: 'JDaniels_2.jpg', orientation: 'landscape'},
    ],
  },
  {
    name: 'elda',
    folder: 'Elda/',
    pictures: [
      {picture: 'elda_01.jpg', orientation: ''},
      {picture: 'elda_03.jpg', orientation: ''},
      {picture: 'elda_02.jpg', orientation: ''},
      {picture: 'elda_04.jpg', orientation: ''},
      {picture: 'elda_06.jpg', orientation: 'landscape'},
      {picture: 'elda_07.jpg', orientation: ''},
      {picture: 'elda_08.jpg', orientation: ''},
      {picture: 'elda_09.jpg', orientation: ''},
      {picture: 'elda_05.jpg', orientation: ''},
      {picture: 'elda_10.jpg', orientation: ''},
      {picture: 'elda_11.jpg', orientation: ''},
      {picture: 'elda_12.jpg', orientation: ''},
      {picture: 'elda_13.jpg', orientation: ''},
      {picture: 'elda_14.jpg', orientation: ''},
      {picture: 'elda_15.jpg', orientation: ''},
    ],
  },
  {
    name: 'iman',
    folder: 'ImanT/',
    pictures: [
      {picture: 'iman-totic_1.jpg', orientation: ''},
      {picture: 'iman-totic_2.jpg', orientation: ''},
      {picture: 'iman-totic_3.jpg', orientation: ''},
    ],
  },
  {
    name: 'monika',
    folder: 'Monika/',
    pictures: [
      {picture: 'monika_mateska_0.jpg', orientation: 'landscape'},
      {picture: 'monika_mateska_1.jpg', orientation: ''},
      {picture: 'monika_mateska_2.jpg', orientation: ''},
    ],
  },
  {
    name: 'vera',
    folder: 'Vera Hagan/',
    pictures: [
      {picture: 'vera-hagan-000.jpg', orientation: ''},
      {picture: 'vera-hagan-001.jpg', orientation: ''},
      {picture: 'vera-hagan-002.jpg', orientation: ''},
      {picture: 'vera-hagan-003.jpg', orientation: ''},
    ],
  },
]);
onMounted(() => {
  for (let album in albums.value) {
    if (albums.value[album].name === props.albumName) {

      picturesToShow.value.pictures = albums.value[album].pictures;

      picturesToShow.value.folder = albums.value[album].folder;
    }
  }
})
</script>

<style scoped>

</style>