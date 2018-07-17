<template>
    <swiper :options="swiperOption">
    <swiper-slide>
        <div :class="$style.item"></div>
    </swiper-slide>
    <swiper-slide>
        <div :class="[$style.item,$style.red]"></div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        speed: 600,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style>
    .swiper-pagination-bullet,.swiper-pagination-bullet-active{
        background: #fff;
    }
</style>
<style lang="less" module>
    .item{
        height: 400px;
        background: grey;
    }
    .red{
        background: lightBlue;
    }
</style>
