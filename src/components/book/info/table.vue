<template>
  <div class="bookTable">
    <el-table :data="data.data" border @selection-change="handleSelectionChange" highlight-current-row ref="table">
      <el-table-column :label="'小说列表 （ '+data.count +'本 ）'">
        <el-table-column type="selection" width="55" style="text-align: center"></el-table-column>
        <el-table-column prop="biaoshi" label="标识" width="55" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="articlename" label="小说名称" width="250" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="lastchapter" label="最新章节" width="300" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="author" label="作者" width="120" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="chapters" label="章节" width="90" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="size" label="字数" width="90" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="update" label="入库=>更新" width="200" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="sortTypeSub" label="分类" width="220" show-overflow-tooltip ></el-table-column>
        <el-table-column prop="fullflag" label="状态" width="90" show-overflow-tooltip ></el-table-column>
        <el-table-column label="操作" width="120" show-overflow-tooltip >
          <template #default="scope">
            <el-button @click="handleOpenPop(scope.row)" type="text">编辑</el-button>
            <el-button type="text" @click="handleRowDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </el-table-column>
    </el-table>
    <book-info-page
    @AllSelection ="allSelection"
    @ChooseDelect="chooseDelete"
    :AllChoose = "allChoose"
    :choose = "choose"
    />
    <book-info-pop
    :popData='popData'
    @handleClosePop='handleClosePop'
    v-if="pop"
    />
  </div>
</template>
<script>
import { computed, defineComponent, ref, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import bookInfoPage from '@/components/book/info/page'
import bookInfoPop from '@/components/book/info/pop'
export default defineComponent({
  components: {
    bookInfoPage,
    bookInfoPop
  },
  setup () {
    const store = useStore()
    const table = ref(null)
    const dataSelect = ref([])
    const allChoose = ref(false)
    const choose = ref(false)
    const pop = ref(false)
    const popData = ref(null)
    const data = computed(() => store.getters.bookQueryInfoData)
    const count = computed(() => store.getters.bookQueryInfoNum)
    const _this = getCurrentInstance().ctx
    const allSelection = () => { table.value.toggleAllSelection() }
    const handleSelectionChange = (e) => {
      dataSelect.value = []
      e.forEach(element => {
        dataSelect.value.push(element.articleid)
      })
      allChoose.value = count.value == e.length
      choose.value = dataSelect.value.length > 0
    }
    const handleDelete = (data) => {
      _this.$confirm(`已选中${data.length}本, 是否继续删除?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('actionDelectBookInfo', data.join(',')).then(() => {
          _this.$message({
            type: 'success',
            message: '删除成功!'
          })
          store.commit('setQueryBookInit')
          store.dispatch('actionQueryBookInfo')
        })
      }).catch(() => {
        _this.$message({
          type: 'info',
          message: '已取消删除'
        })
        table.value.clearSelection()
      })
    }
    const chooseDelete = () => {
      handleDelete(dataSelect.value)
    }
    const handleRowDelete = (row) => {
      dataSelect.value.push(row.articleid)
      table.value.toggleRowSelection(row)
      handleDelete(dataSelect.value)
    }
    const handleOpenPop = (e) => {
      popData.value = e
      pop.value = true
    }
    const handleClosePop = (e) => {
      popData.value = ''
      pop.value = false
    }
    return {
      data,
      handleDelete,
      handleSelectionChange,
      chooseDelete,
      allSelection,
      table,
      dataSelect,
      handleRowDelete,
      allChoose,
      choose,
      pop,
      handleOpenPop,
      handleClosePop,
      popData
    }
  }
})
</script>
<style lang="scss" scoped>>
  .el-table{
    color:#333
  }
</style>
