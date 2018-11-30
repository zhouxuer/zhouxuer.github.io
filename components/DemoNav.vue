<template>
    <div class="demo-nav">
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        router
      >
        <el-menu-item index="/Demo/DemoOne">DemoOne</el-menu-item>
        <el-menu-item index="/Demo/DemoTwo">DemoTwo</el-menu-item>
        <el-menu-item index="/Demo/DemoThree">DemoThree</el-menu-item>
        <el-menu-item index="/Demo/DemoFour">DemoFour</el-menu-item>
        <el-menu-item index="/Demo/DemoFive">DemoFive</el-menu-item>
        <el-menu-item index="/Demo/DemoSix">DemoSix</el-menu-item>
      </el-menu>  
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.demo-nav {
  background-color: #fff;
  margin: 20px;
}
</style>
