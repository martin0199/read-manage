<template>
  <div class="tabBox">
    <div class="tabBoxLeft">
      <div class="dropdown">
        <el-dropdown @command="handleCommandProcess">
          <el-button type="primary">
          进度<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="-1">全部</el-dropdown-item>
              <el-dropdown-item command="0">连载</el-dropdown-item>
              <el-dropdown-item command="1">完本</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="dropdown">
        <el-dropdown @command="handleCommandSort">
        <el-button type="primary">
        频道<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="-1">全部</el-dropdown-item>
            <el-dropdown-item :command="list.sortid" v-for="(list, index) in typeArr" :key='index'>{{index}}
              <el-dropdown @command="handleCommandType">
                <span class="el-dropdown-link">
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="-1">全部</el-dropdown-item>
                    <el-dropdown-item :command="children.typeid" v-for="(children, indexs) in list.type" :key='indexs'>
                      {{indexs}}
                      <el-dropdown @command="handleCommandSubId">
                        <span class="el-dropdown-link">
                          <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <template #dropdown>
                          <el-dropdown-menu>
                            <el-dropdown-item command="-1">全部</el-dropdown-item>
                            <el-dropdown-item :command="son" v-for="(son, indexv) in children.category" :key='indexv'>
                              {{indexv}}
                            </el-dropdown-item>
                          </el-dropdown-menu>
                        </template>
                      </el-dropdown>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      </div>
      <div class="dropdown">
        <el-dropdown @command="handleCommandly">
          <el-button type="primary">
            来源<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="">全部</el-dropdown-item>
              <el-dropdown-item :command="list.siteid" v-for="(list, index) in lyArr" :key='index'>{{index}}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="dropdown">
        <el-dropdown @command="handleCommandSize">
          <el-button type="primary">
            字数<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="-1">全部</el-dropdown-item>
              <el-dropdown-item command="50">1千以下</el-dropdown-item>
              <el-dropdown-item command="500">1千-1万</el-dropdown-item>
              <el-dropdown-item command="1000">1万-10万</el-dropdown-item>
              <el-dropdown-item command="5000">10万-50万</el-dropdown-item>
              <el-dropdown-item command="10000">50万-100万</el-dropdown-item>
              <el-dropdown-item command="30000">100万-300万</el-dropdown-item>
              <el-dropdown-item command="50000">300万-500万</el-dropdown-item>
              <el-dropdown-item command="70000">500万-700万</el-dropdown-item>
              <el-dropdown-item command="90000">700万-900万</el-dropdown-item>
              <el-dropdown-item command="100000">大于900万</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="dropdown">
        <el-dropdown @command="handleCommandOrder">
          <el-button type="primary">
            排序<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="lastupdate">全部</el-dropdown-item>
              <el-dropdown-item command="lastupdate">更新时间</el-dropdown-item>
              <el-dropdown-item command="articleid">小说序号</el-dropdown-item>
              <el-dropdown-item command="goodnum">收藏排行</el-dropdown-item>
              <el-dropdown-item command="allvisit">阅读排行</el-dropdown-item>
              <el-dropdown-item command="search">搜索排行</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <el-button type="primary" @click="handleReset">重置选项</el-button>
    </div>
    <div class="tabBoxRight">
      <el-form :inline="true" :model="formData" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formData.keyword" placeholder="请输入搜索的关键字"></el-input>
        </el-form-item>
        <el-form-item style="width: 140px;">
          <el-select v-model="formData.searchType" placeholder="选择选项">
            <el-option label="书名" value="articlename"></el-option>
            <el-option label="作者" value="author"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, getCurrentInstance, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    const typeArr = computed(() => store.getters.bookQueryInfoData.type)
    const lyArr = computed(() => store.getters.bookQueryInfoData.ly)
    const _this = getCurrentInstance().ctx
    const formData = reactive({
      keyword: '',
      searchType: ''
    })
    const handleCommandProcess = (e) => {
      store.commit('setQueryBookFullFlag', e)
      store.dispatch('actionQueryBookInfo')
    }
    const handleCommandSort = (e) => {
      store.commit('setQueryBookSortId', e)
      store.dispatch('actionQueryBookInfo')
    }
    const handleCommandly = (e) => {
      store.commit('setQueryBookSiteid', e)
      store.dispatch('actionQueryBookInfo')
    }
    const handleCommandOrder = (e) => {
      store.commit('setQueryBookOrder', e)
      store.dispatch('actionQueryBookInfo')
    }
    const handleCommandSubId = (e) => {
      store.commit('setQueryBookSubId', e)
      store.dispatch('actionQueryBookInfo')
    }
    const handleCommandType = (e) => {
      store.commit('setQueryBookTypeId', e)
      store.dispatch('actionQueryBookInfo')
    }
    const handleCommandSize = (e) => {
      store.commit('setQueryBookSize', e)
      store.dispatch('actionQueryBookInfo')
    }
    const handleReset = () => {
      store.commit('setQueryBookInit')
      store.dispatch('actionQueryBookInfo')
    }
    const onSubmit = () => {
      if (formData.searchType) {
        if (formData.searchType == 'author') {
          store.commit('setQueryBookArticlename', '')
          store.commit('setQueryBookAuthor', formData.keyword)
        } else {
          store.commit('setQueryBookAuthor', '')
          store.commit('setQueryBookArticlename', formData.keyword)
        }
        store.dispatch('actionQueryBookInfo')
      } else {
        _this.$message({
          type: 'info',
          message: '请选择搜索选项'
        })
      }
    }
    return {
      formData,
      onSubmit,
      handleCommandProcess,
      typeArr,
      lyArr,
      handleCommandType,
      handleCommandSort,
      handleCommandSubId,
      handleCommandly,
      handleCommandSize,
      handleReset,
      handleCommandOrder
    }
  }
})
</script>

<style scoped lang='scss'>
.dropdown{
  margin-right: 20px;
  float: left;
}
.tabBox{
  display: flex;
  overflow: hidden;
  .tabBoxLeft{
    overflow: hidden;
    .el-dropdown{
      float: left;
      margin-right: 20px;
    }
  }
  .tabBoxRight{
    width: 100%;
    flex: 1;
    overflow: hidden;
    .el-form{
      float: right;
    }
  }
}
</style>
