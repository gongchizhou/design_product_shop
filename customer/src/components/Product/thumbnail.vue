<template>
    <li :class="[$style.thumbnail, isActive ? $style.active : '']">
        <img :src="attach"/>
    </li>
</template>

<script>
export default {
  name: 'Thumbnail',
  props: {
    index: Number,
    attach: String
  },
  computed: {
    isActive () {
      return this.index === 0
    }
  }
}
</script>

<style lang="less" module>
    .thumbnail {
        float: left;
        position: relative;
        width: 12%;
        height: 0;
        margin-right: 10px;
        opacity: .4;
        overflow: hidden;
        padding-bottom: 12%;
        cursor: pointer;
        &.active {
            opacity: 1;
            top: -2px;
            box-sizing: border-box;
            border: 2px solid #696969;
        }
        img {
            position: absolute;
            left: -50%;
            max-width: 200%;
        }
    }
</style>
