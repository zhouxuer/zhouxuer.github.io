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
        :data="dataArr"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="comment">
                <span>{{ props.row.comment }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>

        <el-table-column
          sortable
          label="port"
          prop="port">
        </el-table-column>

        <el-table-column
          label="password"
          prop="password">
        </el-table-column>

        <el-table-column
          label="startDate"
          prop="startDate">
        </el-table-column>
        <el-table-column
          label="endDate"
          prop="endDate">
        </el-table-column>

      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
     data() {
      return {
        dataArr: [],
      }
    },
    created () {
      this.dataRequest()
    },
    methods: {
      dataRequest () {
        axios.get('https://gist.githubusercontent.com/JoshuaYang/37ed2ca102efe190315c94b695e5833e/raw/136ea13c39867b40757625ddd99714f66ff89a13/fakeData.json')
          .then((res)=>{
            let dataRequestArr = res.data.list
            for (let i in dataRequestArr) {
              let item = dataRequestArr[i]
              let password = item.password.replace(/./g,"*")
              item['password'] = password

              if (item.startDate != null) {
                let startDate = item.startDate.toString()
                    startDate = startDate.substring(0,10)
                    item['startDate'] = startDate
                // console.log(startDate)
              }
              if (item.endDate != null) {
                let endDate = item.endDate.toString()
                    endDate = endDate.substring(0,10)
                    item['endDate'] = endDate
                // console.log(endDate)
              } 
            this.dataArr = dataRequestArr
            }
          })
        .catch((err)=>{
          console.log(err);
        });
      },
      tableRowClassName(item) {

        var item = item.row.endDate

        if (item != null) {
          var oldTime = new Date(item).getTime()  //装date
          // console.log(oldTime)
          //    进行比较

          if ( oldTime <= new Date().getTime()) {
            console.log('111')
            return 'warning-row';
          }
        }
      }
    }
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
.demo-content{
  width: 80%;
  margin: 3% auto;
}
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-table .warning-row {
    background: rgba(255, 81, 0, 0.418);
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>