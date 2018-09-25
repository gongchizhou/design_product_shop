<template>
  <div :class="$style.content">
    <h2 :class="$style.title">STORE</h2>
    <Tab @click="handleTabClick"/>
    <div class="clear">
      <Item v-for="item in items" :key="item.id" :item="item"></Item>
    </div>
  </div>
</template>

<script>
import Tab from './tab.vue'
import Item from './item.vue'
import axios from 'axios'

export default {
  name: 'Shop',
  components: {
    Tab,
    Item
  },
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    handleTabClick (type) {
      this.getProducts(type)
    },
    getProducts (type = 'all') {
      axios.get(`/api/products?type=${type}`)
        .then((res) => {
          this.items = res.data.rows
        })
    }
  }
}
</script>

<style lang="less" module>
  .content {
    width: 60%;
    margin: 0 auto;
    overflow: auto;
    text-align: center;
    .title {
      position: relative;
      display: inline-block;
      margin-top: 60px;
      margin-bottom: 30px;
      color: #999;
      font-size: 20px;
      font-family: times, georgia;
      &:before, &:after {
        content: " ";
        display: inline-block;
        height: 2px;
        margin: 0 10px;
        position: absolute;
        top: 50%;
        width: 80px;
        background-color: #040404;
      }
      &:before {
        right: 100%;
      }
    }
  }
</style>
