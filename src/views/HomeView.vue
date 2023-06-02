<template>
  <div class="container">
<!--    <div class="scrollable-section">-->
<!--      <div class="scrollable-wrapper">-->
<!--        <img-->
<!--            v-for="item in pictures"-->
<!--            v-lazy="require('@/assets/' + item.picture)"-->
<!--            alt="Image"-->
<!--            class="sizing"-->
<!--        >-->
<!--        &lt;!&ndash;        <img src="@/assets/editorials/Elda/elda_07.jpg" alt="">&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->
        <div class="w-100 d-flex justify-content-center mt-4">
          <router-link class="col-12 col-md-10" to="/campaigns-view/salt-milano-montenegro">
            <img class="col-12" src="@/assets/homepage/saltmilano_cover.jpg" alt="Homepage piture">
          </router-link>
        </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {}
}
</script>

<script setup>
import {ref} from 'vue';

const pictures = ref([
  {picture: "editorials/Enigma/Lokvenec_Lokvenec_06.jpg"},
  {picture: "editorials/VeraHagan/vera-hagan-000.jpg"},
  {picture: "editorials/Elda/elda_07.jpg"},
  {picture: "editorials/Elda/elda_07.jpg"},
  {picture: "editorials/Elda/elda_07.jpg"},

])
</script>

<style scoped>
.scrollable-section {
  overflow-x: scroll;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollable-section::-webkit-scrollbar {
  display: none;
}

.scrollable-wrapper {
  display: inline-block;
}

.sizing {
  height: 600px;
  width: auto;
  margin-right: 1rem;
}
</style>