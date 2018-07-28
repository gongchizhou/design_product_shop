<template>
    <div :class="$style.cart">
        <i class="iconfont icon-cart"></i>
        <span>{{this.totalCount}}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapState('cart', ['totalCount'])
  }
}
</script>

<style lang="less" module>
    .cart {
        margin: 0 20px;
    }
</style>
