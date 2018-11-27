<template>
  <div class="box">
    <div class="demo-nav">
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        router
      >
      <el-menu-item index="/Demo/DemoOne">Demo01</el-menu-item>
      <el-menu-item index="/Demo/DemoTwo">Demo02</el-menu-item>
      <el-menu-item index="/Demo/DemoThree">Demo03</el-menu-item>
      <el-menu-item index="/Demo/DemoFour">Demo04</el-menu-item>
      <el-menu-item index="/Demo/DemoFive">Demo05</el-menu-item>
      <el-menu-item index="/Demo/DemoSix">Demo06</el-menu-item>
      </el-menu> 
    </div>

    <div class="demo-content">
      <h2 class="DemoThree">DemoThree</h2>
    </div>
  </div>
</template>

<script>
  export default {
    }
</script>

<style scoped lang='scss'>
.demo-nav {
  background-color: #fff;
  margin: 20px;
  .title-text {
    color: #111;
    padding: 20px;
  }
}
</style>