<template>
    <swiper :options="swiperOption">
    <swiper-slide>
        <div :class="[$style.item,$style.slide1]"></div>
    </swiper-slide>
    <swiper-slide>
        <div :class="[$style.item,$style.slide2]"></div>
    </swiper-slide>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
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

<style lang="less" module>
    .item{
        height: 460px;
        background-color: lightBlue;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .slide1{
        background-image: url('/static/images/slide-1.png');
    }
    .slide2{
        background-image: url('/static/images/slide-2.png');
    }
</style>
