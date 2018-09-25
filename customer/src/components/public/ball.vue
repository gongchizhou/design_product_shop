<template>
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @afterEnter="afterEnter"
    >
        <div :class="$style.ball" v-if="value">{{count}}</div>
    </transition>
</template>

<script>
export default {
  name: 'Ball',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    count: Number
  },
  data () {
    return {
      show: this.value
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 1
    },
    enter (el, done) {
      const start = el.getBoundingClientRect()
      const target = document.getElementById('cart').getBoundingClientRect()
      const xOffset = target.x - start.x
      const yOffset = target.y - start.y
      Velocity(el, { translateX: `${xOffset}px` }, { duration: 600, queue: false, easing: 'linear' })
      Velocity(el, { translateY: `${yOffset - 10}px` }, { duration: 600, queue: false, easing: [ 0, 0, 0.58, 1 ], complete: done })
    },
    afterEnter (el) {
      el.style.opacity = 0
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="less" module>
    @color: #678;
    @range: 20px;
    .ball {
        position: absolute;
        left: 50%;
        top: -50%;
        margin-left: -@range/2;
        width: @range;
        height: @range;
        line-height: @range;
        text-align: center;
        color: @color;
        border: 2px @color solid;
        border-radius: 50%;
        z-index: 100;
    }
    .v-enter-active {
        transition: all 1s cubic-bezier(0.11, 0.92, 0.98, 0.75);
    }
</style>
