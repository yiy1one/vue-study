<template>
  <el-menu
    router="true"
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose">
    <el-menu-item index="5">
      <img class="logo" src="https://www.nradiowifi.com/data/upload/image/201806/86e707614687a98449f2777da8ed79e7.png" alt="">
    </el-menu-item>
    <el-menu-item index="welcome">
      <i class="el-icon-menu"></i>
      <span slot="title">欢迎</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>

</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.logo {
  height: 55px;
}

</style>
