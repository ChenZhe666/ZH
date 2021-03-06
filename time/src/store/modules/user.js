
import UserApi from '@/api/user'
import { setItem, getItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    token: getItem('token') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      console.log(token);
      setItem('token', token)
    }
  },
  actions: {
    async login({ commit }, loginForm) {
      const token = await UserApi.login(loginForm)
      console.log(token);
      commit('setToken', token)
      return token
    }
  }
}