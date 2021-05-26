<template>
  <div>
    <h2>{{message}}</h2>
    <cpn></cpn>
  </div>
</template>

<script>
  import cpn from "./Cpn";

  export default {
    data() {
      return {
        message: 'Hello Vue'
      }
    },
    components: {
      cpn
    }
  }

</script>

<style scoped>

</style>
