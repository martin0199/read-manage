<template>
  <el-menu
    :default-openeds="['1']"
    :uniqueOpened="true"
    default-active="1-1"
    text-color="#fff"
    background-color="#001529"
    active-text-background="#1890ff"
    active-text-color="#1890ff"
    :collapse="collapses"
  >
    <el-submenu
      v-for ="list in currentRoute"
      :key="list.meta.sort"
      :index="list.meta.index"
    >
      <template #title>
        <i :class="list.meta.icon"></i>
        <span>{{list.meta.title}}</span>
      </template>
      <el-menu-item-group>
        <router-link
          v-for ="item in list.children"
          :key="item.meta.sort"
          :to="item.path"
        >
          <el-menu-item :index="item.meta.index">
            <i :class="item.meta.icon"></i>{{item.meta.title}}
          </el-menu-item>
        </router-link>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { routes } from '@/router'
import { useStore } from 'vuex'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  setup () {
    const route = useRoute()
    const store = useStore()
    const currentRoute: any = routes[0].children
    const collapses = computed(() => store.getters.globalCollapse)
    return {
      currentRoute,
      collapses
    }
  }
})
</script>
<style lang="scss" scoped>
.el-menu{
  margin-top: 60px;
  width: 100%;
  .el-menu-item-group{
    margin-top:-10px
  }
  .el-menu-item.is-active{
    background-color: #409EFF!important;
    color:#fff!important
  }
  .el-submenu .el-menu-item{
    height:40px;
    line-height: 40px;
  }
}
</style>
