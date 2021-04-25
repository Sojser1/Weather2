<template>
  <div class="header">
    <div class="header__logo" @click="removeStorage">
      <h1>weather</h1>
    </div>
    <div class="header__search">
      <input
        v-model="cityName"
        placeholder="Город"
        type="text"
        class="header__input"
        @keypress.enter="getWeather"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: '',
    }
  },
  methods: {
    inputIconClick() {
      this.hasActive === true ? this.removeInput() : this.focusInput()
    },
    removeInput() {
      this.cityName = ''
    },
    focusInput() {
      const input = document.querySelector('.header__input')
      input.focus()
    },
    getWeather() {
      const cityName = this.cityName.trim()
      this.$emit('getWeather', cityName)
      this.cityName = ''
    },
    removeStorage() {
      sessionStorage.removeItem('cityName')
      this.$emit('removeCity')
    },
  },
  computed: {
    hasActive() {
      return this.cityName.length > 0
    },
    // inputIcon() {
    //   return this.hasActive ? 'trash' : 'search'
    // },
  },
}
</script>

<style></style>
