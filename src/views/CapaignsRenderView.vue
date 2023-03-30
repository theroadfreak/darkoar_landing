<template>
  <div class="container my-5">
    <div class="row">
      <img
          v-for="item in picturesToShow.pictures"
          :src="require('@/assets/campaigns/'+picturesToShow.folder + item.picture)"
          :alt="item.picture"
          class="col-12 mb-3"
          :class="item.orientation === 'landscape' ? '' : 'col-md-6'"
      >
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