<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/campaigns">CAMPAIGNS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/editorials">EDITORIALS</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">MOTION</a>
          </li>
        </ul>
        <router-link
            to="/"
            class="navbar-brand mx-3 d-md-block d-none">
          <img src="@/assets/main-logo-black.jpg"
               alt="Main Logo"
               width="180">
        </router-link>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">PORTFOLIO</a>
<!--             3 fotki video 3 fotki video-->
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PRINTS</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <router-view/>
</template>

<style lang="scss">
</style>
