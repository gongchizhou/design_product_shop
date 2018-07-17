<template>
    <div :class="$style.cart">
        <i class="iconfont icon-cart"></i>
        <span>{{this.count}}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style lang="less" module>
    .cart {
        margin: 0 20px;
    }
</style>
