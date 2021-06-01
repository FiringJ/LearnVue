<template>
  <div id="app">
    <h2>APP-state</h2>
    <p>{{counter}}</p>
    <h2>APP-mutations</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="additionCount(5)">+5</button>
    <button @click="additionCount(10)">+10</button>
    <button @click="addStu">添加学生</button>
    <h2>APP-vuex响应式</h2>
    <button @click="updateInfo">修改数据</button>
    <h2>APP-getters</h2>
    <p>{{$store.getters.squareCounter}}</p>
    <p>{{$store.getters.stuMore16}}</p>
    <p>{{$store.getters.stuMoreAge(18)}}</p>
    <h2>APP-modules</h2>
    <p>{{$store.state.a.name}}</p>
    <button @click="updateName">修改名字</button>
    <p>{{$store.getters.fullname}}</p>
    <p>{{$store.getters.fullname2}}</p>
    <p>{{$store.getters.fullname3}}</p>
    <button @click="asyncUpdateName">异步修改名字</button>
    <h2>HelloVuex</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import MUTATION from './store/alias/mutations-type'
  import ACTION from './store/alias/actions-type'

  export default {
    components: {
      HelloVuex
    },
    computed: {
      counter: function () {
        return this.$store.state.counter
      }
    },
    methods: {
      addition() {
        this.$store.commit(MUTATION.INCREMENT)
      },
      subtraction() {
        this.$store.commit(MUTATION.DECREMENT)
      },
      additionCount(count) {
        // this.$store.commit('incrementCount', count)
        this.$store.commit({
          type: MUTATION.INCREMENT_COUNT,
          count
        })
      },
      addStu() {
        const student = {id: 5, name: 'E', age: 36}
        this.$store.commit(MUTATION.ADD_STUDENT, student)
      },
      updateInfo() {
        // this.$store.commit(MUTATION.UPDATE_INFO)
        // this.$store.dispatch(ACTION.UPDATE_INFO, {
        //   message: '携带信息',
        //   success: () => {
        //     console.log('dispatch -- commit');
        //   }
        // })
        this.$store.dispatch(ACTION.UPDATE_INFO, '传入信息').then(data => {
          console.log(data)
        })
      },
      updateName() {
        this.$store.commit(MUTATION.UPDATE_NAME, 'H.A.M')
      },
      asyncUpdateName() {
        console.log('click');
        this.$store.dispatch(ACTION.UPDATE_NAME, '传入信息')
      }
    }
  }
</script>

<style>

</style>
