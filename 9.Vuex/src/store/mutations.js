import MUTATION from "./alias/mutations-type";
import Vue from "vue";

export default {
  [MUTATION.INCREMENT](store) {
    store.counter++
  },
  [MUTATION.DECREMENT](store) {
    store.counter--
  },
  [MUTATION.INCREMENT_COUNT](store, payload) {
    store.counter += payload.count
  },
  [MUTATION.ADD_STUDENT](state, stu) {
    state.students.push(stu)
  },
  [MUTATION.UPDATE_INFO](state) {
    Vue.set(state.students[0], 'address', 'Los Angeles')
    // Vue.delete(state.students[0], 'age')
  }
}
