// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    tabpage: '/',
    loginstate: 0,
    username: 'admin'
  },
  mutations: {
    Count (state, platform) {
      state.count = platform
    },
    Tabpage (state, platform) {
      state.tabpage = platform
    },
    Loginstate (state, platform) {
      state.loginstate = platform
    },
    Username (state, platform) {
      state.username = platform
    }
  },
  actions: {
    setCount ({commit}, platform) {
      commit('Count', platform)
    },
    setTabpage ({commit}, platform) {
      commit('Tabpage', platform)
    },
    setLoginstate ({commit}, platform) {
      commit('Loginstate', platform)
    },
    setUsername ({commit}, platform) {
      commit('Username', platform)
    }
  },
  getters: {
    getCount: (state) => state.count,
    getTabpage: (state) => state.tabpage,
    getLoginstate: (state) => state.loginstate,
    getUsername: (state) => state.username
  }
})
