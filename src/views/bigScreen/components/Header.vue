<template>
  <div class="title">
    <div class="left">
      <img src="@/assets/bigScreen/arrow.png" />
      {{ title }}
    </div>
    <img src="@/assets/bigScreen/Dots.png" class="right" />
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style scoped lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 14px;
  .left {
    font-size: 16px;
    font-weight: 800;
    color: #d2e9ff;
    img {
      width: 15px;
      height: 12px;
      margin-right: 10px;
    }
  }
  .right {
    width: 28px;
    height: 7px;
  }
}
</style>
