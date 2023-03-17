import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      theme: 'dark'
    }
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme
    }
  },
  actions: {
    setTheme(context, theme) {
      context.commit('setTheme', theme)
    }
  },
  getters: {
    theme(state) {
      return state.theme
    }
  }
})

export default store