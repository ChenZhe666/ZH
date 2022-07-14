import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import menu from './modules/menu'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods:['控制台'],
    name:""
  },
  mutations: {
    add(state,label){
      state.goods.push(label)
      console.log(label);
      state.name = label
      console.log(state.goods);
      console.log(state.goods.__ob__.value);
    },
    del(state,index){
      if (index==0) {
        return
      }
      state.goods.splice(index,1)
    },
    
  },
  actions: {
  },
  modules: {
    user,
    menu,
  },
  plugins: [persistedState()],
})
