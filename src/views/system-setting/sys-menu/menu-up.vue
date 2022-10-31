<template>
  <div class="form-container">
    <el-form :model="form" label-width="120px">
      <el-form-item label="菜单/按钮">
        <el-radio v-model="form.status" :label="0">菜单</el-radio>
        <el-radio v-model="form.status" :label="1">按钮</el-radio>
      </el-form-item>
      <el-form-item label="title">
        <el-input v-model="form.title" type="text" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item label="name">
        <el-input v-model="form.name" type="text" placeholder="名称"></el-input>
      </el-form-item>
      <el-form-item label="path" v-if="form.status == 0">
        <el-input v-model="form.path" type="text" placeholder="路径"></el-input>
        <div style="font-size: 12px; color: #f56c6c">一级菜单要加斜杆： /menuList</div>
      </el-form-item>
      <el-form-item label="component" v-if="form.status == 0">
        <el-input v-model="form.component" type="text" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="icon" v-if="form.status == 0">
        <el-input v-model="form.icon" type="text" placeholder="icon图标"></el-input>
      </el-form-item>
      <el-form-item label="redirect" v-if="form.status == 0">
        <el-input v-model="form.redirect" type="text" placeholder="重定向"></el-input>
      </el-form-item>
      <el-form-item label="是否隐藏" v-if="form.status == 0">
        <el-radio v-model="form.hidden" :label="1">是</el-radio>
        <el-radio v-model="form.hidden" :label="0">否</el-radio>
      </el-form-item>
      <el-form-item label="是否缓存" v-if="form.status == 0">
        <el-radio v-model="form.noCache" :label="1">是</el-radio>
        <el-radio v-model="form.noCache" :label="0">否</el-radio>
      </el-form-item>
      <el-form-item label="是否锁定" v-if="form.status == 0">
        <el-radio v-model="form.affix" :label="1">是</el-radio>
        <el-radio v-model="form.affix" :label="0">否</el-radio>
      </el-form-item>
      <el-form-item label="排序" v-if="form.status == 0">
        <el-input v-model="form.orderNum" type="text" placeholder="请输入排序"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="menuManagement">确定</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menuId: {
      type: Number,
      required: false
    },
    parentId: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      form: {
        name: '',
        title: '',
        path: '',
        component: '',
        icon: '',
        redirect: '',
        hidden: 0,
        noCache: 0,
        status: 0,
        orderNum: '',
        affix: 0
      }
    };
  },
  mounted() {},
  methods: {
    // 新增或修改菜单
    async menuManagement() {
      // let data = {
      //   sysRouterMenuEntity: {
      //     ...this.form
      //   }
      // };

      // if (this.menuId) {
      //   data.sysRouterMenuEntity.sysRouterMenuId = this.menuId;
      //   data.type = 2;
      // } else {
      //   data.sysRouterMenuEntity.parentId = this.parentId || 0;
      //   data.type = 1;
      // }

      // let res = await menuManagement(data);
      this.$message.success('添加成功');
    },

    async init() {
      // if (this.menuId) {
      //   let req = { menuId: this.menuId };
      //   let { data } = ''; //await setting.selectMenuInfo(req);
      //   this.form = data;
      // }
    },
    handleSubmit() {
      if (this.menuId) {
        this.update();
      } else {
        this.submit();
      }
    },
    async submit() {
      // let req = this.form;
      // req['parentId'] = this.parentId;
      // // await setting.insertMenu(req);
      this.$message.success('新增成功');
      this.cancel();
    },
    async update() {
      // let req = this.form;
      // // await setting.updateMenu(req);
      this.$message.success('修改成功');
      this.cancel();
    },
    cancel() {
      this.$parent.$parent.visibleDialog = false;
      this.$parent.$parent.modifyDialog = false;
      this.$parent.$parent.selectRoleList();
    }
  },
  created() {
    // this.init()
  }
};
</script>
<style lang="scss">
.form-container {
  .el-input {
    width: 500px;
  }
}
</style>
<style scoped></style>
