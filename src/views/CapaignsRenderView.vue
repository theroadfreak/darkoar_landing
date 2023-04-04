<template>
  <div class="container my-5">
    <div class="row">
      <div
          v-for="item in picturesToShow.pictures"
          class="col-12 my-auto"
          :class="item.orientation === 'landscape' ? '' : 'col-md-6'"
      >
        <img
            :src="require('@/assets/campaigns/'+picturesToShow.folder + item.picture)"
            :alt="item.picture"
            class="w-100 h-auto mb-3"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CapaignsRenderView"
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
    name: 'salt-milano-montenegro',
    folder: 'SLM/',
    pictures: [
      {picture: 'Salt_Milano_Montenegro_0.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_1.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_23.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_2.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_3.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_4.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_5.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_6.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_7.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_8.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_9.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_10.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_11.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_12.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_13.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_14.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_15.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_16.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_17.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_18.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_19.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_20.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_21.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_22.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_24.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_25.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_26.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_39.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_27.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_28.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_29.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_30.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_31.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_32.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_33.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_34.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_35.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_36.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_37.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_38.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_40.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_41.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_42.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_44.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_43.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_45.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_46.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_47.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_48.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_49.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_50.jpg', orientation: 'landscape'},
      {picture: 'Salt_Milano_Montenegro_51.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_52.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_53.jpg', orientation: ''},
      {picture: 'Salt_Milano_Montenegro_54.jpg', orientation: ''},
    ]
  },
  {
    name: 'salt-milano-portofino',
    folder: 'SLM_Portofino/',
    pictures: [
      {picture: 'Salt_milano_portofino_tais_0.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_1.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_3.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_4.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_5.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_6.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_7.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_8.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_9.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_10.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_11.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_12.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_13.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_14.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_17.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_15.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_16.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_18.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_20.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_34.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_21.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_22.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_24.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_25.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_26.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_27.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_30.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_31.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_33.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_35.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_36.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_38.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_39.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_40.jpg', orientation: ''},
      {picture: 'Salt_milano_portofino_tais_41.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_42.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_43.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_44.jpg', orientation: 'landscape'},
      {picture: 'Salt_milano_portofino_tais_37.jpg', orientation: ''},

    ]
  },
  {
    name: 'salt-milano-greece',
    folder: 'SLM_Greece/',
    pictures: [
      {picture: 'Salt-milano-vourvourou-greece-002.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-0028.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0022.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-005.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-008.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-009.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0011.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0012.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0015.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0016.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0017.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-0018.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-0019.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-0024.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-0025.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0027.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0029.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-0031.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0032.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0035.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-0036.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0038.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0039.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-0040.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0041.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0042.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0043.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0047.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0048.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0049.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0050.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0052.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0057.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0053.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-0054.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-0055.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0058.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0059.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0062.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0060.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-0063.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-0064.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0065.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0066.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0067.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0069.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0070.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0071.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0072.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0073.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0074.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0075.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0076.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-0078.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0080.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0081.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0082.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0085.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0086.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0087.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0089.jpg', orientation: ''},
      {picture: 'Salt-milano-vourvourou-greece-0088.jpg', orientation: 'landscape'},
      {picture: 'Salt-milano-vourvourou-greece-003.jpg', orientation: 'landscape'},


    ]
  }

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