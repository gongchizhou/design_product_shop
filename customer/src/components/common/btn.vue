<template>
    <a :class="[$style.btn, disabledClass]" @click="handleClick">
        <slot/>
    </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    disabledClass () {
      return this.disabled ? this.$style.disabled : ''
    }
  },
  methods: {
    handleClick () {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
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
</style>
