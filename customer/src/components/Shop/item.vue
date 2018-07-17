<template>
    <div :class="$style.wrap">
        <router-link :to="`/product/${item.id}`">
            <div :class="$style.content">
                <div :class="$style.img">
                    <img :src="item.attachs[0]"/>
                </div>
                <div :class="$style.title">{{item.title}}</div>
                <div :class="$style.price">{{item.price}}</div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="less" module>
    .wrap {
        float: left;
        width: 25%;
        padding: 0 10px;
        margin-bottom: 50px;
        box-sizing: border-box;
        .content {
            width: 100%;
            text-align: center;
            .img {
                width: 100%;
                height: 0;
                padding-bottom: 100%;
                background: #eee;
            }
            .title {
                margin-top: 20px;
                color: #678;
                word-break: break-word;
            }
            .price {
                color: #696969;
                font-size: 18px;
                font-weight: 600;
                margin-top: 5px;
                word-break: break-word;
            }
        }
    }
</style>
