<template>
  <div class="box">
    <DemoNav/>

    <div class="content">
      <el-button class="new-btn" type="success" @click="dialogVisible = true">
        <i class="el-icon-circle-plus-outline"></i>
        新增数据</el-button>
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

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="open4"><i class="el-icon-edit"></i></el-button>
            <el-button
              size="mini"
              type="danger"
              @click="open2"><i class="el-icon-delete"></i></el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog
        title="新增数据"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <p class="new-data">
          <span>port</span>
          <input/>
        </p>
        <p class="new-data">
          <span>password</span>
          <input/>
        </p>
        <p class="new-data">
          <span>startDate</span>
          <input/>
        </p>
        <p class="new-data">
          <span>endDate</span>
          <input/>
        </p>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
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
      dataArr: [],
      dialogVisible: false
    }
  },
  mounted () {
    this.dataRequest()
  },
  methods: {
    // 数据展示方法
    dataRequest () {
      axios.get(config.httpUrl + 'exercise/fakes')
        .then((res) => {
          let dataRequestArr = res.data.list
          for (let item of dataRequestArr) {
            if (item.password) {
              item.password = item.password.replace(/./g, '*')
            }
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
    // 过期数据添加背景色方法
    tableRowClassName ({ row, rowIndex }) {
      let item = row.endDate
      if (item) {
        if (new Date(item).getTime() <= new Date().getTime()) { // 和当前时间作对比
          return 'warning-row'
        }
      }
    },
    // 新增数据
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    open3 () {
      const h = this.$createElement
      this.$msgbox({
        title: '新增数据',
        message: h('div', { style: 'text-align: center' }, [
          h('p', { style: 'width: 300px; height: 30px; margin: 10px auto' }, [
            h('span', null, 'port'),
            h('input', { style: 'width: 250px; height: 30px' }, '')
          ]),
          h('p', { style: 'width: 300px; height: 30px; margin: 10px auto' }, [
            h('span', null, 'port'),
            h('input', { style: 'width: 250px; height: 30px' }, '')
          ]),
          h('p', { style: 'width: 300px; height: 30px; margin: 10px auto' }, [
            h('span', null, 'port'),
            h('input', { style: 'width: 250px; height: 30px' }, '')
          ]),
          h('p', { style: 'width: 300px; height: 30px; margin: 10px auto' }, [
            h('span', null, 'port'),
            h('input', { style: 'width: 250px; height: 30px' }, '')
          ])
        ]),
        inputPlaceholder: '1111',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        })
      })
    },
    // 编辑数据
    open4 () {
      const h = this.$createElement
      this.$msgbox({
        title: '消息',
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        })
      })
    },
    // 删除数据方法
    open2 () {
      this.$confirm('此操作将永久删除此数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang='scss'>
.content {
  width: 80%;
  margin: 3% auto 5% auto;
  background-color: #fff;
  .new-btn {
    margin: 15px;
  }
  .warning-row {
    background: #ffe2ef;
  }
  .new-data {
    width: 300px;
    height: 30px;
    margin: 10px auto;
    span {
      padding-left: 5px;
    }
    input {
      width: 250px;
      height: 30px;
    }
  }
}
</style>
