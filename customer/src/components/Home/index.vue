<template>
  <div>
    <Swiper/>
  </div>
</template>

<script>
import Swiper from './swiper.vue'

export default {
  name: 'Home',
  components: {
    Swiper
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less" module>
</style>
