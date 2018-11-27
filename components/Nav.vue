<template>
  <div class="box">
    
    <div class="logo"></div>

    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      router
    >

      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">Home</span>
      </el-menu-item>

      <el-menu-item index="/Demo/DemoOne">
        <i class="el-icon-document"></i>
        <span slot="title">Demo</span>
      </el-menu-item>

      <el-menu-item index="/Works">
        <i class="el-icon-picture"></i>
        <span slot="title">Works</span>
      </el-menu-item>

      <el-menu-item index="/AboutMe">
        <i class="el-icon-setting"></i>
        <span slot="title">AboutMe</span>
      </el-menu-item>

      <el-menu-item index="/ContactMe">
        <i class="el-icon-phone-outline"></i>
        <span slot="title">ContactMe</span>
      </el-menu-item>

      <el-menu-item index="/Other">
        <i class="el-icon-goods"></i>
        <span slot="title">Other</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">
.box {
  background-color: #ffe2ef;
  height: 100%;
  .logo{
    width: 70%;
    height: 15%;
    background-color: rgb(255, 255, 255);
    position: relative;
    top: 10%;
    left: 50%;
    transform: translate(-50%,0);
  }
  .el-menu-vertical-demo{
    width: 100%;
    position: absolute;
    top: 30%;
    background-color: #ffe2ef;
    .el-menu-item {
      margin: 8% 0 8% 10%;
    }
  }
}
</style>
