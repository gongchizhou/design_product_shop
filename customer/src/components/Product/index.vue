<template>
    <section :class="$style.wrap">
        <div :class="$style.back">
            <div @click="back"><i class="iconfont icon-top"></i>返回</div>
        </div>
        <div :class="$style.main" class="clearfix">
            <div :class="$style.mainLeft">
                <div :class="$style.img"><img :src="attachs[0]"></div>
                <ul class="clearfix">
                    <li is="Thumbnail" v-for="(attach, index) in attachs" :key="index" :attach="attach" :index="index"></li>
                </ul>
            </div>
            <div :class="$style.mainRight">
                <div :class="$style.title">{{item.title}}</div>
                <div :class="$style.price">{{item.price}}</div>
                <div :class="$style.description">{{item.description}}</div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import Thumbnail from './thumbnail.vue'

export default {
  name: 'Product',
  components: {
    Thumbnail
  },
  data () {
    return {
      item: {},
      attachs: []
    }
  },
  methods: {
    back () {
      window.history.back()
    }
  },
  mounted () {
    const id = this.$route.params.id
    axios.get(`/api/products?id=${id}`)
      .then((res) => {
        this.item = res.data
        this.attachs = res.data.attachs
      })
  }
}
</script>

<style lang="less" module>
    .wrap {
        width: 60%;
        margin: 0 auto;
        .back {
            margin-top: 60px;
            margin-bottom: 30px;
            div {
                display: inline-block;
                cursor: pointer;
                font-size: 14px;
                i {
                    display: inline-block;
                    margin-right: 5px;
                    transform: rotate(-90deg);
                    font-size: 14px;
                }
            }
        }
        .main {
            padding-bottom: 100px;
            .main-left, .main-right {
                width: 50%;
                float: left;
                box-sizing: border-box;
            }
            .main-left {
                padding-right: 15px;
                .img {
                    width: 400px;
                    height: 400px;
                }
            }
            .main-right {
                padding-left: 15px;
            }
        }
    }
</style>
