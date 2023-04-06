<template>
  <div class="container-fluid"
       style="transition: all 1s"
       :style="$route.meta.background_black ? 'background-color: #000000' : 'background-color: #f3eeec'">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link
          to="/"
          class="navbar-brand m-auto d-md-none">
        <img
            :src="$route.meta.background_black ? require('@/assets/Darko-black-PNG.svg') : require('@/assets/Darko-PNG.svg')"
            alt="Main Logo"
        >
      </router-link>
      <div class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
           aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </div>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav mt-3">
          <li class="nav-item active">
            <router-link
                class="nav-link" to="/campaigns" :class="$route.meta.background_black ? 'text-white' : ''"
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
        </ul>
        <router-link
            to="/"
            class="navbar-brand mx-3 d-md-block d-none">
          <img
              :src="$route.meta.background_black ? require('@/assets/Darko-black-PNG.svg') : require('@/assets/Darko-PNG.svg')"
              class="anim"
              :key="$route.meta.background_black"
              :class="$route.meta.background_black ? 'bg-white' : ''"
              alt="Main Logo"
              width="180"
          >
        </router-link>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" :class="$route.meta.background_black ? 'text-white' : ''" href="/">PORTFOLIO</a>
            <!--             3 fotki video 3 fotki video-->
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

<style lang="scss">
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

//navbar colapse animation
.navbar-toggler {
  background: none;
  border: none;
}

.navbar-toggler:active,
.navbar-toggler:focus {
  outline: 0;
}

.navbar-toggler .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  margin: 4px 0 4px 0;
  transition: all 0.2s;
  background-color: black;
}

.navbar-dark .navbar-toggler .icon-bar {
  background: #ffffff;
}

.navbar-toggler .icon-bar:nth-of-type(1) {
  transform: rotate(45deg);
  transform-origin: 10% 10%;
}

.navbar-toggler .icon-bar:nth-of-type(2) {
  opacity: 0;
  filter: alpha(opacity=0);
}

.navbar-toggler .icon-bar:nth-of-type(3) {
  transform: rotate(-45deg);
  transform-origin: 10% 90%;
}

.navbar-toggler.collapsed .icon-bar:nth-of-type(1) {
  transform: rotate(0);
}

.navbar-toggler.collapsed .icon-bar:nth-of-type(2) {
  opacity: 1;
  filter: alpha(opacity=100);
}

.navbar-toggler.collapsed .icon-bar:nth-of-type(3) {
  transform: rotate(0);
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
