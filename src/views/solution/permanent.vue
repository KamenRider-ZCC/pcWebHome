<template>
  <div class="dashboard-container">
    <div class="banner">
      <div style="text-align: center">
        <p class="banner_char">RARE EARTH PERMANENT MAGNET</p>
        <p class="banner_text">稀土永磁行业</p>
      </div>
    </div>
    <el-row type="flex" justify="center" style="flex-wrap: wrap;margin: 60px 0">
      <p class="sol_title">行业痛点</p>
      <el-col :span="24" style="margin-top: 32px">
        <el-row type="flex" justify="center">
          <el-row style="width: 1230px">
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 38px' }" style="margin: 15px;height: 165px">
                <p class="cardText">数字化浪潮下行业竞争激烈，难以实现存量以及增量设备的智能物联。</p>
              </el-card>
              <div class="card_rect">
                01
              </div>
            </el-col>
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 38px' }" style="margin: 15px;height: 165px">
                <p class="cardText">设备缺乏可视化工具，无法实现设备状态、工艺流程实时可视化。</p>
              </el-card>
              <div class="card_rect">
                02
              </div>
            </el-col>
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 38px' }" style="margin: 15px;height: 165px">
                <p class="cardText">设备能耗大，成本高无法对熔炼烧结过程中真空度，温度，耗时等关键工况数据进行最佳工艺分析。</p>
              </el-card>
              <div class="card_rect">
                03
              </div>
            </el-col>
            <el-col :span="6" style="position: relative">
              <el-card shadow="always" :body-style="{ padding: '32px 38px' }" style="margin: 15px;height: 165px">
                <p class="cardText">设备品种多，运维复杂，无法精准进行运维提醒。</p>
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
            <el-row style="height: 400px; padding: 21px 20px 0 100px; overflow-y: auto">
              <div class="bgRight_div">
                <p class="cardText">大唐融合物联网关实时采集熔炼、气流磨、成型、烧结、机加设备的工作状态、故障情况、运行工艺参数、能耗等参数实时传输至大唐工业物联网平台，实现多现场设备实时监视、远程诊断，同时对设备能耗、工艺数据实时计算分析处理、节能分析、设备利用率、异常状态进行计算，提供最优工艺参数及能耗最优生产情况；</p>
                <div class="bgRight_No">
                  01
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">基于大唐物联网平台的设备运维模块对现场设备点检、保养、维修的快速处理，指导运维人员对现场设备的故障快速消除，减少设备停机时间，提高设备的利用率；</p>
                <div class="bgRight_No">
                  02
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">对稀土永磁设备提高全生命周期管理，对设备在保期间维修次数，维修方式，维护保养记录等均可有记录并生成维修知识库，方便后期精准维修；</p>
                <div class="bgRight_No">
                  03
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">通过收集设备的温度、压力、真空度等数据与能耗数据进行建模分析，结合设备数字模型建立熔炼及烧结炉的节能模型，以实现熔炼、烧结炉设备的节能减排；</p>
                <div class="bgRight_No">
                  04
                </div>
              </div>
              <div class="bgRight_div" style="margin-top: 48px">
                <p class="cardText">提供专业UI设计及看板管理，让管理人员一目了然了解现场接入设备情况，设备维护保养情况、设备开动率0EE情况、现场设备故障处理情况、产品工艺最优路径，能耗分析及节能评估等，对外提升优秀企业形象；</p>
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
                  <p class="card_text">实现永磁稀土设备的物联呈现，实时展现设备数据，生动还原设备状态， PC、运维大屏随时查阅。</p>
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
                  <p class="card_text">提供工厂、车间、设备能耗情况及节能分析评估，指导车间设备进行节能降耗建议。</p>
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
                    <p class="card_text">实现对设备的远程实时监控和管理，为设备的安全运行提供保障；监测各项工艺参数，采取相应的变量控制，使设备达到最佳工作状态。</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6" style="position: relative">
                <div class="bottom_div" style="height: 320px; width: 285px">
                  <div style="height: 160px; width: 100%;text-align: center;line-height: 160px">
                    <p class="bigText">02</p>
                  </div>
                  <div class="bottom_div_card">
                    <p class="card_text">完善运维服务体系，对设备运维全服务流程进行全流程管理，为提升运维质量和减低服务成本提高支撑。</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6" style="position: relative">
                <div class="bottom_div" style="height: 320px; width: 285px">
                  <div style="height: 160px; width: 100%;text-align: center;line-height: 160px">
                    <p class="bigText">03</p>
                  </div>
                  <div class="bottom_div_card">
                    <p class="card_text">缩短搜集故障信息的时间，提高故障诊断的效率，为企业带来可观的经济效益，增强企业的差异化竞争力。</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6" style="position: relative">
                <div class="bottom_div" style="height: 320px; width: 285px">
                  <div style="height: 160px; width: 100%;text-align: center;line-height: 160px">
                    <p class="bigText">04</p>
                  </div>
                  <div class="bottom_div_card">
                    <p class="card_text">对全厂及各分车间设备利用率及设备OEE统计分析，方便管理层对生产设备及生产情况的把控。</p>
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
                  大唐融合赋能永磁集团企业
                </p>
                <div style="margin-top: 28px">
                  <p class="card_text" style="font-weight: bold">设备物联：</p>
                  <p class="card_text">对某企业53台熔炼、气流磨、成型、烧结及机加工设备的工作状态、故障情况、运行工艺参数、设备能耗等实时数据采集并上传，及时处理现场异常情况；</p>
                </div>
                <div style="margin-top: 24px">
                  <p class="card_text" style="font-weight: bold">设备运维：</p>
                  <p class="card_text">从设备点检、保养、维修等设备运维进行全流程管理；</p>
                </div>
                <div style="margin-top: 24px">
                  <p class="card_text" style="font-weight: bold">设备OEE：</p>
                  <p class="card_text">对全厂、各分车间及重点设备进行设备利用率及设备OEE统计分析，指导管理层对设备及生产情况把控，指导客户对生产的调控；</p>
                </div>
                <div style="margin-top: 24px">
                  <p class="card_text" style="font-weight: bold">节能降耗：</p>
                  <p class="card_text">对设备的工艺及能耗的不断优化，帮助企业获取最优最佳的运营方案；</p>
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
  name: 'permanent'
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
        background-image: url("../../assets/images/permanent/solution_rareearth_banner.jpg");
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
        background-image: url("../../assets/images/permanent/solution_rareearth_bg.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .bgRight {
          display: flex;
          align-items: center;
          margin-left: 50%;
          width: 50%;
          height: 100%;
          padding: 39px 80px 60px 0;
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
          background-image: url("../../assets/images/permanent/solution_rareearth_case.jpg");
        }
      }
      ::-webkit-scrollbar {
        /*滚动条整体样式*/
        width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
      }
      ::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        background   : #D80E19;
      }
      ::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background   : #ededed;
      }
    }
  }
</style>
