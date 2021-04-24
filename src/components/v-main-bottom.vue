<template>
  <div class="main__bottom">
    <v-item
      v-for="(i, id) in rightArray"
      :key="id"
      :weather="weekWeather[id]"
    ></v-item>
  </div>
</template>

<script>
import vItem from './v-item.vue'
export default {
  props: {
    weekWeather: Array,
  },
  components: { vItem },
  methods: {},
  computed: {
    rightArray() {
      return this.weekWeather.slice(0, 6)
    },
  },
}
</script>

<style></style>
