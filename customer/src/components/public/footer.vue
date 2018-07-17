<template>
    <section :class="$style.footer">
        <div :class="$style.content">
            <div class="pull-left" :class="$style.left">
                <dl>
                    <dt>关于</dt>
                    <dd>Smuk</dd>
                    <dd>F&Q</dd>
                </dl>
                <dl>
                    <dt>关注</dt>
                    <dd>新浪微薄</dd>
                    <dd>Instagram</dd>
                </dl>
            </div>
            <div class="pull-right" :class="$style.right" @click="gotoTop"><i class="iconfont icon-top"></i></div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    gotoTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      const duration = 800
      const step = top / (duration / 10);
      (function scroll () {
        if (top > 0) {
          top -= step
          window.scrollTo(0, top)
          setTimeout(scroll, 10)
        }
      })()
    }
  }
}
</script>

<style lang="less" module>
    @import '../../assets/css/layout.less';
    @light_grey: #a0a0a0;
    .footer {
        width: 100%;
        height: 240px;
        margin-top: -240px;
        background: #2a2a2a;
        .content{
            width: 60%;
            padding-top: 30px;
            margin: 0 auto;
            .left {
                .flex();
                dl {
                    dt {
                        color: @light_grey;
                        border-bottom: 1px solid @light_grey;
                        line-height: 40px;
                        margin-right: 80px;
                        margin-bottom: 10px;
                    }
                    dd {
                        line-height: 32px;
                        color: #d2d2d2;
                        cursor: pointer;
                    }
                }
            }
            .right{
                color: @light_grey;
                padding-top: 20px;
                i {
                    display: inline-block;
                    font-size: 16px;
                    transform: scaleY(1.2);
                    cursor: pointer;
                }
            }
        }
    }
</style>
