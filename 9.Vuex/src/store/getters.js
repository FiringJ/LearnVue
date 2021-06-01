import store from "./index";

export default {
  squareCounter: () => {
    return store.state.counter * store.state.counter
  },
  stuMore16: () => {
    return store.state.students.filter(s => s.age > 16)
  },
  stuMoreAge: () => {
    return (age) => {
      return store.state.students.filter(s => s.age > age)
    }
  }
}
