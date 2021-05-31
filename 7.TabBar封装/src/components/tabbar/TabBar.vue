<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  @import "../../assets/css/base.css";
  .tabbar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  }
</style>
