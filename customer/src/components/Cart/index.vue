<template>
    <div>
        <transition name="slide-left">
            <div :class="$style.wrap" v-show="value">
                <h4>购物车</h4>
                <div v-if="cartList.length > 0">
                    <CartItem v-for="item in cartList" :key="item.id" :item="item" @remove="remove" @update="update" @error="handleError"/>
                    <div :class="$style.total">总计:<span class="pull-right">￥{{totalPrice}}</span></div>
                </div>
                <p v-else>暂无内容</p>
                <Button :class="$style.btn" :disabled="cartList.length == 0 || disabled" @click="handlePay">立即结算</Button>
            </div>
        </transition>
        <transition name="fade">
            <div :class="$style.mask" v-show="value" @click="cancel"></div>
        </transition>
    </div>
</template>

<script>
import axios from 'axios'
import CartItem from './cartItem.vue'
import Button from '../common/btn.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('cart')

export default {
  name: 'Cart',
  components: {
    CartItem,
    Button
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      errorList: []
    }
  },
  computed: {
    cartList () {
      return this.cartList
    },
    totalPrice () {
      let res = 0
      this.cartList.forEach(item => {
        res += item.price * item.count
      })
      return res
    },
    disabled () {
      return this.errorList.some(item => {
        return item.showError === true
      })
    },
    ...mapState(['cartList'])
  },
  methods: {
    cancel () {
      this.$emit('input', false)
    },
    remove (item) {
      this.removeCart(item)
    },
    update (item) {
      this.updateCart(item)
    },
    handleError (item) {
      const index = this.errorList.findIndex(i => {
        return i.id === item.id
      })
      if (index > -1) {
        this.errorList.splice(index, 1, item)
      } else {
        this.errorList.push(item)
      }
    },
    handlePay () {
      axios.post(`/api/pay`)
        .then((res) => {
          console.log(res)
        })
    },
    ...mapMutations(['updateCart', 'removeCart'])
  }
}
</script>

<style lang="less" module>
    .wrap {
        position: fixed;
        top: 0;
        right: 0;
        width: 560px;
        padding: 0 30px;
        box-sizing: border-box;
        height: 100vh;
        background: #fff;
        z-index: 1;
        h4 {
            padding: 30px 0;
            font-weight: bold;
        }
        .total {
            padding: 15px 0;
            font-size: 18px;
        }
        .btn {
            width: auto;
            position: absolute;
            left: 30px;
            right: 30px;
            bottom: 30px;
        }
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.5);
    }
</style>
