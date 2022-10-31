<template>
  <div class="app-container">
    <el-card class="box-card">
      <div class="btnbox">
        <div></div>
        <div>
          <el-button type="primary" icon="el-icon-plus" @click="toadminadd">新增</el-button>
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
        <el-table-column label="权限名称" align="center" min-width="120px">
          <template slot-scope="scope">
            <el-tag>{{ scope.row.role_name || '--' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="childName" align="center" label="备注" min-width="200px">
          <template slot-scope="scope">
            <div>{{ scope.row.remark || '--' }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="childName" align="center" label="关联员工数" width="100px">
          <template slot-scope="scope">
            <el-tag type="success" effect="dark" size="small">
              {{ scope.row.staff_num || '0' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="更新时间" align="center" width="200px">
          <template slot-scope="scope">
            <div>
              <i class="el-icon-time"></i>
              {{ scope.row.create_time || '--' }}
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="220px">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="adminup(scope.row.role_id)">
              编辑
            </el-button>
            <el-button type="danger" size="mini" @click="deladmin(scope.row.role_id, scope.$index)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
// import { authority } from '@/api/system';
export default {
  filters: {
    // 过滤器
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      };
      return statusMap[status];
    },
    getMenuList(menuList) {
      let arr = [];
      menuList.find(res => {
        if (res.name) {
          arr.push(res.name);
        }
      });
      return arr.toString();
    }
  },
  data() {
    return {
      dataTime: [], // 时间
      pageNum: 1,
      seachtext: '', // 搜索关键词
      total: 0,
      page: 1,
      row: 10,
      tableList: null, // 表格数据
      tableLoading: false // 表格加载动画
    };
  },
  mounted() {
    this.getAllCategory(1);
  },
  methods: {
    // 新增权限
    toadminadd() {
      this.$router.push({
        path: 'authadd'
      });
    },
    // 获取所有权限
    async getAllCategory() {
      const data = {
        type: 0
      };
      this.tableLoading = true; // 开启记载动画
      const res = require('./auth.json'); //await authority(data);
      this.tableLoading = false; // 关闭加载动画
      if (res.code === 200) {
        this.tableList = res.data;
      }
    },
    // 删除
    async deladmin(cateId, index) {
      let data = {
        sysRoleEntity: {
          roleId: cateId
        },
        type: 2
      };

      this.$confirm('你确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async el => {
          const res = require('./auth.json');
          if (res.code === 200) {
            this.tableList.splice(index, 1);
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }
        })
        .catch(() => {});
    },
    // 详情
    adminup(cateId) {
      this.$router.push({
        path: 'authadd',
        query: {
          cateId: cateId
        }
      });
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
  margin-bottom: 10px;
}
</style>
