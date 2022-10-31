<template>
  <div class="dashboard-container">
    <div class="banner">
      <div style="text-align: center">
        <p class="banner_char">FORMING</p>
        <p class="banner_text">成型行业</p>
      </div>
    </div>
    <el-row type="flex" justify="center" style="flex-wrap: wrap;margin: 60px 0">
      <p class="sol_title">行业痛点</p>
      <el-col :span="24" style="margin-top: 32px">
        <el-row type="flex" justify="center">
          <el-row style="width: 1230px">
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 38px' }" style="margin: 15px;height: 206px">
                <p class="cardText">对于冲压型设备，由于其加工周期短，兼容性高，经常涉及到不同模具更换使用。实际生产过程中，冲压换模时间多人为主观记录，影响因素较多且数据真实性不足，易造成设备闲置，生产资源浪费。</p>
              </el-card>
              <div class="card_rect">
                01
              </div>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 38px' }" style="margin: 15px;height: 206px">
                <p class="cardText">生产过程中，实时生产信息人为上报，易造成生产信息滞后，现场设备出现问题时，预警提醒不够，直接影响后续总装生产计划，临时转产，造成更大损失。</p>
              </el-card>
              <div class="card_rect">
                02
              </div>
            </el-col>
            <el-col :span="8" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 38px' }" style="margin: 15px;height: 206px">
                <p class="cardText">车间设备繁多，不同进场时间，不同厂家，设备综合性能，设备利用率各不相同，针对设备缺乏统一衡量标准，后续再次采购也是主观因素过多，未有效挖掘出真正价值。</p>
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
                <p class="cardText">通过智能网关实时采集设备开合模信号，上传到物联云平台，实现冲压型设备开合模时间记录，并可通过换模时间对产品的工艺变革，员工操作熟练度进行管理；</p>
                <div class="bgRight_No">
                  01
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">通过物联网平台和mes数据互通，实现生产过程实时管理，通报生产工单，生产数据，及时更新工单信息；</p>
                <div class="bgRight_No">
                  02
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">通过设备专业系统EAM进行设备管理，接通设备物联信息，形成设备全流程记录，给设备采购、设备维护提供指导作用；</p>
                <div class="bgRight_No">
                  03
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
                  <p class="card_text">实现设备的物联呈现，实时展现设备数据，生动还原设备状态，远程下发设备指令， PC、运维大屏随时查阅。</p>
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
                  <p class="card_title" style="margin-bottom: 12px">设备全生命周期管理PLM</p>
                  <p class="card_text">全面管控设备状态、设备位置、设备管理、设备运维、指令控制等。</p>
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
                    <p class="card_text">实现对生产设备的远程实时监控和管理，打通设备和用户间连接，设备状态透明化。</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6" style="position: relative">
                <div class="bottom_div" style="height: 320px; width: 285px">
                  <div style="height: 160px; width: 100%;text-align: center;line-height: 160px">
                    <p class="bigText">02</p>
                  </div>
                  <div class="bottom_div_card">
                    <p class="card_text">建立起完善系统的设备管理体系，为企业带来直观的经济体现。</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6" style="position: relative">
                <div class="bottom_div" style="height: 320px; width: 285px">
                  <div style="height: 160px; width: 100%;text-align: center;line-height: 160px">
                    <p class="bigText">03</p>
                  </div>
                  <div class="bottom_div_card">
                    <p class="card_text">实时了解生产过程工单信息，降低生产风险。</p>
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
                  大唐融合赋能某成型企业
                </p>
                <div style="margin-top: 28px">
                  <!--<p class="card_text" style="font-weight: bold">设备物联：</p>-->
                  <p class="card_text">为该企业提供全流程设备管理系统，从设备出厂到维修保养，到设备的实时生产信息等进行全程跟踪，帮助企业很好解决了设备利用不透明，生产工单不及时的问题。</p>
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
  name: 'forming'
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
        background-image: url("../../assets/images/forming/solution_forming_banner.jpg");
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
        background-image: url("../../assets/images/forming/solution_forming_bg.jpg");
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
        height: 460px;
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
        height: 360px;
        background-color: rgba(214, 215, 218, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        .bottom_img {
          width: 500px;
          height: 340px;
          background-image: url("../../assets/images/forming/solution_forming_case.jpg");
        }
      }
    }
  }
</style>
