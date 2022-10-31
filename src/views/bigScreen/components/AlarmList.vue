<template>
  <div class="list-container">
    <el-table :data="tableData" max-height="230">
      <el-table-column
        align="center"
        type="index"
        label="序号"
      ></el-table-column>
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <div style="color: rgba(255, 191, 5, 1)">
            {{ scope.row.name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="button">查看</div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="total" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      total: 0,
    };
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
      background: transparent;
    }
  }
}
</style>
