<template>
  <div class="app-container">
    <el-card class="box-card">
      <div style="width: 600px">
        <div class="title-top">
          <span>新增员工</span>
        </div>
        <el-form ref="form" :model="form" :rules="rules" label-width="120px">
          <el-form-item label="员工账号" prop="account">
            <el-input
              v-model.trim="form.account"
              :maxlength="11"
              type="text"
              placeholder="请输入账号"
            />
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input v-model.trim="form.pwd" type="text" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item label="确认密码" prop="newpwd">
            <el-input v-model.trim="form.newpwd" type="text" placeholder="请输入确认密码" />
          </el-form-item>
          <el-form-item label="员工名称" prop="name">
            <el-input v-model.trim="form.name" type="text" placeholder="请输入名称" />
          </el-form-item>
          <el-form-item label="权限">
            <el-select v-model.trim="form.roleId" placeholder="请选择权限">
              <el-option
                v-for="item in roleList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注" prop="remark">
            <el-input v-model.trim="form.remark" type="textarea" placeholder="请输入备注" />
          </el-form-item>
          <el-form-item>
            <el-button @click="backPage">取消</el-button>
            <el-button type="primary" @click="onSubmit">新增</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import Validator from '@/utils/validator';
// import { authority } from "@/api/system";
// import { admin } from "@/api/admin";
export default {
  data() {
    // 账号
    let account = (rule, value, callback) => {
      let box = /^1[3456789]\d{9}$/;
      if (!value) {
        return callback(new Error('请输入账号'));
      } else if (!box.test(value)) {
        return callback(new Error('手机号码格式有误'));
      } else {
        callback();
      }
    };

    // 密码
    let pwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'));
      } else if (value.length < 6) {
        return callback(new Error('请输入6位以上的密码'));
      } else {
        callback();
      }
    };

    // 确认密码
    let newpwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'));
      } else if (value.length < 6) {
        return callback(new Error('请输入6位以上的密码'));
      } else if (value != this.form.pwd) {
        return callback(new Error('两次输入的密码不一样'));
      } else {
        callback();
      }
    };

    return {
      //权限列表
      roleList: [
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
          label: '市场营销'
        },
        {
          value: '3',
          label: '财务'
        }
      ],

      form: {
        account: '', // 账号
        name: '', // 姓名
        remark: '', //备注
        roleId: '', // 权限id
        pwd: '', // 密码
        newpwd: '' // 确认密码
      },
      rules: {
        account: [
          {
            required: true,
            validator: account,
            trigger: 'blur'
          }
        ],
        name: [
          {
            required: true,
            message: '请输入昵称',
            trigger: 'blur'
          }
        ],
        pwd: [
          {
            required: true,
            validator: pwd,
            trigger: 'blur'
          }
        ],
        newpwd: [
          {
            required: true,
            validator: newpwd,
            trigger: 'blur'
          }
        ]
      }
    };
  },
  mounted() {
    this.getAllCategory();
  },
  methods: {
    // 获取所有权限
    async getAllCategory() {
      // const data = {
      //   type: 0
      // };
      // this.tableLoading = true; // 开启记载动画
      // const res = await authority(data);
      // this.tableLoading = false; // 关闭加载动画
      // if (res.code === 200) {
      // this.roleList = res.data;
      // }
    },
    // 返回上一页
    backPage() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$confirm('你确定要新增吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
            .then(async () => {
              this.updataBrand();
            })
            .catch(() => {});
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 新增用户类型
    async updataBrand() {
      this.$message({
        type: 'success',
        message: '增加成功!'
      });
      setTimeout(() => {
        this.backPage();
      }, 1500);
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
