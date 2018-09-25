<template>
    <div>
        <i class="iconfont icon-user pointer" @click="handleClick"></i>
        <Modal v-model="loginModalShow" title="登录">
            <div slot="body">
                <div :class="$style.input">
                  <i class="iconfont icon-user"></i>
                  <input type="text" placeholder="用户名" v-model="username"/>
                </div>
                <div :class="$style.input">
                  <i class="iconfont icon-unlock"></i>
                  <input type="password" placeholder="密码" v-model="password"/>
                </div>
            </div>
            <Button slot="footer" :disabled="!username || !password" @click="login">登录</Button>
        </Modal>
    </div>
</template>

<script>
import Modal from '../common/modal.vue'
import Button from '../common/btn.vue'

export default {
  name: 'User',
  components: {
    Modal,
    Button
  },
  data () {
    return {
      loginModalShow: false,
      username: '',
      password: ''
    }
  },
  methods: {
    handleClick () {
      this.loginModalShow = true
    },
    login () {
      this.loginModalShow = false
    }
  }
}
</script>

<style lang="less" module>
    .input {
        display: flex;
        align-items: center;
        width: 100%;
        height: 42px;
        padding-left: 20px;
        font-size: 16px;
        background: none;
        border: 1px solid #ccc;
        border-radius: 100px;
        input {
          margin-left: 5px;
          width: calc(100% - 50px);
          height: inherit;
        }
        &:first-child {
           margin-bottom: 15px;
        }
    }
</style>
