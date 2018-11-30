<template>
  <div class="box">
    <DemoNav/>

      <el-table
        :data = "dataArr"
        :row-class-name = "tableRowClassName"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            comment 
            <span>{{ props.row.comment }}</span>
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
</template>

<script>
import config from '~/assets/js/config.js'
import DemoNav from '~/components/DemoNav.vue'
import axios from 'axios'
import moment from 'moment'

export default {
  components: {
    DemoNav
  },
  data () {
    return {
      dataArr: []
    }
  },
  created () {
    this.dataRequest()
  },
  methods: {
    dataRequest () {
      axios.get(config.httpUrl)
        .then((res) => {
          let dataRequestArr = res.data.list
          for (let item of dataRequestArr) {
            item.password = item.password.replace(/./g, '*')
            if (item.startDate || item.endDate) {
              item.startDate = moment(item.startDate).format('YYYY-MM-DD')
              item.endDate = moment(item.endDate).format('YYYY-MM-DD')
            }
          };
          this.dataArr = dataRequestArr
        })
        .catch((err) => {
          console.log(err)
        })
    },

    tableRowClassName ({ row, rowIndex }) {
      let item = row.endDate
      if (item !== null) {
        if (new Date(item).getTime() <= new Date().getTime()) { // 和当前时间作对比
          return 'warning-row'
        }
      }
    }
  }
}
</script>

<style lang='scss'>
.el-table {
  width: 80%;
  margin: 3% auto 5% auto;
  .warning-row {
    background: #ffe2ef;
  }
}
</style>
