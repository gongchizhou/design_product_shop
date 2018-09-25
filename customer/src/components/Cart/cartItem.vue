<template>
    <div :class="$style.wrap">
        <i class="iconfont icon-trash pointer" @click="handleClick"></i>
        <div :class="$style.thumb"><img :src="item.attachs[0]"/></div>
        <p :class="$style.title">{{item.title}}</p>
        <div :class="$style.quantity" class="relative">
            <div :class="[$style.minus, disabled]" @click="updateCount(false)">-</div>
            <input type="text" maxlength="3" v-model="count">
            <div :class="$style.plus" @click="updateCount(true)">+</div>
            <p v-if="showError" :class="$style.error">库存只剩{{item.total}}件</p>
        </div>
        <p>￥{{item.price}}</p>
    </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: Object
  },
  data () {
    return {
      count: this.item.count
    }
  },
  computed: {
    disabled () {
      return this.count === 1 ? this.$style.disabled : ''
    },
    showError () {
      return this.count > this.item.total
    }
  },
  watch: {
    showError (val, oldVal) {
      if (val !== oldVal) {
        this.$emit('error', {
          id: this.item.id,
          showError: val
        })
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('remove', this.item)
    },
    updateCount (add) {
      if (add) {
        this.count++
      } else {
        if (!this.disabled) this.count--
      }
      this.$emit('update', Object.assign({}, this.item, {
        count: this.count
      }))
    },
    cancel () {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="less" module>
    @import '../../assets/css/layout.less';
    .wrap {
        .flex();
        align-items: center;
        padding: 15px 0;
        border-bottom: 1px solid #e2e4e7;
        .thumb {
            img {
                width: 60px;
                margin: 0 10px;
                vertical-align: middle;
            }
        }
        .title {
            flex: 1;
            & + p {
                font-size: 14px;
            }
        }
        .quantity {
            width: 100px;
            display: inherit;
            .minus, .plus {
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                border: 1px solid #e2e4e7;
                cursor: pointer;
                &.disabled {
                    color: #a9aeb2;
                    background: #f6f6f6;
                    cursor: not-allowed;
                }
            }
            .minus {
                border-radius: 4px 0 0 4px;
                border-right-width: 0;
            }
            .plus {
                border-radius: 0 4px 4px 0;
                border-left-width: 0;
            }
            input {
                width: 30px;
                text-align: center;
                border: 1px solid #e2e4e7;
            }
        }
        .error {
            position: absolute;
            bottom: -26px;
            font-size: 14px;
            color: #fb7d2b;
        }
        &:first-of-type {
            border-top: 1px solid #e2e4e7;
        }
    }
</style>
