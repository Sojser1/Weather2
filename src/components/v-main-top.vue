<template>
  <div class="main__top">
    <div class="main__header">
      <h2>{{ cityName }}</h2>
      <span>Сейчас: {{ dateNow }}</span>
    </div>
    <div class="main__body">
      <div class="main__temp">{{ temp }}°</div>
      <div class="main__info">
        <div class="main__description">{{ description }}</div>
        <div class="main__feels">Ощущается как {{ feelsTemp }}°</div>
      </div>
      <div class="main__weather" :class="iconWeather"></div>
    </div>
    <div class="main__footer">
      <span class="wind">{{ windSpeed }} м/с</span>
      <span class="humidity"> {{ currentWeather.humidity }}%</span>
      <span class="pressure">{{ currentWeather.pressure }} мм рт.ст.</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentWeather: Object,
    cityName: String,
  },
  computed: {
    dateNow() {
      const now = new Date()
      const hours = now.getHours()
      const min = now.getMinutes()
      return `${hours}ч. ${min}мин.`
    },
    windSpeed() {
      return Math.round(this.currentWeather['wind_speed'])
    },
    temp() {
      return Math.round(this.currentWeather.temp)
    },
    feelsTemp() {
      return Math.round(this.currentWeather['feels_like'])
    },
    description() {
      return this.currentWeather.weather[0].description
    },
    iconWeather() {
      const weather = {
        Clouds: 'cloudWeather',
        Rain: 'raniWeather',
        Snow: 'snowWeather',
        Clear: 'sunWeather',
      }
      return weather[this.icon]
    },
    icon() {
      return this.currentWeather.weather[0].main
    },
  },
}
</script>

<style></style>
