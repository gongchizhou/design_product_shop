<template>
    <section :class="$style.header">
        <div :class="$style.content">
            <div :class="$style.logo"></div>
            <div :class="$style.nav">
                <ul>
                    <li>
                        <router-link to="/">
                            首页
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/shop">
                            商店
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about">
                            关于
                        </router-link>
                    </li>
                </ul>
                <Cart/>
                <User/>
            </div>
        </div>
        <div :class="$style.spacer"></div>
    </section>
</template>

<script>
import Cart from './cart.vue'
import User from './user.vue'

export default {
  name: 'Nav',
  components: {
    Cart,
    User
  }
}
</script>

<style lang="less" module>
    @import '../../assets/css/layout.less';
    .header {
        height: 200px;
        .content {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: inherit;
            .flex(column);
            align-items: center;
            z-index: 10;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0,0,0,.4);
            .logo {
                width: 150px;
                height: 150px;
                background: lightblue;
            }
            .nav {
                .flex();
                align-items: center;
                justify-content: space-between;
                margin: 15px 0;
                ul {
                    overflow: hidden;
                    li {
                        float: left;
                        padding: 0 20px;
                        a {
                            color: #567;
                            padding: 5px 0;
                            &:hover {
                                color: #333;
                            }
                        }
                    }
                }
            }
        }
        .spacer{
            height: inherit;
        }
    }
</style>
