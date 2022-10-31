<template>
  <div class="main-container">
    <el-row :gutter="20">
      <!--left-->
      <el-col :span="18">
        <!--面包屑-->
        <div class="mbx">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/devPlatform' }">开发者平台</el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:void(0)" @click="goDevPlatForm('2')">技术领域</a></el-breadcrumb-item>
            <el-breadcrumb-item>文章详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!--文章标题-->
        <h class="articleTitle">{{ articleTitle }}</h>
        <!--作者信息-->
        <div class="authorInfo">
          <img class="authorImg" style="margin-right: 15px;" src="@/assets/images/u694.png">
          <span style="margin-right: 15px;color: initial">{{ authorName }}</span>
          <div style="margin-right: 15px;">
            <span>发表于{{ articleTime }}</span>
          </div>
          <div style="margin-right: 15px;">
            <i class="el-icon-view" /> <span>{{ viewNumber }}</span>
          </div>
          <div style="margin-right: 15px;">
            <i class="el-icon-chat-dot-round" /> <span>{{ infoNumber }}</span>
          </div>
          <div style="margin-right: 15px;">
            <svg-icon icon-class="zan" fill="#fl0" /> <span>{{ viewNumber }}</span>
          </div>
        </div>
        <!--文章类型-->
        <div class="articleType">
          <el-button>Docker</el-button>
          <el-button>容器</el-button>
        </div>
        <!--摘要-->
        <!--        <div class="abstract">{{abstract}}</div>-->
        <!--文章内容-->
        <div class="articleCon">
          <P style="font-weight: bold">1、美国天然气管道遭受勒索软件攻击</P>
          <br><P>2月，美国网络安全和基础设施安全局(CISA)发布公告，称一家未公开名字的天然气公司因遭受勒索软件攻击后被迫关闭设施两天。根据CISA报告中提供的有限细节，攻击者最初使用包含恶意链接的鱼叉式网络钓鱼邮件攻击未公开名字的美国天然气管道运营商。</P>
          <br><P>为了排查问题并恢复运营，工作人员关闭了压缩设施两天，尽管勒索病毒仅直接锁定了一个控制设备的网络数据，但由于天然气传输对管道的依赖性，一个控制设备的停摆最终导致这家企业关闭运营持续了两天时间。而作为下游能源供应商，受天然气供应关闭影响的上游企业虽未公布，但波及范围可想而知。</P>
          <br><P style="font-weight: bold">2、澳大利亚一航运及物流公司持续遭受勒索软件攻击</P>
          <br><P>2月，澳大利亚一航运及物流公司遭到勒索软件攻击，随后该公司便清理服务器，防止数据被盗。据悉，该公司四个月内已遭受二次勒索软件攻击。经调查发现，被攻击系统中存在Nefilim勒索软件(由Nemty演变而来的新一代勒索软件)。在盗走企业资料后，不法分子会以公布机密资料作为理由来勒索企业。</P>
          <br><P style="font-weight: bold">3、钢铁制造商遭受勒索软件攻击</P>
          <br><P>3月，一家钢铁制造商在北美分支机构，包括加拿大和美国的钢铁生产厂均遭受了勒索软件Ryuk攻击，导致其在北美的分支机构瘫痪，大多数工厂都已停止生产。该公司是全球最大的跨国垂直整合炼钢和采矿公司之一，主要在俄罗斯运营，但在乌克兰、哈萨克斯坦、意大利、捷克共和国、美国、加拿大和南非也有业务。</P>
          <br><P style="font-weight: bold">4、以色列水利基础设施遭受重大网络攻击</P>
          <br><P>4月，黑客攻击了以色列的水利设施。该国的废水处理厂、泵站、污水处理设施的SCADA系统多次遭受了网络攻击，以色列国家网络局发布公告称，各能源和水行业企业需要紧急更改所有联网系统的口令，以应对网络攻击的威胁。以色列计算机紧急响应团队(CERT)和以色列政府水利局也发布了类似的安全警告，水利局告知企业“重点更改运营系统和液氯控制设备”的口令，因为这两类系统遭受的攻击最多。</P>
          <br><P style="font-weight: bold">5、欧洲能源巨头遭勒索软件攻击</P>
          <br><P>4月，葡萄牙一跨国能源公司遭到勒索软件攻击。攻击者声称，已获取该公司10TB的敏感数据文件，并且索要1580的比特币赎金(折合约1090万美元/990万欧元)。</P>
          <br><P style="font-weight: bold">6、伊朗霍尔木兹海峡的重要港口遭受网络攻击</P>
          <br><P>5月9日，伊朗霍尔木兹海峡的重要港口沙希德·拉贾伊遭遇网络攻击。调节船只、卡车、货物流通的计算机系统一度崩溃，致使该港口水路和道路运行发生严重混乱。据《以色列时报》报道，5月9日通往沙希德·拉贾伊港的高速公路上出现了长达数公里的交通拥堵，甚至一连几天，大量船只仍无法入港进行卸载。</P>
          <br><P style="font-weight: bold">7、台湾两大炼油厂遭受勒索软件攻击</P>
          <br><P>5月，台湾两大炼油厂在两天内都受到了网络攻击。一家公司首先受到攻击，而另一家在第二天也遭受攻击。尽管仍接受信用卡和现金，但客户无法在加油站使用VIP支付卡或电子支付应用程序。其中一家公司高管声称，破坏是由勒索软件引起的。</P>
          <br><P style="font-weight: bold">8、瑞士铁路机车制造商遭勒索攻击</P>
          <br><P>5月，瑞士一铁路机车制造商对外披露，其近期遭受了网络攻击，攻击者设法渗透其IT网络，并用恶意软件感染了部分计算机，很可能已经窃取到部分数据。未知攻击者试图勒索该公司巨额赎金，否则将会公开所盗取的数据。</P>
          <br><P style="font-weight: bold">9、汽车制造商遭受勒索软件Snake攻击</P>
          <br><P>6月7日，某汽车制造商位于美国、欧洲及日本分公司的服务器，遭勒索软件攻击。BBC的报道显示该公司过去48小时遭遇了极为惨烈的勒索软件攻击：勒索软件已经传播到其整个网络，影响了该公司的计算机服务器、电子邮件以及其他内网功能，目前企业正在努力将影响降到最低，并恢复生产、销售和开发活动的全部功能。</P>
          <br><P style="font-weight: bold">10、阿塞拜疆政府和能源部门遭受黑客攻击</P>
          <br><P>思科Talos威胁情报和研究小组的报告显示，已经发现有针对阿塞拜疆能源领域的威胁攻击，特别是与风力涡轮机相关的SCADA系统。这些攻击针对的目标是阿塞拜疆政府和公用事业公司，恶意代码旨在感染广泛用于能源和制造业的监督控制和数据采集(SCADA)系统，在这些攻击中使用的新的基于Python的远程访问木马(RAT)，称其为恶意软件PoetRAT。</P>
        </div>
        <!--文章底部按钮-->
        <div class="articelBtn">
          <el-button round><svg-icon icon-class="zan" fill="#fl0" /> 点赞</el-button>
          <el-button round icon="el-icon-star-off">收藏</el-button>
          <el-button round icon="el-icon-circle-plus-outline">关注作者</el-button>
        </div>
        <hr style="margin: 25px 0;height: 1px;background-color: #999;border: none;">
        <!--评论-->
        <div class="comment">
          <p style="font-weight: bold;margin-bottom: 15px;">评论（{{ commentNumber }}）</p>
          <el-input v-model="textarea" type="textarea" :rows="8" placeholder="请开始你的评论" />
        </div>
      </el-col>
      <!--right-->
      <el-col :span="6">
        <div class="authorIntroduce">
          <el-row style="display: flex;align-items: center">
            <el-col :span="6"><img class="authorIntroImg" src="@/assets/images/u694.png"></el-col>
            <el-col :span="18">
              <el-row style="margin-bottom: 5px;">{{ authorName }}</el-row>
              <el-row style="font-size: 14px;color: #999999"><span style="margin-right: 10px;">文章:{{ articleNumber }}篇</span> <span>粉丝:{{ fans }}人</span></el-row>
            </el-col>
          </el-row>
          <p class="intro">{{ intro }}</p>
          <el-button class="follow" icon="el-icon-plus">关注</el-button>
        </div>
        <related-article />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import relatedArticle from '@/views/developer/children/relatedArticle'

export default {
  components: { relatedArticle },
  data() {
    return {
      articleTitle: '2020上半年全球10大典型工业网络安全事件',
      authorName: '张三',
      articleTime: '2021-07-21 16:25:53',
      viewNumber: '742',
      infoNumber: '7',
      // abstract: '【摘要】 在介绍微服务时，首先得先理解什么是微服务，顾名思义，微服务得从两个方面去理解',
      commentNumber: '2',
      textarea: '',
      /* right*/
      intro: '实施分享行业动态，传递价值信息，我是社区小助手',
      articleNumber: '1420',
      fans: '2000'
    }
  },
  mounted() {
  },
  methods: {
    goDevPlatForm(flag) {
      this.$router.push({
        name: 'devPlatform',
        params: {
          flag: flag
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>

  #app .main-container {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0;

    .articleTitle {
      font-size: 24px;
      font-weight: bold;
      margin: 25px 0;
      display: block;
    }

    .authorInfo {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #999;

      .authorImg {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
    }

    .articleType {
      padding: 25px 0;

      button {
        color: #525798;
        border-color: #525798;
      }
    }

    .abstract {
      width: 100%;
      height: 104px;
      background: #F6F7FC;
      padding: 30px 20px;
      margin-bottom: 25px;
      color: #666;
    }

    .articleCon{
      line-height: 24px;
    }

    .articelBtn {
      text-align: center;
      margin-top: 25px;

      .el-button:active {
        color: #c7000b;
        border-color: #c7000b;
        outline: none;
      }

      .el-button:hover, .el-button:focus {
        color: #c7000b;
        border-color: #c7000b;
        background-color: #FFF;
      }
    }

    /*right*/
    .authorIntroduce {
      width: 100%;
      background: #F6F7FC;
      padding: 20px;
      margin-bottom: 25px;

      .authorIntroImg {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }

      .intro {
        color: #666;
        font-size: 14px;
        margin: 20px 0
      }

      .follow {
        color: #fff;
        background-color: #c7000b;
        border-color: #c7000b;
        margin: 0 auto;
        display: flex;
      }
    }

  }
</style>
