let {name, age, height} = require('./js/script.js')
console.log(`${name}/n${age}/n${height}`)

require('./css/common.css')

require('./css/font.less')
document.writeln('<h2>你好啊</h2>')

import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
  el: "#app",
  template: '<App/>',
  components: {
    App
  }
})
