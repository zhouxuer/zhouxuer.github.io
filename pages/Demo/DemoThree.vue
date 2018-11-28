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
      <el-table
        :data="tableData2"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>

<style lang='scss'>
.demo-nav {
  background-color: #fff;
  margin: 20px;
  .title-text {
    color: #111;
    padding: 20px;
  }
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
