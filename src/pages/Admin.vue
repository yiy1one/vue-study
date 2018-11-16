<template>
  <el-container style="height: 100%">
      <el-aside><main-menu></main-menu></el-aside>
      <el-container direction="vertical">
        <el-header height="56px">Header</el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer height="56px">NRadio</el-footer>
      </el-container>
    </el-container>
</template>

<script>
import mainMenu from './../components/MainMenu.vue'
export default {
  components: {
    mainMenu
  }
}
</script>

<style>
.el-header, .el-footer {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
