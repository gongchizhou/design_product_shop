import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const indexOf = (arr, item) => {
  return arr.findIndex((i) => {
    return item.id === i.id
  })
}

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
      const index = indexOf(state.cartList, item)
      if (index > -1) {
        state.cartList[index].count += item.count
      } else {
        state.cartList.push(item)
      }
      if (item.id === state.currentIncart.id) {
        state.currentIncart.count += item.count
      } else {
        state.currentIncart = item
      }
    },
    updateCart (state, item) {
      const index = indexOf(state.cartList, item)
      state.totalCount = state.totalCount - state.cartList[index].count + item.count
      state.cartList[index].count = item.count
      if (item.id === state.currentIncart.id) {
        state.currentIncart.count = item.count
      }
    },
    removeCart (state, item) {
      state.totalCount -= item.count
      const index = indexOf(state.cartList, item)
      state.cartList.splice(index, 1)
      if (item.id === state.currentIncart.id) {
        state.currentIncart = {
          id: '',
          count: 0
        }
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
