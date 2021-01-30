<template>
  <div class="pageBox">
    <div class="pageBoxLeft">
      <el-button @click="toggleAllSelection" v-if="!AllChoose">全部选中</el-button>
      <el-button @click="toggleAllSelection" v-else>取消选中</el-button>
      <el-button @click="toggleChooseDelect" v-if="choose" type="danger">删除已选</el-button>
    </div>
    <div class="pageBoxRight">
      <el-pagination
      @size-change="handleCurrentChange"
      @current-change="handleCurrentChange"
      v-model:currentPage='currentPage'
      background
      layout="prev, pager, next"
      :total="1000"
      > </el-pagination>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    AllChoose: {
      type: Boolean
    },
    choose: {
      type: Boolean
    }
  },
  setup () {
    const store = useStore()
    const cuurent = getCurrentInstance().ctx
    const currentPage = computed(() => store.getters.bookInfoPage)
    const handleCurrentChange = (page) => {
      store.commit('setBookPage', page)
      store.dispatch('actionBookInfo')
    }
    const toggleAllSelection = () => { cuurent.$emit('AllSelection') }
    const toggleAllDelect = () => { cuurent.$emit('AllDelect') }
    const toggleChooseDelect = () => { cuurent.$emit('ChooseDelect') }
    return {
      toggleAllDelect,
      currentPage,
      handleCurrentChange,
      toggleAllSelection,
      toggleChooseDelect
    }
  }
})
</script>

<style scoped lang='scss'>
.pageBox{
  margin:30px 0;
  display: flex;
  overflow: hidden;
  .pageBoxLeft{
    overflow: hidden;
    .el-button{
      float: left;
      margin-right: 20px;
    }
  }
  .pageBoxRight{
    width: 100%;
    flex: 1;
    overflow: hidden;
    .el-pagination{
      float: right;
    }
  }
}
</style>
