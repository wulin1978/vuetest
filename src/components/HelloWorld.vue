<template>
  <div class="hello">
    <div class="listtree"></div>
    <router-link to="/rert">987</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.lt-branch{
  font-size: 14px;
  color: #ccc
}
.lt-branchlevel_1{
  font-size: 50px;
  font-weight: bold;
}
.lt-branchlevel_3{
  color: green;
}
.lt-branchlevel_2{
  color: blueviolet;
}
.lt-branchlevel_0{
  font-size: 12px;
  color: red;
}
</style>
