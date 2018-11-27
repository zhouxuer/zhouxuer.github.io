<template>
  <div class="box">
    
    <div class="logo"></div>

    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      router
    >

      <el-menu-item
        v-for="(item,index) in config"
        :key="index"
        :index="item.url"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
      
      <el-submenu
        v-for="(item,index) in config"
        :key="index"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(item,index) in item.children" :key="index" :index="item.url">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- <el-menu-item index="/Demo/DemoOne">
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
      </el-menu-item> -->

    </el-menu>
  </div>
</template>

<script>
import config from '~/assets/config.js'
  export default {
    data () {
      return {
        config
      }
    }
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
