<template>
  <div class="wrap">
    <div class="container">
      <v-header @getWeather="getWeather"></v-header>
      <v-main
        v-if="hasError"
        :weatherOption="city.weather"
        :cityName="city.name"
      ></v-main>
      <v-error v-if="error"></v-error>
    </div>
  </div>
</template>

<script>
import VHeader from './components/v-header.vue'
import vItem from './components/v-item.vue'
import VMain from './components/v-main'
import VError from './components/v-error.vue'
import { getWeatherFromApi } from './api'

export default {
  components: { vItem, VHeader, VMain, VError },
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
    error() {
      if (this.city) {
        return this.city.hasError === true
      }
      return false
    },
  },
}
</script>
