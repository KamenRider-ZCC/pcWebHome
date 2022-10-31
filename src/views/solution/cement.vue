<template>
  <div class="dashboard-container">
    <div class="banner">
      <div style="text-align: center">
        <p class="banner_char">CEMENT PRODUCTION</p>
        <p class="banner_text">水泥行业</p>
      </div>
    </div>
    <el-row type="flex" justify="center" style="flex-wrap: wrap;margin: 60px 0">
      <p class="sol_title">行业痛点</p>
      <el-col :span="24" style="margin-top: 32px">
        <el-row type="flex" justify="center">
          <el-row style="width: 1230px">
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 38px' }" style="margin: 15px;height: 230px">
                <p class="cardText">目前水泥工业经过多年发展，生产设备、控制系统数量众多，导致设备检修工作量大、 备品备件库存压力大、对专业技术人员技能要求越来越高。水泥行业具有无间断的生产特性，一旦停机可能造成巨额经济损失。如何保障设备高效、稳定运行，是水泥行业数字化转型的重点问题。</p>
              </el-card>
              <div class="card_rect">
                01
              </div>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 28px 32px 38px' }" style="margin: 15px;height: 230px">
                <p class="cardText">在生产过程中，操作员往往需要同时观察多达上百个工艺参数的动态变化，不仅要在数秒内迅速做出判断，还得通过计算机给出正确的调节指令，这项工作对操作员的技能、体力和精力都是巨大的考验。种种人为因素的限制使得水泥窑的连续最优运行无法保证，最终导致低消耗高产出。</p>
              </el-card>
              <div class="card_rect">
                02
              </div>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 38px' }" style="margin: 15px;height: 230px">
                <p class="cardText">环保及安全问题。水泥厂运营成本中，煤电能耗成本占50%以上，环保标准的不断提高也带来了新的支出，因此降低成本的关键在于节能降耗；水泥生产的不安全因素较多，本公司人员安全防护，外来人员风险告知等均需要充分考虑。</p>
              </el-card>
              <div class="card_rect">
                03
              </div>
            </el-col>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" style="flex-wrap: wrap;margin: 60px 0">
      <p class="sol_title">解决方案</p>
      <el-col :span="24" style="margin-top: 32px">
        <div class="spin_bg">
          <div class="bgRight">
            <el-row>
              <div class="bgRight_div">
                <p class="cardText">设备连接：大唐融合建设了适配工业领域常见通信协议、多品牌DCS系统及PLC控制器的IoT平台，可以快速部署，实时采集水泥产线的原料磨、煤磨、分解炉、篦冷机、水泥磨等设备的各类参数信息；</p>
                <div class="bgRight_No">
                  01
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">设备管理：构建设备的全生命周期（从选型、购置、安装、验收、使用、保养、维修、改造、更新直至报废）的科学管理；</p>
                <div class="bgRight_No">
                  02
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">能源管理：能耗数据的及时准确采集，通过设备能耗数据变化实现设备故障诊断及工艺监测；</p>
                <div class="bgRight_No">
                  03
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">大数据分析：依托于采集的数据，通过构建分析模型，主动发现或推断生产设备、工艺过程、材料品质等方面的异常，并进行预警、告警，帮助监控人员及时作出决策；</p>
                <div class="bgRight_No">
                  04
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">AR应用：通过AR技术，缩短设备操作、运维人员培训周期。设备故障时，专家通过AR远程指导，缩短故障排查及维修时间；</p>
                <div class="bgRight_No">
                  05
                </div>
              </div>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" style="flex-wrap: wrap;margin: 60px 0">
      <p class="sol_title">相关产品</p>
      <el-col :span="24" style="margin-top: 32px">
        <el-row type="flex" justify="center">
          <el-row style="width: 1230px; display: flex; justify-content: center">
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 366px">
                <img src="../../assets/images/solution_product_lot.jpg" class="card_img">
                <div style="padding: 16px">
                  <p class="card_title" style="margin-bottom: 12px">IOT设备物联平台</p>
                  <p class="card_text">实现各类设备的物联呈现，实时展现设备数据，生动还原设备状态，远程下发设备指令， PC、运维大屏随时查阅。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 366px">
                <img src="../../assets/images/solution_product_bigdata.jpg" class="card_img">
                <div style="padding: 16px">
                  <p class="card_title" style="margin-bottom: 12px">大数据分析平台</p>
                  <p class="card_text">对所有现场设备数据进行收集、处理，并进行实时的数据分析，大大提高实时数据的利用率，更加真实的了解现场设备情况。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 366px">
                <img src="../../assets/images/solution_product_plm.jpg" class="card_img">
                <div style="padding: 16px">
                  <p class="card_title" style="margin-bottom: 12px">设备能源管理系统EMS</p>
                  <p class="card_text">提供工厂、车间、设备能耗情况及节能分析评估，指导车间设备进行节能降耗建议。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 366px">
                <img src="../../assets/images/solution_product_mes.jpg" class="card_img">
                <div style="padding: 16px">
                  <p class="card_title" style="margin-bottom: 12px">云MES</p>
                  <p class="card_text">云化MES部署实施，实现工单派发、物料流转、生产开工报工、产量质量的管控、人员绩效、质量追溯等云化的生产管理软件。</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
    <div class="banner_bottom">
      <el-row type="flex" justify="center" style="flex-wrap: wrap;margin: 48px 0">
        <p class="sol_title" style="color: #fff">客户价值</p>
        <el-col :span="24" style="margin-top: -64px">
          <el-row type="flex" justify="center">
            <el-row style="width: 1230px; display: flex; justify-content: center">
              <el-col :span="6" style="position: relative">
                <div class="bottom_div" style="height: 320px; width: 285px">
                  <div style="height: 160px; width: 100%;text-align: center;line-height: 160px">
                    <p class="bigText">01</p>
                  </div>
                  <div class="bottom_div_card">
                    <p class="card_text">提高设备管理效率，降低设备停机维护时间。</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6" style="position: relative">
                <div class="bottom_div" style="height: 320px; width: 285px">
                  <div style="height: 160px; width: 100%;text-align: center;line-height: 160px">
                    <p class="bigText">02</p>
                  </div>
                  <div class="bottom_div_card">
                    <p class="card_text">缩短人员培训时间、培训成本。</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6" style="position: relative">
                <div class="bottom_div" style="height: 320px; width: 285px">
                  <div style="height: 160px; width: 100%;text-align: center;line-height: 160px">
                    <p class="bigText">03</p>
                  </div>
                  <div class="bottom_div_card">
                    <p class="card_text">分析改进工艺流程，提高生产管理水平。</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <el-row type="flex" justify="center" style="flex-wrap: wrap;margin: 60px 0 100px 0">
      <p class="sol_title">赋能案例</p>
      <el-col :span="24" style="margin-top: 48px">
        <el-row type="flex" justify="center">
          <el-row style="width: 1230px" class="bottom_card">
            <el-col :span="12" style="display:flex; align-items:center; height: 100%">
              <div style="padding: 50px 0 50px 50px">
                <p class="bottom_card_title">
                  大唐融合赋能北京某水泥集团
                </p>
                <div style="margin-top: 28px">
                  <!--<p class="card_text" style="font-weight: bold">设备物联：</p>-->
                  <p class="card_text">项目采用先进的自动化、信息化、工业互联网及大数据技术，着眼全局优化，实现操作、管理、经营各个场景的智能化。打通数据流、信息流、业务流，深度融合智能工厂管理平台，实现企业高效管理与扁平化管理。实现从“人”向“数据”转变；从“隐性经验”向“共享智能”转变；从“单领域管控”向“制造综合协同”转变。实物煤耗降低1.53kg/T,电耗降低0.43KwH/h，关键变量标准差降低40.72%，游离钙合格率提高3%以上，游离钙标准偏差降低12.46%，进出场称重效率提升6倍。</p>
                </div>
              </div>
            </el-col>
            <el-col :span="12" style="display: flex;align-items: center;justify-content: center;height: 100%">
              <div class="bottom_card_bg">
                <div class="bottom_img" />
              </div>
            </el-col>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'cement'
}
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      ::v-deep .el-card.is-always-shadow:hover, .el-card.is-always-shadow:focus {
        border-bottom: 3px solid rgba(216, 14, 25, 1);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.25);
      }
      .sol_title {
        font-size: 30px;
      }
      .banner {
        width: 100%;
        height: 600px;
        background-image: url("../../assets/images/cement/solution_cement_banner.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .banner_bottom {
        width: 100%;
        height: 600px;
        background-image: url("../../assets/images/solution_spin_customer_bg.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
      }
      .spin_bg {
        width: 100%;
        height: 500px;
        background-image: url("../../assets/images/cement/solution_cement_bg.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .bgRight {
          display: flex;
          align-items: center;
          margin-left: 50%;
          width: 50%;
          height: 100%;
          padding: 60px 100px;
          &_div {
            position: relative;
            width: 100%;
            .bgRight_No {
              position: absolute;
              top: -21px;
              left: -64px;
              width: 50px;
              height: 50px;
              color: rgba(216, 14, 25, 1);
              font-size: 42px;
              font-weight: bold;
              text-align: center;
              line-height: 50px;
            }
          }
        }
      }
      .banner_char {
        line-height: 80px;
        font-weight: 300;
        font-size: 48px;
        color: rgba(255, 255, 255, 1);
      }
      .banner_text {
        font-size: 48px;
        color: rgba(255, 255, 255, 1);
      }
      .card_rect {
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        background-color: rgba(216, 14, 25, 1);
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        line-height: 50px;
      }
      .cardText {
        line-height: 28px;
        font-size: 14px;
        font-family: "Microsoft YaHei","Microsoft YaHei",sans-serif;
      }
      .card_img {
        height: 200px;
        width: 100%;
        display: block;
      }
      .card_title {
        font-weight: bold;
        line-height: 22px;
        font-size: 18px;
        letter-spacing: 0.5px;
        font-family: "Microsoft YaHei","Microsoft YaHei",sans-serif;
      }
      .card_text {
        line-height: 24px;
        font-size: 14px;
        font-family: "Microsoft YaHei","Microsoft YaHei",sans-serif;
      }
      .bottom_div {
        .bigText {
          color: rgba(255, 255, 255, 1);
          opacity: 0.75;
          font-size: 100px;
          font-weight: bold;
        }
        .bottom_div_card {
          padding: 32px 18px;
          background-color: rgba(255, 255, 255, 1);
          opacity: 0.75;
          width: 100%;
          height: 160px;
        }
        &:hover {
          .bigText {
            color: rgba(216, 14, 25, 1);
            opacity: 1;
          }
          .bottom_div_card {
            background-color: rgba(216, 14, 25, 1);
            opacity: 1;
          }
          .card_text {
            color: #fff;
          }
        }
      }
      .bottom_card {
        width: 100%;
        height: 500px;
        background-image: url("../../assets/images/solution_spin_case_bg.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        &_title {
          font-size: 24px;
          font-weight: bold;
        }
      }
      .bottom_card_bg {
        width: 520px;
        height: 420px;
        background-color: rgba(214, 215, 218, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        .bottom_img {
          width: 500px;
          height: 400px;
          background-image: url("../../assets/images/cement/solution_cement_case.jpg");
        }
      }
    }
  }
</style>
