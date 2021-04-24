<template>
  <div class="main">
    <v-main-top
      :currentWeather="weatherOption.current"
      :cityName="cityName"
    ></v-main-top>
    <v-main-bottom :weekWeather="weatherOption.daily"></v-main-bottom>
  </div>
</template>

<script>
import vMainBottom from './v-main-bottom.vue'
import VMainTop from './v-main-top.vue'
export default {
  props: {
    weatherOption: Object,
    cityName: String,
  },
  components: { vMainBottom, VMainTop },
}
</script>

<style></style>
