<template>
    <div class="nav">
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
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
$window-width:80%;
  .nav {
    width: $window-width + 20%;
    background-color: #f8f1ff;
    padding: 20px;
  }
</style>
