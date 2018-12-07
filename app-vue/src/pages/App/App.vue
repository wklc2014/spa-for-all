<template>
  <div id="app">
    <span>{{msg}}</span>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/secret">Secret</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'app',
  data() {
    return {
      msg: "hello vue !!"
    }
  },
}
</script>

<style >
  .test{
    color: #020202;
  }
</style>