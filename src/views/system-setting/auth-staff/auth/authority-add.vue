<template>
  <div class="app-container">
    <div style="width: 600px">
      <div class="title-top">
        <span>新增权限</span>
      </div>
      <el-form ref="form" label-width="120px">
        <el-form-item label="权限名称">
          <el-input v-model="authName" type="text" placeholder="请输入权限名称" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="mark" type="textarea" placeholder="请输入备注" />
        </el-form-item>
        <el-form-item label="权限列表">
          <el-tree
            :data="menuList"
            show-checkbox
            default-expand-all
            node-key="menuId"
            ref="tree"
            highlight-current
            @check="getcheckedkeys"
            :render-content="renderContent"
          ></el-tree>
        </el-form-item>
        <el-form-item>
          <el-button @click="backPage">取消</el-button>
          <el-button type="primary" @click="onSubmit">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { menu, authority } from "@/api/system";
export default {
  data() {
    return {
      authName: '', //权限名称
      mark: '', // 备注
      menuList: [], //权限列表
      selMenuList: [], // 被选中的权限列表
      parentList: [] // 父节点列表
    };
  },
  mounted() {
    this.wheelPlanting();
  },
  methods: {
    /**
     * 获取被选中的节点id
     * */
    getcheckedkeys(e, checked) {
      // 获取被选中的节点,将子节点选中父节点没有被选中的父节点也拼进来
      this.selMenuList = checked.checkedKeys.concat(checked.halfCheckedKeys);
    },
    /**
     * 自定义树结构
     */
    renderContent(h, { node, data, store }) {
      let _html = null;
      if (node.data.status == 0)
        //判断是菜单还是按钮
        _html = (
          <span>
            <i class="el-icon-s-unfold"></i>
            <span>{node.data.title}</span>
          </span>
        );
      else
        _html = (
          <span>
            <i class="el-icon-thumb"></i>
            <span>{node.data.title}</span>
          </span>
        );
      return _html;
    },
    // 获取菜单
    async wheelPlanting() {
      const { data } = require('../../sys-menu/menu.json');
      this.menuList = data.menuList;
    },
    // 返回上一页
    backPage() {
      this.$store.dispatch('tagsView/delView', this.$route).then(() => {
        this.$router.push({
          path: 'auth'
        });
      });
    },
    onSubmit() {
      this.$confirm('您确定要新增吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {})
        .catch(() => {});
    }
  }
};
</script>

<style>
.line {
  text-align: center;
}
.new-panel {
  padding: 0 40px;
}
.title-top {
  display: flex;
  padding: 20px 0 20px 40px;
  color: #1e9fff;
}
.title {
  margin-right: 8px;
  width: 4px;
  height: 20px;
  background: inherit;
  background-color: rgba(45, 140, 240, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(45, 140, 240, 1);
  border-radius: 4px;
}

.imgbox {
  height: 100px;
  width: 100px;
  border: 1px solid #cccccc;
  position: relative;
  cursor: pointer;
}

.imgbox:after {
  content: '';
  width: 50px;
  height: 3px;
  background: #cccccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.imgbox:before {
  content: '';
  width: 3px;
  height: 50px;
  background: #cccccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
