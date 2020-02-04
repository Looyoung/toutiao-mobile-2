import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  // 放置数据的地方  初始化的时候直接将用户信息给我们的公共状态
  state: {
    user: auth.getUser()
  },
  // state数据修改必须通过 mutations
  // payload 载荷中携带 user
  mutations: {
    updateUser (state, payload) {
      state.user = payload.user
      auth.setUser(payload.user)
    },
    clearUser (state) {
      state.user = {}
      auth.delUser()
    }
  },
  actions: {
  },
  modules: {
  }
})
