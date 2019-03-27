<template>
  <div id="app">
    <span class="red">{{msg}}</span>
  </div>
</template>

<script>
import Vue from 'vue'
  export default {
    name: 'home',
    data() {
      return {
        msg: "主页"
      }
    },
  }
</script>

<style >
  .red {
    color: #f00;
  }
</style>