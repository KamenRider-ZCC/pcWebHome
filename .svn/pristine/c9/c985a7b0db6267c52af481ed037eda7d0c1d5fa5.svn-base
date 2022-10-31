<template>
  <div class="app-container">
    <el-card class="box-card">
      <div class="btnbox">
        <el-button type="primary" @click="visibleDialog = true">添加</el-button>
      </div>

      <!--default-expand-all-->
      <el-table
        :data="tableData"
        row-key="menuId"
        :row-class-name="tableRowClassName"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        :header-cell-style="{
          color: '#333',
          background: '#eef1f6',
          height: '52px'
        }"
      >
        <el-table-column label="菜单标题" width="360px">
          <template slot-scope="{ row }">
            <el-tag
              :type="row.status === 0 ? 'primary' : 'success'"
              effect="plain"
              disable-transitions
            >
              {{ row.status == 0 ? '菜单' : '按钮' }}
            </el-tag>
            <span style="font-weight: bold; padding-left: 8px">{{ row.title || '-' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="name" width="200px">
          <template slot-scope="{ row }">
            {{ row.name || '-' }}
          </template>
        </el-table-column>
        <el-table-column label="path">
          <template slot-scope="{ row }">
            {{ row.path || '-' }}
          </template>
        </el-table-column>
        <el-table-column label="component">
          <template slot-scope="{ row }">
            {{ row.component || '-' }}
          </template>
        </el-table-column>
        <el-table-column label="hidden" width="80px">
          <template slot-scope="{ row }">
            {{ row.hidden == 1 ? '隐藏' : '显示' }}
          </template>
        </el-table-column>
        <el-table-column label="noCache" width="80px">
          <template slot-scope="{ row }">
            {{ row.noCache == 1 ? '缓存' : '否' }}
          </template>
        </el-table-column>
        <el-table-column label="排序" width="80px">
          <template slot-scope="{ row }">
            {{ row.orderNum }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="{ row }">
            <el-button
              v-if="row.status == 0"
              @click="addMenu(row)"
              type="text"
              size="mini"
              class="green"
            >
              添加子级
            </el-button>
            <el-button @click="modifyMenu(row)" type="text" size="mini" class="green">
              编辑
            </el-button>
            <el-button @click="confirmDel(row)" type="text" size="mini" class="light-red">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="新增菜单" v-if="visibleDialog" :visible.sync="visibleDialog">
        <menu-form :parentId="parentId"></menu-form>
      </el-dialog>

      <el-dialog title="编辑菜单" v-if="modifyDialog" :visible.sync="modifyDialog">
        <menu-form :menuId="menuId"></menu-form>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
// import {menuManagement} from '@/api/system'
import menuForm from './menu-up';
export default {
  name: 'MenuSetting',
  components: {
    menuForm
  },
  data() {
    return {
      tableData: [],
      visibleDialog: false,
      modifyDialog: false,
      menuId: null,
      parentId: null
    };
  },
  mounted() {
    this.menuManagement();
  },
  methods: {
    // 获取菜单信息
    async menuManagement() {
      let data = {
        type: 0
      };
      const res = require('./menu.json');
      // let res = await menuManagement(data);
      if (res.data) {
        this.tableData = res.data.menuList;
      }
    },
    // 新建菜单
    newMenu() {
      this.$router.push({
        name: 'menuadd'
      });
    },
    // async selectRoleList() {
    //   let { data } = await setting.selectMenus();
    //   this.tableData = data;
    // },
    //表格行颜色，根据菜单和按钮不同颜色
    tableRowClassName({ row }) {
      // console.log(row.status);
      return row.status == 0 ? 'menu-row-bg' : 'button-row-bg';
    },
    addMenu(item) {
      this.parentId = item.menuId;
      this.visibleDialog = true;
    },
    modifyMenu(item) {
      this.menuId = item.menuId;
      this.modifyDialog = true;
    },
    confirmDel(item) {
      let data = {
        type: 3,
        sysRouterMenuId: item.menuId
      };
      this.$confirm('确认删除本条菜单', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          let res = await menuManagement(data);
          this.$message.success('修改成功');
          this.menuManagement();
        })
        .catch(() => {});
    }
  }
};
</script>
<style>
.el-icon-arrow-right {
  font-size: 18px;
  font-weight: bold;
}
.el-icon-arrow-right {
  font-size: 18px;
  font-weight: bold;
}
.el-table .menu-row-bg {
  background: #f5faff;
}
.el-table .button-row-bg {
  background: #fbfff9;
}
</style>
<style scoped lang="scss">
.app-container {
  background: #ffffff;
  flex: 1;
  $green: #005634;
  .green {
    color: $green;
  }
  .btnbox {
    display: flex;
    justify-content: space-between;
  }
}
</style>
