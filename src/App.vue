<template>
  <div class="container-fluid pt-3"
       style="transition: all 1s"
       :style="$route.meta.background_black ? 'background-color: #000000' : 'background-color: #f3eeec'">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link
          to="/"
          class="navbar-brand m-auto d-md-none">
        <img
            :src="$route.meta.background_black ? require('@/assets/jpglogoblack.jpg') : require('@/assets/Darko-PNG.svg')"
            class="anim"
            :key="$route.meta.background_black"
            :class="$route.meta.background_black ? 'bg-white' : ''"
            width="100"
            alt="Main Logo"
        >
      </router-link>
      <div class="navbar-toggler collapsed position-absolute border-0 p-0" style="top: 20px; right: 10px" type="button"
           data-bs-toggle="collapse" data-bs-target="#navbarNav"
           aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" :class="$route.meta.background_black ? ' navbar-dark' : ''"></span>
      </div>
      <div class="collapse show navbar-collapse" id="navbarNav">
        <div class="container d-flex justify-content-between">
          <router-link
              to="/"
              class="navbar-brand mx-3 d-md-block d-none">
            <img
            :src="$route.meta.background_black ? require('@/assets/jpglogoblack.jpg') : require('@/assets/Darko-PNG.svg')"
            class="anim"
                :key="$route.meta.background_black"
                :class="$route.meta.background_black ? 'bg-white' : ''"
                alt="Main Logo"
                width="180"
            >
          </router-link>
          <ul class="navbar-nav mt-3 custom-mx">
            <li class="nav-item">
              <router-link
                  class="nav-link"
                  to="/campaigns"
                  :class="$route.meta.background_black ? 'text-white' : ''"
              >CAMPAIGNS
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="$route.meta.background_black ? 'text-white' : ''" to="/editorials">
                EDITORIALS
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="$route.meta.background_black ? 'text-white' : ''" to="/motion">
                MOTION
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="$route.meta.background_black ? 'text-white' : ''" to="/prints">
                PRINTS
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="$route.meta.background_black ? 'text-white' : ''" to="/about">
                CONTACT
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div
      style="transition: all 1s"
      :style="$route.meta.background_black ? 'background-color: #000000' : 'background-color: #f3eeec'">
    <Transition>
      <router-view/>
    </Transition>
  </div>
</template>

<script setup>
document.addEventListener('DOMContentLoaded', function () {
  let navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navbarLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      let navbarCollapse = document.querySelector('.navbar-collapse');
      navbarCollapse.classList.remove('show');
    });
  });
});
</script>

<style lang="scss">
@media only screen and (max-width: 770px) {
  .custom-mx {
    margin-right: auto;
    margin-left: auto;
  }
}

.anim {
  animation: fadeIn 3s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

@font-face {
  font-family: "Quicksand";
  src: local("Quicksand"), url(./fonts/Quicksand/Quicksand-VariableFont_wght.ttf) format("truetype");
}

.nav-link {
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;
}

//fade in transitions
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.st0 {
  font-family: 'Benzin-Semibold', serif;
}

.st1 {
  font-size: 90px;
}

.st2 {
  letter-spacing: 1px;
}
</style>
