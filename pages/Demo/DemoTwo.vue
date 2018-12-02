<template>
  <div class="box">
    <DemoNav/>

    <div class="content">
      <el-button class="new-btn" type="success" @click="dialogFormVisible = true">
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
              @click="changeDataRequest(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
            <el-button
              size="mini"
              type="danger"
              @click="deleteDataRequest"><i class="el-icon-delete"></i></el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog :title="formName && formName.id ? '编辑' : '新增' " :visible.sync="dialogFormVisible">
        <el-form ref="formName" :model="formName" label-width="80px">
          <el-form-item label="port">
            <el-input v-model="formName.port"></el-input>
          </el-form-item>
          <el-form-item label="password">
            <el-input v-model="formName.password"></el-input>
          </el-form-item>
          <el-form-item label="comment">
            <el-input v-model="formName.comment"></el-input>
          </el-form-item>
          <el-form-item label="startDate">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="formName.startDate" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="endDate">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="formName.endDate" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="newDataRequest('formName')">确 定</el-button>
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
        region: '',
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
    // 数据展示方法
    dataRequest () {
      axios.get(config.httpUrl)
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
    newDataRequest (formName) {
      this.dialogFormVisible = false
      axios.post(config.httpUrl, {
        port: this.formName.port,
        region: this.formName.region,
        comment: this.formName.comment,
        startDate: this.formName.startDate,
        endDate: this.formName.endDate
      })
        .then((res) => {
          // console.log(res)
          this.$refs[formName].resetFields()
          this.dataRequest()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 编辑数据
    changeDataRequest (index, row) {
      this.formName = Object.assign({}, row)
      this.dialogFormVisible = true
      // let item = row.endDate
      console.log(row)
    },
    // 删除数据方法
    deleteDataRequest () {
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
  .line {
    text-align: center;
  }
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
