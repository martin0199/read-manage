<template>
  <el-breadcrumb separator="/">
    <template v-for="routeItem in route.matched" :key="routeItem.name">
      <el-breadcrumb-item :to="{ path: routeItem.path }">
        <el-dropdown v-if="routeItem.children.length">
          <span class="el-dropdown-link">
            {{ routeItem.meta.title }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <template v-for="childItem in routeItem.children" :key="childItem.name">
              <el-dropdown-item v-if="!childItem.meta.hidden">
                <router-link :to="{name: childItem.name}">
                {{ childItem.meta.title }}
                </router-link>
              </el-dropdown-item>
            </template>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="current" v-else>
          {{ routeItem.meta.title }}
        </div>
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup () {
    const route: any = useRoute()
    return {
      route
    }
  }
})
</script>
<style lang="scss" scoped>
.el-breadcrumb{
  color:$grey999;
  width: 100%;
  .current{
    margin-top: 13px;
  }
}
</style>
