<template>
  <div class="box">
    <DemoNav/>

    <div class="demo-content">
      <div class="content-one">
        <h2 class="DemoFour">图片映射</h2>
        <img
          src="https://img.zcool.cn/community/01f5f15c4f1998a801213f26bc4533.jpg@2o.jpg"
          usemap="#ingMap"
        />
        <map name="ingMap">
          <!-- shape:点击形状，圆形 coords：点击范围:中心点XY轴，半径 href:链接-->
          <area shape="circle" coords="332,247,80" href="https://www.zcool.com.cn/" alt="">
          <!-- shape:点击形状，矩形 coords：点击范围:左上角，右下角 href:链接-->
          <area shape="rect" coords="726,201,917,337" href="https://www.zhihu.com/" alt="">
          <!-- shape:点击形状，多边形 coords：点击范围:角点 href:链接-->
          <area shape="poly" coords="388,600,783,600,586,507" href="https://www.baidu.com/" alt="">
        </map>
      </div>
    </div>
  </div>
</template>

<script>
import DemoNav from '~/components/DemoNav.vue'
export default {
  components: {
    DemoNav
  }
}
</script>

<style scoped lang='scss'>
.demo-content {
  .content-one {
    margin: 30px auto;
    text-align: center;
    width: 80%;
    border: 2px solid rgb(136, 62, 255);
  }
}
</style>