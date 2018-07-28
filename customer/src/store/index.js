import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const cart = {
  namespaced: true,
  state: {
    totalCount: 0,
    currentIncart: {
      id: '',
      count: 0
    },
    cartList: []
  },
  mutations: {
    addCart (state, item) {
      state.totalCount += item.count
      state.cartList.push(item)
      if (item.id === state.currentIncart.id) {
        state.currentIncart.count += item.count
      } else {
        state.currentIncart = item
      }
    }
  }
}

const user = {
  state: {
    loginModalShow: false
  }
}

export default new Vuex.Store({
  modules: {
    cart,
    user
  }
})
