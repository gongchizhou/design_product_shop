<template>
    <div>
        <div :class="$style.cart" class="pointer" id="cart" @click="handleClick">
            <i class="iconfont icon-cart"></i>
            <span>{{this.totalCount}}</span>
        </div>
        <Cart v-model="showCart"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Cart from '../Cart'

export default {
  name: 'CartIcon',
  components: {
    Cart
  },
  data () {
    return {
      showCart: false
    }
  },
  computed: {
    ...mapState('cart', ['totalCount'])
  },
  methods: {
    handleClick () {
      this.showCart = true
    }
  }
}
</script>

<style lang="less" module>
    .cart {
        margin: 0 20px;
    }
</style>
