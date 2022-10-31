<template>
  <div class="app-container">
    <el-card>
      <div class="btnbox">
        <div>
          <el-input
            v-model="searchInfo.account"
            class="search"
            placeholder="请输入账号"
            prefix-icon="el-icon-search"
            style="width: 240px"
          />
          <el-select v-model="searchInfo.auth" placeholder="请选择权限" style="width: 160px">
            <el-option
              v-for="item in authOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="searchInfo.userStatus" placeholder="请选择状态" style="width: 120px">
            <el-option
              v-for="item in userStatusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <div>
          <el-button type="primary" icon="el-icon-plus" @click="adminup()">新增</el-button>
        </div>
      </div>

      <el-table
        v-loading="tableLoading"
        :data="tableList"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
        :header-cell-style="{ color: '#333', background: '#eef1f6', height: '52px' }"
      >
        <el-table-column align="center" style="ba" label="序号" width="100px">
          <template slot-scope="scope">{{ scope.$index + 1 + (pageNum - 1) * row }}</template>
        </el-table-column>
        <el-table-column label="员工账户" align="center" min-width="140px">
          <template slot-scope="scope">
            <div style="font-weight: bold">{{ scope.row.account || '--' }}</div>
          </template>
        </el-table-column>
        <el-table-column label="员工姓名" align="center" min-width="120px">
          <template slot-scope="scope">
            <div style="font-weight: bold">{{ scope.row.name || '--' }}</div>
          </template>
        </el-table-column>
        <el-table-column label="权限" align="center" min-width="120px">
          <template slot-scope="scope">
            <el-tag>{{ scope.row.roleName || '--' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="备注" align="center" min-width="220px">
          <template slot-scope="scope">
            <div>{{ scope.row.remark || '--' }}</div>
          </template>
        </el-table-column>
        <el-table-column label="更新时间" align="center" width="200px">
          <template slot-scope="scope">
            <div>
              <i class="el-icon-time"></i>
              {{ scope.row.time || '--' }}
            </div>
          </template>
        </el-table-column>
        <!-- 0正常  1停用 -->
        <el-table-column label="状态" align="center" width="140px">
          <template slot-scope="scope">
            <div v-if="scope.row.status == 0"><el-tag type="success">正常</el-tag></div>
            <div v-else-if="scope.row.status == 1"><el-tag type="danger">停用</el-tag></div>
            <div v-else>--</div>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="260px">
          <template slot-scope="scope">
            <el-button
              type="primary"
              v-if="scope.row.adminId != 1"
              size="mini"
              @click="adminup(scope.row.adminId)"
            >
              编辑
            </el-button>
            <template v-if="scope.row.adminId != 1">
              <el-button
                v-if="scope.row.status == 0"
                type="warning"
                size="mini"
                @click="stopadmin(scope.row.adminId)"
              >
                停用
              </el-button>
              <el-button v-else type="success" size="mini" @click="startadmin(scope.row.adminId)">
                启用
              </el-button>
            </template>

            <el-button
              type="danger"
              v-if="scope.row.adminId != 1"
              size="mini"
              @click="deladmin(scope.row.adminId, scope.$index)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 16px; text-align: center"
        :page-sizes="[10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
        :current-page="pageNum"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script>
// import { admin } from '@/api/admin';
export default {
  data() {
    return {
      searchInfo: {
        account: '',
        auth: '',
        userStatus: ''
      },
      pageNum: 1,
      total: 0,
      page: 1,
      row: 10,
      tableList: null, // 表格数据
      tableLoading: false, // 表格加载动画
      //用户状态
      userStatusOptions: [
        {
          value: '99',
          label: '全部'
        },
        {
          value: '0',
          label: '正常'
        },
        {
          value: '1',
          label: '停用'
        }
      ],
      //用户状态
      authOptions: [
        {
          value: '99',
          label: '全部'
        },
        {
          value: '0',
          label: '总管理员'
        },
        {
          value: '1',
          label: '审核员'
        },
        {
          value: '2',
          label: '市场推广'
        },
        {
          value: '4',
          label: '财务'
        },
        {
          value: '5',
          label: '测试5'
        }
      ]
    };
  },
  mounted() {
    this.getAdminInfo();
  },
  methods: {
    // 新增管理员
    toadminadd() {
      this.$router.push({
        path: 'adminadd'
      });
    },
    // 获取所有信息
    async getAdminInfo(page = 1) {
      this.tableLoading = true; // 开启记载动画
      let res = require('./staff.json'); //await admin(data);
      this.tableLoading = false; // 关闭加载动画
      if (res.code === 200) {
        this.pageNum = page;
        this.total = res.data.total;
        this.tableList = res.data.records;
      }
    },
    handleSizeChange(e) {
      this.row = e;
      this.getAdminInfo(1);
    },
    handleCurrentChange(e) {
      this.getAdminInfo(e);
    },
    // 删除
    async deladmin(cateId, index) {
      this.$confirm('你确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async el => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
        .catch(() => {});
    },
    // 编辑
    adminup(cateId) {
      this.$router.push({
        path: 'staffadd',
        query: {
          cateId: cateId
        }
      });
    },
    // 停用
    stopadmin(adminId) {
      this.$confirm('你确定要停用这个账号吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async el => {
          this.$message({
            type: 'success',
            message: '操作成功!'
          });
        })
        .catch(() => {});
    },
    // 启用
    startadmin(adminId) {
      this.$confirm('你确定要启用这个账号吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async el => {
          this.$message({
            type: 'success',
            message: '操作成功!'
          });
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped>
.search {
  width: 280px;
  margin-bottom: 16px;
}
.groupbtn {
  padding-bottom: 20px;
  display: flex;
}
.groupbtn > div {
  background: rgba(215, 215, 215, 1);
  width: 109px;
  height: 34px;
}
.btnbox {
  display: flex;
  justify-content: space-between;
}
</style>
