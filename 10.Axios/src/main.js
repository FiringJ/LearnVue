import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

/*axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res);
})

axios({
  url: 'http://123.207.32.32:8000/home/data',
  // 专门针对get请求的参数拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
})*/

/*axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: '/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))*/

/*const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

instance1({
  url: '/home/data'
}).then(res => {
  console.log(res);
})*/

// 5.网络请求封装
import {request} from "./network/request";

/*request({
  url: '/home/data'
}, res => {
  console.log(res);
}, err => {
  console.log(err);
})*/

/*request({
  baseConfig: {
    url: '/home/data'
  },
  success: res => {
    console.log(res);
  },
  failure: err => {
    console.log(err);
  }
})*/

request({
  url: '/home/data'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
