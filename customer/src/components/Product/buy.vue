<template>
    <div>
        <p v-if="showError" :class="$style.error">库存只剩{{total}}件</p>
        <a :class="[$style.btn, disabled]" @click="addToCart">
            加入购物车
        </a>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapMutations } = createNamespacedHelpers('cart')
export default {
  name: 'Buy',
  props: {
    id: String,
    total: Number,
    count: Number
  },
  data () {
    return {
    }
  },
  computed: {
    showError () {
      return this.count + this.currentIncart.count > this.total
    },
    disabled () {
      return this.showError ? this.$style.disabled : ''
    },
    ...mapState(['currentIncart'])
  },
  methods: {
    addToCart () {
      if (this.showError) return
      const { id, count } = this
      this.addCart({
        id,
        count
      })
    },
    ...mapMutations(['addCart'])
  }
}
</script>

<style lang="less" module>
    @bgStart: #737373;
    @bgEnd: #696969;
    .btn {
        margin: 0 auto;
        padding: 12px;
        display: inline-block;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
        border-radius: 999px;
        color: #fff;
        background-image: linear-gradient(to right, @bgStart, @bgEnd);
        text-shadow: 0 1px rgba(0,0,0,.2);
        cursor: pointer;
        &:hover {
            background-image: linear-gradient(to right, lighten(@bgStart,10%), lighten(@bgEnd,10%));
        }
        &.disabled {
            background: #f6f6f6;
            box-shadow: none;
            color: #ccc;
            cursor: not-allowed;
            text-shadow: none;
        }
    }
    .error {
        margin: 10px 0;
        font-size: 14px;
        color: #fb7d2b;
    }
</style>
