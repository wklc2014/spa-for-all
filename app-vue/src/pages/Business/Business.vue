<template>
  <div id="app">
    <span class="color">{{msg}}</span>
  </div>
</template>

<script>
import Vue from 'vue'
  export default {
    name: 'secret',
    data() {
      return {
        msg: "查看此页需要权限"
      }
    },
  }
</script>

<style >
  .color {
    color: #0f0;
  }
</style>