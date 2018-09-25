<template>
    <ul :class="$style.tab">
        <li :class="activeIndex === index ? $style.active : ''" v-for="(item, index) in list" :key="item.type" @click="handleClick(index)">{{item.name}}</li>
    </ul>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      activeIndex: 0,
      list: [
        {
          name: '全部',
          type: 'all'
        },
        {
          name: '饰品',
          type: 'decoration'
        },
        {
          name: '家居',
          type: 'furniture'
        },
        {
          name: '文具',
          type: 'stationery'
        },
        {
          name: '民艺',
          type: 'folk'
        }
      ]
    }
  },
  methods: {
    handleClick (index) {
      this.activeIndex = index
      this.$emit('click', this.list[index].type)
    }
  }
}
</script>

<style lang="less" module>
    @import '../../assets/css/layout.less';
    .tab {
        margin: 0 10px;
        margin-bottom: 30px;
        .flex();
        justify-content: center;
        border-bottom: 1px solid rgba(85,85,85,.2);
        li {
            float: left;
            position: relative;
            padding: 15px 10px;
            color: #678;
            font-size: 14px;
            cursor: pointer;
            &.active {
                color: #696969;
                &:after {
                    content: '';
                    bottom: -1px;
                    height: 2px;
                    left: 0;
                    position: absolute;
                    width: 100%;
                    background: #696969;
                }
            }
        }
    }
</style>
