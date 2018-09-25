<template>
    <div>
        <transition name="scale">
            <div :class="$style.inner" v-show="visible">
                <div :class="$style.close" @click="cancel"></div>
                <div :class="$style.header">
                    <p>{{title}}</p>
                </div>
                <div :class="$style.body">
                    <slot name="body"/>
                </div>
                <div :class="$style.footer">
                    <slot name="footer"/>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div :class="$style.mask" v-show="visible" @click="cancel"></div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: String
  },
  data () {
    return {
      visible: this.value
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  },
  methods: {
    cancel () {
      this.visible = false
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="less" module>
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.5);
    }
    .inner {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 535px;
        padding: 40px;
        padding-top: 30px;
        box-sizing: border-box;
        transform: translate(-50%,-50%);
        background: #fff;
        z-index: 10;
        .close {
            position: absolute;
            top: 7px;
            right: 7px;
            width: 34px;
            height: 34px;
            transform: scale(.5);
            cursor: pointer;
            &:hover {
                &:before {
                    transform: rotate(-135deg);
                }
                &:after {
                    transform: rotate(-45deg);
                }
            }
            &:before {
                transform: rotate(-45deg);
            }
            &:after {
                transform: rotate(45deg);
            }
            &:after, &:before {
                position: absolute;
                top: 16px;
                left: -4px;
                content: "";
                width: 44px;
                height: 3px;
                background: #d7d8dd;
                transition: transform .5s ease-out;
            }
        }
        .header {
            p {
                font-size: 18px;
                color: #50555c;
                text-align: center;
            }
        }
        .body {
            margin: 30px 0;
        }
    }
</style>
