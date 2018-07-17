<template>
    <ul :class="$style.tab">
        <li :class="$style.active">全部</li>
        <li>饰品</li>
        <li>家居</li>
        <li>文具</li>
        <li>民艺</li>
    </ul>
</template>

<script>
export default {
  name: 'Tab'
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
