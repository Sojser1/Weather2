<template>
  <div class="wrap">
    <div class="container">
      <v-header @getWeather="getWeather"></v-header>
      <v-main
        v-if="hasError"
        :weatherOption="city.weather"
        :cityName="city.name"
      ></v-main>
    </div>
  </div>
</template>

<script>
import VHeader from './components/v-header.vue'
import vItem from './components/v-item.vue'
import VMain from './components/v-main'
import { getWeatherFromApi } from './api'

export default {
  components: { vItem, VHeader, VMain },
  data() {
    return {
      city: null,
    }
  },
  methods: {
    async getWeather(cityName) {
      this.city = await getWeatherFromApi(cityName)
    },
  },
  computed: {
    hasError() {
      if (this.city) {
        return this.city.hasError === false
      }
      return false
    },
  },
}
</script>
