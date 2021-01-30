<template>
  <div class="headerBox">
    <div class="headerBoxLeft">
      <i class="el-icon-s-fold" @click="handleClickCollapse"></i>
      <header-tab/>
    </div>
    <div class="headerBoxRight">
      <header-user/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import headerTab from './header/tab.vue'
import headerUser from './header/user.vue'
export default defineComponent({
  components: {
    headerTab,
    headerUser
  },
  setup () {
    const route: any = useRoute()
    const store = useStore()
    const collapse = computed(() => store.getters.globalCollapse)
    const handleClickCollapse = () => { store.commit('setCollapse', !collapse.value) }
    return {
      route,
      handleClickCollapse
    }
  }
})
</script>
<style lang="scss" scoped>
.headerBox{
  overflow: hidden;
  width: 100%;
  display: flex;
  .headerBoxLeft{
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    overflow: hidden;
    .el-icon-s-fold{
      float: left;
      margin-right: 20px;
      font-size: 20px;
      color:$grey666;
      cursor: pointer;
    }
  }
  .headerBoxRight{
    width: 100%;
    flex: 1;
    margin-left: 20px;
  }
}
</style>
