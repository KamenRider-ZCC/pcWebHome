<template>
  <div class="right">
    <h style="margin-left: 20px;">相关文章</h>
    <div class="rightArticleTitle">
      <div class="rightArticleTitleItem" v-for="(item,index) in list.slice(0, 9)" :key="index">
        {{item.label}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          {
            value: 0,
            label: '《基于Kubernetes的容器云平台实战》——1.4　Docker架构及原理'
          },
          {
            value: 1,
            label: 'Docker容器到底是什么？'
          },
          {
            value: 2,
            label: 'Docker中容器（Container）和镜像（Image）的区别'
          },
          {
            value: 3,
            label: 'Docker容器9类常见故障排查处理和使用规范意见'
          },
          {
            value: 4,
            label: 'Docker容器网络通信原理分析'
          },
          {
            value: 5,
            label: '绕过Docker，大规模杀死容器'
          },
          {
            value: 6,
            label: '深入剖析Kubernetes系列连载（六）容器'
          },
          {
            value: 7,
            label: '公司mysql docker容器挂了，数据丢失，老板要起诉我'
          },
          {
            value: 8,
            label: '漫谈容器监控'
          },
          {
            value: 9,
            label: '8天入门docker系列————第五天使用aspnetcore小案例熟悉容器互联和docker-c'
          }
        ]
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .right {
    background: #F6F7FC;
    padding: 20px 0;

    .rightArticleTitle {
      font-size: 14px;
      margin-top: 20px;

      .rightArticleTitleItem {
        line-height: 23px;
        padding: 5px 20px;

        &:hover {
          border-left: 1px solid #c7000b;
          background: #FFF;
        }
      }
    }
  }
</style>
