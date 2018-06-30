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
@import url("//at.alicdn.com/t/font_722547_zqavdtnqfb7.css");

.lt-branch{
  border-left:6px solid rgba(255, 0, 0, 0);
  font-size: 14px;
  color: #ccc;
  margin: 6px 0;
  padding: 3px;
}
.lt-branch_level_1{
  font-size: 50px;
  font-weight: bold;
  padding-left: 45px;
}
.lt-branch-icon_level_1{
  font-size: 50px;
  font-weight: bold;
  color:red;
}
.lt-branch_level_3{
  color: green;
}
.lt-branch_level_2{
  color: blueviolet;
}
.lt-branch_level_0{
  font-size: 12px;
  color: red;
}
.lt-branch_level_2_active{
  text-decoration:underline;
}
.lt-branch-icon_level_2_active{
  color:rgb(248, 6, 175);
}
.lt-branch_level_1_active{
  border-left:6px solid rgb(19, 99, 43);
}
.lt-branch_active{
  background:red;
  color:rgb(238, 241, 53);
}
.lt-branch-icon_active{
  color:rgb(247, 247, 248);
}
.lt-branch_active_parent{
  background:#ccc;
}
.lt-branch:hover{
  background:rgb(19, 98, 112);
  color:white;
}
.lt-branch-icon{
  /* 控制图标颜色 */
  color:rgb(211, 99, 196);
}
</style>
