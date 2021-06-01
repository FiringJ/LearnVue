import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from "./getters";
import actions from "./actions";
import moduleA from "./modules/moduleA";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 1, name: 'A', age: 18},
      {id: 2, name: 'B', age: 20},
      {id: 3, name: 'C', age: 30},
      {id: 4, name: 'D', age: 14}
    ]
  },
  mutations,
  getters,
  actions,
  modules: {
    a: moduleA
  }
})

export default store
