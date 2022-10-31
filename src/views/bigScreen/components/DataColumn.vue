<template>
  <div>
    <div class="data-item">
      <div class="title">平台用户(人）</div>
      <div class="num">11,236</div>
    </div>
    <div class="data-item">
      <div class="title">APP用户(人）</div>
      <div class="num">9,999</div>
    </div>
    <div class="data-item">
      <div class="title">开发者人数</div>
      <div class="num">21,561</div>
    </div>
    <div class="data-item">
      <div class="title">星级上云企业</div>
      <div class="num col40ffcd">986</div>
    </div>
    <div class="data-item">
      <div class="title">智改数转企业</div>
      <div class="num col40ffcd">685</div>
    </div>
    <div class="data-item">
      <div class="title">上云设备</div>
      <div class="num colffbb40">2,671</div>
    </div>
    <div class="data-item">
      <div class="title">采集点数</div>
      <div class="num colffbb40">6,209</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.data-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 12px;
    font-weight: 800;
    color: #ffffff;
    width: 124px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: linear-gradient(
      270deg,
      rgba(45, 178, 228, 0) 0%,
      #2db2e4 50%,
      rgba(45, 178, 228, 0) 100%
    );
  }
  .num {
    font-size: 28px;
    font-family: Arial-Black, Arial;
    font-weight: 900;
    color: #2db2e4;
    margin-top: 7px;
    &.col40ffcd {
      color: #40ffcd;
    }
    &.colffbb40 {
      color: #ffbb40;
    }
  }
}
</style>
