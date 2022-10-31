<template>
  <div>
    <carousel />
    <hr style="height: 8px;border: none;background: #c7000b;margin: 0">
    <div class="main-container">
      <div class="tabs_title">
        <div :class="'tab1' === titActive ? 'tab_active' : ''" @click="tabChange('tab1')"><img :src="imgDemand"> 我有需求</div>
        <div :class="'tab2' === titActive ? 'tab_active' : ''" @click="tabChange('tab2')"><img :src="imgService"> 我有服务</div>
      </div>
      <div class="con">
        <el-form ref="demandFormRef" :model="demandForm" :rules="demandFormRules" label-width="100px">
          <p style="margin-bottom: 18px;font-weight: bold">需求详情（<span style="color:#c7000b;">必填项</span>）</p>
          <el-form-item label="我的需求" prop="mydemand">
            <el-input v-model="demandForm.mydemand" type="textarea" :rows="6" />
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="demandForm.phone" size="small" />
          </el-form-item>
          <p style="margin-bottom: 18px;font-weight: bold">需求补充（选填项）</p>
          <el-form-item label="需求名称">
            <el-input v-model="demandForm.demandName" size="small" />
          </el-form-item>
          <el-form-item label="需求行业">
            <el-input v-model="demandForm.demandIndustry" size="small" />
          </el-form-item>
          <el-form-item label="需求类别">
            <el-select v-model="demandForm.demandCategory" size="small" placeholder="请选择需求类别">
              <el-option label="类别一" value="0" />
              <el-option label="类别二" value="1" />
            </el-select>
          </el-form-item>
          <el-form-item label="需求联系人">
            <el-input v-model="demandForm.contact" size="small" />
          </el-form-item>
          <el-form-item label="预算金额">
            <el-input-number v-model="demandForm.num" size="small" :min="1" :max="100" />
          </el-form-item>
          <el-form-item label="企业名称">
            <el-input v-model="demandForm.businessName" size="small" />
          </el-form-item>
          <el-form-item label="相关附件">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :file-list="fileList"
              size="small"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item class="form_footer">
            <el-button size="small" @click="submitForm('ruleForm')">提交发布</el-button>
            <el-button size="small" @click="submitForm2('ruleForm')">保存为草稿</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import carousel from '@/views/supplyDemand/carousel'

export default {
  components: { carousel },
  data() {
    return {
      titActive: 'tab1',
      demandForm: {},
      demandFormRules: {
        mydemand: [
          { required: true, message: '请填写我的需求', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请填写联系方式', trigger: 'blur' }
        ]
      },
      fileList: [], // 相关附件
      imgDemand: require('@/assets/images/demandHover.png'),
      imgService: require('@/assets/images/service.png')
    }
  },
  mounted() {
  },
  methods: {
    // tab切换
    tabChange(val) {
      this.titActive = val
      if (val === 'tab1') {
        this.imgDemand = require('@/assets/images/demandHover.png')
        this.imgService = require('@/assets/images/service.png')
      } else if (val === 'tab2') {
        this.imgDemand = require('@/assets/images/demand.png')
        this.imgService = require('@/assets/images/serviceHover.png')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  #app .main-container {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0;

    .tabs_title {
      display: flex;
      border-bottom: 1px solid #ddd;
      padding: 0 40px;

      & > div {
        font-size: 24px;
        padding-bottom: 15px;
        margin-right: 40px;
        width: max-content;
        display: flex;
        align-items: center;

        img {
          margin-right: 5px;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .tab_active {
        color: #c7000b;
        border-bottom: 6px solid #c7000b;
      }
    }

    .con {
      margin-top: 30px;
      padding: 0 40px;

      .form_footer {
        text-align: center;

        .el-button {
          background: #c7000b;
          color: #FFFFFF;
        }
      }
    }

  }
</style>
