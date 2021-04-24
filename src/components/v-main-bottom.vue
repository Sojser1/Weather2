<template>
  <div class="main__bottom">
    <v-item v-for="(i, id) in 6" :key="id"></v-item>
  </div>
</template>

<script>
import vItem from './v-item.vue'
export default {
  props: {
    weekWeather: Object,
  },
  components: { vItem },
  computed() {
    for (let i = 0; i < this.weekWeather.length; i++) {}
  },
}
</script>

<style></style>
