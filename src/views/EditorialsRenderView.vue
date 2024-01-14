<template>
  <div class="container my-5">
    <div class="row">
      <div v-for="item in picturesToShow.pictures"
           class="col-12 my-auto"
           :class="item.orientation === 'landscape' ? '' : 'col-md-6'">
        <div class="" v-if="item.picture === 'line' ">
          <div class="d-flex flex-column align-items-end">
            <small class="float-end">Date: {{ item.title }}</small>
          </div>
          <hr />
        </div>
        <img
            v-else
            v-lazy="require('@/assets/editorials/'+picturesToShow.folder + item.picture)"
            :alt="item.picture"
            class="w-100 h-auto mb-3"
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
    name: 'marija',
    folder: 'Marija/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '26 September 2023'},

      {picture: 'marija_01.jpg', orientation: ''},
      {picture: 'marija_02.jpg', orientation: ''},
      {picture: 'marija_03.jpg', orientation: ''},
      {picture: 'marija_04.jpg', orientation: ''},
      {picture: 'marija_05.jpg', orientation: ''},
    ]
  },
  {
    name: 'ilarija',
    folder: 'Ilarija/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '25 September 2023'},

      {picture: 'ilarija_01.jpg', orientation: ''},
      {picture: 'ilarija_02.jpg', orientation: ''},
      {picture: 'ilarija_03.jpg', orientation: ''},
    ]
  },
  {
    name: 'antonija2',
    folder: 'Enigma/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '8 March 2023 - Enigma'},

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
      {picture: 'line', orientation: 'landscape' ,title: '22 March 2023 - Why me'},

      {picture: 'antonija2_1.jpg', orientation: ''},
      {picture: 'antonija2_2.jpg', orientation: ''},
      {picture: 'antonija2_4.jpg', orientation: ''},
    ]
  },{
    name: 'katerina',
    folder: 'Katerina/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '16 September 2023'},
      {picture: 'katerina_12.jpg', orientation: 'landscape'},
      {picture: 'katerina_01.jpg', orientation: ''},
      {picture: 'katerina_02.jpg', orientation: ''},
      {picture: 'katerina_10.jpg', orientation: 'landscape'},
      {picture: 'katerina_03.jpg', orientation: ''},
      {picture: 'katerina_04.jpg', orientation: ''},
      {picture: 'katerina_05.jpg', orientation: ''},
      {picture: 'katerina_06.jpg', orientation: ''},
      {picture: 'katerina_07.jpg', orientation: 'landscape'},
      {picture: 'katerina_09.jpg', orientation: 'landscape'},
      {picture: 'katerina_11.jpg', orientation: 'landscape'},
      {picture: 'katerina_08.jpg', orientation: ''},
      //
      {picture: 'line', orientation: 'landscape' ,title: '26 May 2023'},
      {picture: 'L1030308(2) copy (1).jpg', orientation: ''},
      {picture: 'L1030375-1.jpg', orientation: ''},
      {picture: 'L1030418(1) copy.jpg', orientation: ''},
      {picture: 'L1030426 copy.jpg', orientation: ''},
      {picture: 'L1030720-1.jpg', orientation: ''},
      {picture: 'L1040236 copy1.jpg', orientation: ''},
      {picture: 'L1040249 copy final copy1.jpg', orientation: ''},
    ]
  },
  {
    name: 'andrijana_ilioska',
    folder: 'Andrijana/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '28 December 2023'},
      {picture: 'Andrijana_Ilioska_11.jpg', orientation: ''},
      {picture: 'Andrijana_Ilioska_12.jpg', orientation: ''},
      {picture: 'Andrijana_Ilioska_13.jpg', orientation: ''},
      {picture: 'Andrijana_Ilioska_14.jpg', orientation: ''},
      //
      {picture: 'line', orientation: 'landscape' ,title: '17 January 2023'},
      {picture: 'Andrijana_Ilioska_02.jpg', orientation: ''},
      {picture: 'Andrijana_Ilioska_03.jpg', orientation: ''},
      {picture: 'Andrijana_Ilioska_01.jpg', orientation: 'landscape'},
      {picture: 'Andrijana_Ilioska_04.jpg', orientation: 'landscape'},
      {picture: 'Andrijana_Ilioska_00.jpg', orientation: ''},
        //
      {picture: 'line', orientation: 'landscape' ,title: '7 August 2022'},
      {picture: 'Andrijana_Ilioska_06.jpg', orientation: ''},
      {picture: 'Andrijana_Ilioska_07.jpg', orientation: ''},
      {picture: 'Andrijana_Ilioska_08.jpg', orientation: ''},
      {picture: 'Andrijana_Ilioska_09.jpg', orientation: ''},
      {picture: 'Andrijana_Ilioska_10.jpg', orientation: ''},
    ]
  },
  {
    name: 'bellinda',
    folder: 'Bellinda/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '4 March 2021'},

      {picture: 'Bellinda_1.jpg', orientation: 'landscape'},
      {picture: 'Bellinda_4.jpg', orientation: ''},
      {picture: 'Bellinda_5.jpg', orientation: ''},
      {picture: 'Bellinda_6.jpg', orientation: ''},
      {picture: 'Bellinda_7.jpg', orientation: ''}
    ]
  },

  {
    name: 'martina-mar',
    folder: 'MartinaMarkovska/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '7 March 2019'},

      {picture: 'Martina-Markovska-001.jpg', orientation: ''},
      {picture: 'Martina-Markovska-002.jpg', orientation: ''},
      {picture: 'Martina-Markovska-003.jpg', orientation: ''},
      {picture: 'Martina-Markovska-004.jpg', orientation: ''},
      {picture: 'Martina-Markovska-005.jpg', orientation: ''},
    ]
  },
  {
    name: 'monika-m',
    folder: 'MonikaMateska/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '3 February 2023'},

      {picture: 'monika_mateska_01.jpg', orientation: ''},
      {picture: 'monika_mateska_02.jpg', orientation: ''},
      {picture: 'monika_mateska_04.jpg', orientation: ''},
      {picture: 'monika_mateska_03.jpg', orientation: ''},
      {picture: 'monika_mateska_06.jpg', orientation: ''},

      {picture: 'line', orientation: 'landscape' ,title: '14 May 2022'},
      {picture: 'monika_mateska_0.jpg', orientation: 'landscape'},
      {picture: 'monika_mateska_1.jpg', orientation: ''},
      {picture: 'monika_mateska_2.jpg', orientation: ''},
    ]
  },
  {
    name: 'matea-mateska',
    folder: 'MateaM/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '6 September 2021'},

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
      {picture: 'line', orientation: 'landscape' ,title: '18 July 2021'},

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
      {picture: 'line', orientation: 'landscape' ,title: '17 July 2020'},

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
      {picture: 'line', orientation: 'landscape' ,title: '19 January 2020'},
      {picture: 'victorija_r_01.jpg', orientation: ''},
      {picture: 'victorija_r_02.jpg', orientation: ''},
    ],
  },
  {
    name: 'daniels',
    folder: 'Daniels/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '2 June 2022'},
      {picture: 'JDaniels_1.jpg', orientation: ''},
      {picture: 'JDaniels_2.jpg', orientation: 'landscape'},
    ],
  },
  {
    name: 'elda',
    folder: 'Elda/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '25 December 2023'},
      {picture: 'elda_16.jpg', orientation: ''},
      {picture: 'elda_17.jpg', orientation: ''},
      {picture: 'elda_18.jpg', orientation: ''},
      {picture: 'elda_19.jpg', orientation: ''},
      {picture: 'elda_20.jpg', orientation: 'landscape'},
      {picture: 'elda_21.jpg', orientation: ''},
      //
      {picture: 'line', orientation: 'landscape' ,title: '12 March 2023'},
      {picture: 'elda_23.jpg', orientation: ''},
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

      {picture: 'line', orientation: 'landscape' ,title: '1 April 2023'},

      {picture: 'elda_22.jpg', orientation: ''},
    ],
  },
  {
    name: 'iman',
    folder: 'ImanT/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '8 October 2021'},
      {picture: 'iman-totic_1.jpg', orientation: ''},
      {picture: 'iman-totic_2.jpg', orientation: ''},
      {picture: 'iman-totic_3.jpg', orientation: ''},
      {picture: 'iman-totic_4.jpg', orientation: ''},
    ],
  },

  {
    name: 'vera',
    folder: 'VeraHagan/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '17 December 2021'},
      {picture: 'vera-hagan-000.jpg', orientation: ''},
      {picture: 'vera-hagan-001.jpg', orientation: ''},
      {picture: 'vera-hagan-002.jpg', orientation: ''},
      {picture: 'vera-hagan-003.jpg', orientation: ''},
    ],
  },
  {
    name: 'alisadacic',
    folder: 'AlisaDacic/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '28 July 2021'},

      {picture: 'Alisa_Dacic_00.jpg', orientation: ''},
      {picture: 'Alisa_Dacic_01.jpg', orientation: ''},
      {picture: 'Alisa_Dacic_02.jpg', orientation: ''},
      {picture: 'Alisa_Dacic_03.jpg', orientation: ''},
      {picture: 'Alisa_Dacic_04.jpg', orientation: ''},
      {picture: 'Alisa_Dacic_05.jpg', orientation: ''},
      {picture: 'Alisa_Dacic_06.jpg', orientation: ''},
      {picture: 'Alisa_Dacic_07.jpg', orientation: ''},
      {picture: 'Alisa_Dacic_08.jpg', orientation: ''},
      {picture: 'Alisa_Dacic_09.jpg', orientation: ''},
      {picture: 'Alisa_Dacic_010.jpg', orientation: ''},
      {picture: 'Alisa_Dacic_011.jpg', orientation: ''},
    ],
  },
  {
    name: 'ilona',
    folder: 'Ilona/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '22 February 2022'},
      {picture: 'Ilona_01.jpg', orientation: ''},
      {picture: 'Ilona_03.jpg', orientation: ''},
      {picture: 'Ilona_04.jpg', orientation: ''},
      {picture: 'Ilona_05.jpg', orientation: ''},
    ],
  },
  {
    name: 'milam',
    folder: 'MilaM/',
    pictures: [
      {picture: 'mila_01.jpg', orientation: ''},
    ],
  },
  {
    name: 'natashaj',
    folder: 'NatashaJ/',
    pictures: [
      {picture: 'line', orientation: 'landscape' ,title: '15 March 2020'},
      {picture: 'Natasha-jovanovic-001.jpg', orientation: ''},
      {picture: 'Natasha-jovanovic-002.jpg', orientation: ''},
      {picture: 'Natasha-jovanovic-003.jpg', orientation: ''},
      {picture: 'Natasha-jovanovic-004.jpg', orientation: ''},
      {picture: 'Natasha-jovanovic-005.jpg', orientation: ''},
      {picture: 'Natasha-jovanovic-006.jpg', orientation: ''},
      {picture: 'Natasha-jovanovic-007.jpg', orientation: ''},
      {picture: 'Natasha-jovanovic-008.jpg', orientation: ''},
      {picture: 'Natasha-jovanovic-009.jpg', orientation: ''},
    ],
  },
  {
    name: 'dea',
    folder: 'Dea/',
    pictures: [
      {picture: 'Dea_web.jpg', orientation: ''},
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