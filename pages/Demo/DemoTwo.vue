<template>
  <div class="box">
    <DemoNav/>

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
import config from '~/assets/js/config.js'
import DemoNav from '~/components/DemoNav.vue'
import axios from 'axios'
  export default {
    components: {
    DemoNav
    },
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
        axios.get(config.httpUrl)
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

      tableRowClassName(row) {
        let item = row.row.endDate
        if (item != null) {
          let Time = new Date(item).getTime()  //转date
          // console.log(oldTime)

          if ( Time <= new Date().getTime()) {  //和当前时间作对比
            // console.log(Time)
            return 'warning-row'
          } else {
            return ''
          }
        }
        // console.log(item)
      }
    }
  }
</script>

<style lang='scss'>
.demo-content{
  width: 80%;
  margin: 3% auto 5% auto;
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
    background: #fde9d8;
  }
</style>
