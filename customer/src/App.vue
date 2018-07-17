<template>
  <div id="app">
    <section class="main">
      <Nav/>
      <keep-alive><router-view v-if="$route.meta.keepAlive"/></keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/public/nav'
import Footer from '@/components/public/footer'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style lang="less">
  #app {
    height: 100%;
    .main {
      min-height: 100%;
      padding-bottom: 240px;
      box-sizing: border-box;
    }
  }
</style>
