<template>
  <div class="box">
    <DemoNav/>

    <div class="content">
      <el-button class="new-btn" type="success" @click="newDataBtn">
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
              @click="changeData(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
            <el-button
              size="mini"
              type="danger"
              @click="deleteDataRequest(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog :title="formName && formName._id ? '编辑' : '新增' " :visible.sync="dialogFormVisible">
        <el-form ref="formName" :model="formName" label-width="80px">
          <el-form-item label="port">
            <el-input v-model="formName.port" placeholder="请输入port"></el-input>
          </el-form-item>
          <el-form-item label="password">
            <el-input v-model="formName.password" placeholder="请输入password" type="string"></el-input>
          </el-form-item>
          <el-form-item label="startDate">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择开始时间" v-model="formName.startDate"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="endDate">
            <el-col :span="12">
              <el-date-picker type="date" placeholder="选择结束时间" v-model="formName.endDate"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="comment">
            <el-input v-model="formName.comment" placeholder="请输入comment"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="formName && formName._id ? changeDataRequest('formName') : newDataRequest('formName') ">确 定</el-button>
        </div>
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
      dialogFormVisible: false,
      formName: {
        port: '',
        password: '',
        startDate: '',
        endDate: '',
        comment: ''
      },
      formLabelWidth: '120px'
    }
  },
  mounted () {
    this.dataRequest()
  },
  methods: {
    // 数据展示
    dataRequest () {
      axios.get(config.httpUrl)
        .then(res => {
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
        .catch(err => {
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
    // 新增数据按钮事件
    newDataBtn () {
      this.formName = {}
      this.dialogFormVisible = true
    },
    // 新增数据网络请求
    newDataRequest (formName) {
      this.dialogFormVisible = false
      axios.post(config.httpUrl, {
        port: this.formName.port,
        password: this.formName.password,
        comment: this.formName.comment,
        startDate: this.formName.startDate,
        endDate: this.formName.endDate
      })
        .then(res => {
          this.dataRequest()
          this.$message({
            type: 'success',
            message: '添加成功！'
          })
        })
        .catch(err => {
          console.log(err)
          this.$message({
            type: 'info',
            message: '添加失败！'
          })
        })
    },
    // 编辑数据按钮事件
    changeData (index, row) {
      this.formName = Object.assign({}, row)
      this.dialogFormVisible = true
    },
    // 编辑数据网络请求
    changeDataRequest (formName) {
      this.dialogFormVisible = false
      axios.put(config.httpUrl + '/' + this.formName._id, {
        port: this.formName.port,
        password: this.formName.password,
        comment: this.formName.comment,
        startDate: this.formName.startDate,
        endDate: this.formName.endDate
      })
        .then(res => {
          this.dataRequest()
          this.$message({
            type: 'success',
            message: '修改成功！'
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 删除数据方法
    deleteDataRequest (index, row) {
      let item = Object.assign({}, row)
      this.$confirm('此操作将永久删除此数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.delete(config.httpUrl + '/' + item._id)
          .then(res => {
            this.dataRequest()
            this.$message({
              type: 'success',
              message: '删除成功！'
            })
          })
          .catch(err => {
            console.log(err)
            this.$message({
              type: 'info',
              message: '删除失败！'
            })
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除！'
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
  .el-dialog {
    width: 30%;
  }
}
</style>
