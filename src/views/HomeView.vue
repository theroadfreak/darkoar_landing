<template>
  <div class="container">
    <div class="w-100 d-flex justify-content-center mt-4">
      <router-link class="col-12 col-md-10" to="/campaigns-view/salt-milano-montenegro">
        <img class="col-12 custom-hover" src="@/assets/homepage/saltmilano_cover.jpg" alt="Homepage piture">
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

<style scoped>
.custom-hover {
  opacity: 1;
  transition: opacity 0.7s ease;
}

.custom-hover:hover {
  opacity: 0.8;
}
</style>