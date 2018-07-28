<template>
    <div :class="$style.select">
        <p>数量</p>
        <div :class="$style.inputWrapper">
            <a @click="minus"><i class="iconfont icon-minus" :class="minusDisabled"></i></a>
            <input type="text" maxlength="3" v-model="count" @keypress="handleKeypress">
            <a @click="add"><i class="iconfont icon-plus" :class="plusDisabled"></i></a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Select',
  props: {
    total: Number
  },
  data () {
    return {
      count: 1
    }
  },
  computed: {
    minusDisabled () {
      return this.count === 1 ? this.$style.disabled : ''
    },
    plusDisabled () {
      return this.count + this.currentIncart.count > this.total ? this.$style.disabled : ''
    },
    ...mapState('cart', ['currentIncart'])
  },
  methods: {
    add () {
      if (this.count <= this.total) this.count++
      this.changeCount(this.count)
    },
    minus () {
      if (this.count > 1) this.count--
      this.changeCount(this.count)
    },
    changeCount (count) {
      this.$emit('changeCount', count)
    },
    handleKeypress (e) {
      e.returnValue = e.keyCode >= 48 && e.keyCode <= 57
    }
  }
}
</script>

<style lang="less" module>
    @import '../../assets/css/layout.less';
    .select {
        .flex();
        justify-content: space-between;
        margin-bottom: 15px;
        margin-top: 35px;
        padding-bottom: 10px;
        border-bottom: 1px solid #a9aeb2;
        line-height: 1.7;
        i {
            color: #a9aeb2;
            font-weight: bold;
            &.disabled {
                color: #e2e4e7;
                cursor: not-allowed;
            }
        }
        input {
            width: 60px;
            margin: 0 10px;
            text-align: center;
            font-size: 18px;
            vertical-align: middle;
        }
    }
</style>
