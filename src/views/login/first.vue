<template>
  <div>
    <el-row style="position: relative">
      <img src="@/assets/images/big.gif" style="width: 100%">
      <div class="goHome" @click="goHome"></div>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      goHome() {
        this.$router.push({ path: '/dashboard' })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .goHome {
    position: absolute;
    width: 16%;
    height: 9%;
    top: 42%;
    right: 0;
    cursor: pointer;
    /*border: 1px solid #000;*/
  }
</style>
