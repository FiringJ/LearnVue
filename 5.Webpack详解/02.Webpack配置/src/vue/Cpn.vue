<template>
  <div>
    <h2 class="text">{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '我是cpn组件'
      }
    }
  }
</script>

<style scoped>
 .text {
   color: green;
 }
</style>
