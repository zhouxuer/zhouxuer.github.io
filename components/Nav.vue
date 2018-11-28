<template>
  <div class="box">
    
    <div class="logo"></div>

    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      router
    >

      <template  v-for="(item,index) in config">

        <el-menu-item v-if="!item.children" :key="index" :index="item.url">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item> 

        <el-submenu v-else :key="index" :index="item.title">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item v-for="(item,index) in item.children" :key="index" :index="item.url">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </el-submenu>

      </template>

    </el-menu>
  </div>
</template>

<script>
import config from '~/assets/js/config.js'
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
    .el-submenu {
      margin: 8% 0 8% 10%;
    }
  }
}
</style>
