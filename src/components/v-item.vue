<template>
  <div class="main__item">
    <div class="main__item-info">
      <h3>{{ getDayOfTheWeek }}</h3>
      <h4>{{ getDayOfTheMonth }} {{ getMonth }}</h4>
      <p class="main__item-temp">{{ getDayWeatherTemp }}°C</p>
      <p class="main__item-feels">
        Ощущается как {{ getFeelsDayWeatherTemp }}°
      </p>
      <p>Влажность {{ weather.humidity }}%</p>
    </div>
    <div class="main__item-image" :class="iconWeather"></div>
  </div>
</template>

<script>
export default {
  props: {
    weather: Object,
  },
  computed: {
    getDayOfTheMonth() {
      const num = this.getDate.getDate()
      return num
    },
    getDate() {
      const date = new Date(this.weather.dt * 1000)
      return date
    },
    dateNow() {
      return new Date()
    },

    getDayOfTheWeek() {
      const now = this.dateNow
      const nowDay = now.getDay()
      const day = this.getDate.getDay()

      const week = {
        0: 'вс',
        1: 'пн',
        2: 'вт',
        3: 'ср',
        4: 'чт',
        5: 'пт',
        6: 'сб',
      }

      if (nowDay % 7 === day) {
        return 'Сегодня'
      }
      if ((nowDay + 1) % 7 === day) {
        return 'Завтра'
      }

      return week[day]
    },

    getMonth() {
      const months = {
        0: 'янв.',
        1: 'фев.',
        2: 'мар.',
        3: 'апр.',
        4: 'мая',
        5: 'июн.',
        6: 'июл.',
        7: 'авг.',
        8: 'сен.',
        9: 'окт.',
        10: 'ноя.',
        11: 'дек.',
      }
      const month = this.getDate.getMonth()
      return months[month]
    },

    getDayWeatherTemp() {
      return Math.round(this.weather.temp.day)
    },
    getFeelsDayWeatherTemp() {
      return Math.round(this.weather['feels_like'].day)
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
      return this.weather.weather[0].main
    },
  },
}
</script>

<style></style>
