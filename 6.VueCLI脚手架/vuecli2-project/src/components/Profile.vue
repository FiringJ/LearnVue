<template>
  <div>
    <h2>我是Profile</h2>
    <div>{{this.$route.query.name}}</div>
    <div>{{this.$route.query.age}}</div>
    <div>{{this.$route.query.height}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    created() {
      console.log('profile created');
    },
    destroyed() {
      console.log('profile destroyed');
    }
  }
</script>

<style scoped>

</style>
