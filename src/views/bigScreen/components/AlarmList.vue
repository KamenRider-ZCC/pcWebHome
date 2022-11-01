<template>
  <div v-if="total" class="list-container">
    <el-table :data="tableData" max-height="230">
      <el-table-column
        type="index"
        label="序号"
        align="center"
        min-width="30"
      />
      <el-table-column
        prop="warningsType"
        label="报警类型"
        align="center"
        min-width="50"
      />
      <el-table-column
        prop="warningsContent"
        label="报警内容"
        align="center"
        min-width="50"
      />
      <el-table-column
        prop="warningsTime"
        label="报警时间"
        align="center"
        min-width="80"
      />
      <el-table-column
        prop="equipmentName"
        label="设备名称"
        align="center"
        min-width="40"
      />
      <el-table-column
        prop="enterpriseName"
        label="所属企业"
        align="center"
        min-width="120"
      />
      <el-table-column label="状态" align="center" min-width="40">
        <template slot-scope="scope">
          <div
            :style="{
              color: scope.row.warningsState ? '#ffbf05' : '#A8A498',
            }"
          >
            {{ scope.row.warningsState ? "已处理" : "待处理" }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" min-width="40">
        <template slot-scope="scope">
          <div class="button">查看</div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :current-page.sync="currentPage"
      :page-size="5"
      @current-change="handleCurrentChange"
    />
  </div>
  <div v-else class="table-empty">暂无数据</div>
</template>
<script>
import { getWarningsPage } from "@/api/bigScreen";
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      currentPage: 1,
    };
  },
  mounted() {
    this.getPage();
  },
  methods: {
    async getPage() {
      const res = (await getWarningsPage({ page: this.currentPage, rows: 5 }))
        .data;
      this.tableData = res.data;
      this.total = res.totalRow;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getPage();
    },
  },
};
</script>
<style scoped lang="scss">
.list-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ::v-deep .el-table {
    background: transparent;
    &::before {
      height: 0;
    }
    .el-table__header thead tr {
      border: 1px solid #315c86;
      background: rgba(29, 85, 121, 0.4);
      box-shadow: inset 0px 0px 21px 0px #315c86;
      th {
        background: transparent;
        font-size: 14px;
        font-weight: 800;
        color: #d2e9ff;
        border: none;
      }
    }
    .el-table__body-wrapper .el-table__body tbody tr {
      background: transparent;
      &:hover > td {
        color: #000;
      }
      td {
        border-bottom: 1px solid rgba(151, 151, 151, 0.23);
        font-size: 14px;
        font-weight: 400;
        color: #d2e9ff;
        .button {
          display: inline-block;
          font-size: 14px;
          font-weight: 400;
          color: #34ccff;
          width: 50px;
          text-align: center;
          height: 30px;
          line-height: 30px;
          background: rgba(52, 204, 255, 0.27);
          border-radius: 2px;
          border: 1px solid #34ccff;
          cursor: pointer;
        }
      }
    }
  }
  ::v-deep .el-pagination {
    button,
    .el-pager li {
      color: #d2e9ff;
      background: transparent;
      &.active {
        color: #1890ff;
      }
    }
  }
}
.table-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  color: #d2e9ff;
}
</style>
