<template>
  <div class="container pt-5">
    <!--    mx-auto-->
    <div class="row">
      <div
          v-for="video in videos"
          class="mb-5 mx-1012 col-12 mx-auto"
      >
        <div class="video-container">
          <iframe :src="video.link"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MotionView",
}
</script>

<script setup>
import {ref} from 'vue'

const videos = ref([
  {link: 'https://player.vimeo.com/video/814566391?h=17cde8c8bc'},
  {link: 'https://player.vimeo.com/video/812779624?h=d45645d64b'},
  {link: 'https://player.vimeo.com/video/813969112?h=9d0d3139ed'},
  {link: 'https://player.vimeo.com/video/717301753?h=e27e1ef72f'},
  {link: 'https://player.vimeo.com/video/476234102?h=d35caf2552'},
  {link: 'https://player.vimeo.com/video/717257903?h=995f487cf5'},
  {link: 'https://player.vimeo.com/video/459717844?h=382dcded64'},
  {link: 'https://player.vimeo.com/video/459718187?h=ab65045a5c'},
  {link: 'https://player.vimeo.com/video/447224007?h=9650e03106'},
  {link: 'https://player.vimeo.com/video/444217069?h=c876ecfd05'},
  {link: 'https://player.vimeo.com/video/444217180?h=0e59e0ddbd'},
  {link: 'https://player.vimeo.com/video/492758057?h=d539120c27'},
  {link: 'https://player.vimeo.com/video/444216333?h=f2e1006324'},
  {link: 'https://player.vimeo.com/video/628077451?h=5a2fd48ad9'},
  {link: 'https://player.vimeo.com/video/717297205?h=349c1805d0'},
])
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.mx-1012 {
  max-width: 1012px;
}
</style>