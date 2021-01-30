<template>
  <el-container>
    <el-aside width="auto">
      <menu-box/>
    </el-aside>
    <el-container>
      <el-header><header-box/></el-header>
      <el-main>
        <router-view>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import menuBox from './menu.vue'
import headerBox from './header.vue'
export default defineComponent({
  name: 'Layout',
  components: {
    menuBox,
    headerBox
  }
})

</script>

<style lang="scss" scoped>
.el-container{
  display: flex;
  overflow: hidden;
  height: 100vh;
  flex-direction: row;
  box-sizing: border-box;
  .el-aside{
    position: relative;
    min-width: 0;
    background: $aside;
    transition: all 0.2s;
    height: 100%;
  }
  .el-container{
    display: flex;
    flex: auto;
    flex-direction: column;
    min-height: 0;
    box-sizing: border-box;
    overflow: scroll;;
    .el-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 10;
      background-color: #fff;
      padding: 0;
      height: 64px;
      line-height: 64px;
      padding-left:20px;
      border-bottom:5px solid #f8f8f8;
    }
    .el-main{
      flex: none;
      box-sizing: border-box;
      min-height: 0;
    }
  }
}
</style>
