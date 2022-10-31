<template>
  <div class="dashboard-container">
    <div class="banner">
      <div style="text-align: center">
        <p class="banner_char">MACHINING</p>
        <p class="banner_text">机加工行业</p>
      </div>
    </div>
    <el-row type="flex" justify="center" style="flex-wrap: wrap;margin: 60px 0">
      <p class="sol_title">行业痛点</p>
      <el-col :span="24" style="margin-top: 32px">
        <el-row type="flex" justify="center">
          <el-row style="width: 1230px">
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 38px' }" style="margin: 15px;height: 206px">
                <p class="cardText">机械加工行业属于离散型的生产，客户个性化需求多，产品品种日趋多样性，市场需求变化快，预测难度增大，企业很难合理的安排生产。</p>
              </el-card>
              <div class="card_rect">
                01
              </div>
            </el-col>
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 38px' }" style="margin: 15px;height: 206px">
                <p class="cardText">由于产品加工要经过不同的工序，各个工序的生产能力不平衡，生产上容易出现木桶效应，生产被关键的瓶颈资源所制约，造成交期的延误。</p>
              </el-card>
              <div class="card_rect">
                02
              </div>
            </el-col>
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 38px' }" style="margin: 15px;height: 206px">
                <p class="cardText">产品结构复杂，零部件多且外协自制兼有，工艺过程经常变更，生产计划的计算和安排非常复杂，临时插单现象多，生产计划往往变的不实用。</p>
              </el-card>
              <div class="card_rect">
                03
              </div>
            </el-col>
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 38px' }" style="margin: 15px;height: 206px">
                <p class="cardText">外协厂家，外协件多，对外协产品的质量、交货期的跟踪控制困难。</p>
              </el-card>
              <div class="card_rect">
                04
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
                <p class="cardText">机械加工行业属于离散型的生产，客户个性化需求多，产品品种日趋多样性，市场需求变化快，预测难度增大，企业很难合理的安排生产。</p>
                <div class="bgRight_No">
                  01
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">由于产品加工要经过不同的工序，各个工序的生产能力不平衡，生产上容易出现木桶效应，生产被关键的瓶颈资源所制约，造成交期的延误；</p>
                <div class="bgRight_No">
                  02
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">产品结构复杂，零部件多且外协自制兼有，工艺过程经常变更，生产计划的计算和安排非常复杂，临时插单现象多，生产计划往往变的不实用；</p>
                <div class="bgRight_No">
                  03
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">外协厂家，外协件多，对外协产品的质量、交货期的跟踪控制困难；</p>
                <div class="bgRight_No">
                  04
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">数据采集点多，数据收集维护工作量大，而且数据往往分布于不同的部门；</p>
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
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 390px">
                <img src="../../assets/images/solution_product_lot.jpg" class="card_img">
                <div style="padding: 16px">
                  <p class="card_title" style="margin-bottom: 12px">IOT设备物联平台</p>
                  <p class="card_text">实现机加设备的物联呈现，实时展现设备数据，生动还原设备状态，远程下发设备指令， PC、运维大屏随时查阅。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 390px">
                <img src="../../assets/images/solution_product_bigdata.jpg" class="card_img">
                <div style="padding: 16px">
                  <p class="card_title" style="margin-bottom: 12px">大数据分析平台</p>
                  <p class="card_text">对所有现场设备数据进行收集、处理，并进行实时的数据分析，大大提高实时数据的利用率，更加真实的了解现场设备情况。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 390px">
                <img src="../../assets/images/solution_product_plm.jpg" class="card_img">
                <div style="padding: 16px">
                  <p class="card_title" style="margin-bottom: 12px">设备全生命周期管理PLM</p>
                  <p class="card_text">全面管控设备状态、设备位置、设备管理、设备运维、指令控制等。</p>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '0' }" style="margin: 14px;height: 390px">
                <img src="../../assets/images/solution_product_mes.jpg" class="card_img">
                <div style="padding: 16px">
                  <p class="card_title" style="margin-bottom: 12px">云MES</p>
                  <p class="card_text">云化MES部署实施，实现对工时管理、人员绩效管理、产品履历管理，物料配送管理，关键料件的使用追溯记录，电子化作业指导书，生产作业单实时报工，移动数据采集，报表管理等功能。</p>
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
                    <p class="card_text">通过IOT实时工况分析和预警告警机制，提前定位设备问题，提升一次性维修率，实现维保效率的最大化与提升维保响应速度，降低工程师的维修成。</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6" style="position: relative">
                <div class="bottom_div" style="height: 320px; width: 285px">
                  <div style="height: 160px; width: 100%;text-align: center;line-height: 160px">
                    <p class="bigText">02</p>
                  </div>
                  <div class="bottom_div_card">
                    <p class="card_text">实现对设备的远程实时监控和管理，为设备的安全运行提供保障；监测各项工艺参数，采取相应的变量控制，使设备达到最佳工作状态。</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6" style="position: relative">
                <div class="bottom_div" style="height: 320px; width: 285px">
                  <div style="height: 160px; width: 100%;text-align: center;line-height: 160px">
                    <p class="bigText">03</p>
                  </div>
                  <div class="bottom_div_card">
                    <p class="card_text">由传统的单线模式变更为立体式结构，由云平台整合多方资源，实现资源的优化配置。</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6" style="position: relative">
                <div class="bottom_div" style="height: 320px; width: 285px">
                  <div style="height: 160px; width: 100%;text-align: center;line-height: 160px">
                    <p class="bigText">04</p>
                  </div>
                  <div class="bottom_div_card">
                    <p class="card_text">对关键零部件的数字化，实现配件级的数字化与全生命周期管理，基于数字化与零配件管理，结合运营大数据，发掘对零部件的需求。</p>
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
                  大唐融合赋能某机加工企业
                </p>
                <div style="margin-top: 22px">
                  <p class="card_text" style="font-weight: bold">设备物联：</p>
                  <p class="card_text">对某企业数控机床设备的工作状态、故障情况、运行工艺参数、设备能耗等实时数据采集并上传，及时处理现场异常情况；</p>
                </div>
                <div style="margin-top: 22px">
                  <p class="card_text" style="font-weight: bold">设备运维：</p>
                  <p class="card_text">从设备点检、保养、维修等设备运维进行全流程管理；</p>
                </div>
                <div style="margin-top: 22px">
                  <p class="card_text" style="font-weight: bold">设备OEE：</p>
                  <p class="card_text">对全厂、各分车间及重点设备进行设备利用率及设备OEE统计分析，指导管理层对设备及生产情况把控，指导客户对生产的调控；</p>
                </div>
                <div style="margin-top: 22px">
                  <p class="card_text" style="font-weight: bold">节能降耗：</p>
                  <p class="card_text">对设备的工艺及能耗的不断优化，帮助企业获取最优最佳的运营方案；</p>
                </div>
                <div style="margin-top: 22px">
                  <p class="card_text" style="font-weight: bold">MES信息化：</p>
                  <p class="card_text">对生产计划管理，工艺管理，生产操作管理，物料管理，质量管理，设备管理，绩效分析等流程管控，实现整个流程产品可追溯，物料浪费减少，品质及良率均得到提升，实现刀具利用率提高，进而带来生产成本的下降，为企业利润增加提供动力。</p>
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
  name: 'machining'
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
        background-image: url("../../assets/images/machining/solution_machining_banner.jpg");
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
        background-image: url("../../assets/images/machining/solution_machining_bg.jpg");
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
        height: 550px;
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
          background-image: url("../../assets/images/machining/solution_machining_case.jpg");
        }
      }
    }
  }
</style>
