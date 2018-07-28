<template>
    <section :class="$style.wrap">
        <div :class="$style.back">
            <div @click="back"><i class="iconfont icon-top"></i>返回</div>
        </div>
        <div :class="$style.main" class="clearfix">
            <div :class="$style.mainLeft">
                <div :class="$style.img"><img :src="attachs[activeIndex]"></div>
                <ul class="clearfix">
                    <li is="Thumbnail" v-for="(attach, index) in attachs" :key="index"
                    :attach="attach" :index="index" :activeIndex="activeIndex" @toggleThumb="toggleThumb">
                    </li>
                </ul>
            </div>
            <div :class="$style.mainRight">
                <div :class="$style.title">{{item.title}}</div>
                <div :class="$style.price">{{item.price}}</div>
                <div :class="$style.description">{{item.description}}</div>
                <Select :total="item.total" @changeCount="changeCount"/>
                <Buy :id="item.id" :total="item.total" :count="selectCount"/>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import Thumbnail from './thumbnail.vue'
import Select from './select.vue'
import Buy from './buy.vue'

export default {
  name: 'Product',
  components: {
    Thumbnail,
    Select,
    Buy
  },
  data () {
    return {
      item: {},
      attachs: [],
      selectCount: 1,
      activeIndex: 0
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    toggleThumb (index) {
      this.activeIndex = index
    },
    changeCount (count) {
      this.selectCount = count
    }
  },
  mounted () {
    const id = this.$route.params.id
    axios.get(`/api/products/${id}`)
      .then((res) => {
        this.item = res.data
        this.attachs = res.data.attachs
      })
  }
}
</script>

<style lang="less" module>
    @import '../../assets/css/layout.less';
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
            .flex();
            align-items: center;
            padding-bottom: 100px;
            color: #50555c;
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
                    margin-bottom: 10px;
                }
            }
            .main-right {
                padding-left: 15px;
                .title, .price {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 15px;
                }
                .description {
                    font-size: 14px;
                    word-wrap: break-word;
                    line-height: 1.5;
                }
            }
        }
    }
</style>
