<template>
{{data}}
  <div class="pop">
    <div class="popBox">
      <el-form label-width="80px" :model="data">
        <el-form-item label="小说名称">
          <el-input v-model="formData.name" :value="data.articlename" type="text"></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-select placeholder="频道" class="select">
            <el-option label="男频" value="shanghai"></el-option>
            <el-option label="女频" value="beijing"></el-option>
          </el-select>
          <el-select placeholder="大类" class="select">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select placeholder="小类" class="select">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标签">
          <el-input v-model="formData.type" :value="data.tag" type="text"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="formData.type" :value="data.author" type="text"></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="formData.type" :value="data.intro" type="text"></el-input>
        </el-form-item>
        <el-form-item label="写作进度">
          <el-radio v-model="radio" label="0">连载</el-radio>
          <el-radio v-model="radio" label="1">完结</el-radio>
        </el-form-item>
      </el-form>
      <div class="popFotter">
        <el-button @click="handleRevisePop(scope.row)" type="text">确认修改</el-button>
        <el-button type="text" @click="handleClosePop">取消</el-button>
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, reactive, ref, toRef, toRefs } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    popData: {
      type: Object
    }
  },
  setup (props) {
    const store = useStore()
    const _this = getCurrentInstance().ctx
    const formData = reactive({
      name: '',
      region: '',
      type: ''
    })
    // eslint-disable-next-line vue/no-setup-props-destructure
    const data = props.popData
    const handleClosePop = () => {
      _this.$emit('handleClosePop')
    }
    const handleRevisePop = () => {
      console.log(store)
    }
    return {
      handleClosePop,
      handleRevisePop,
      formData,
      data
    }
  }
})
</script>

<style scoped lang='scss'>
.pop{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  bottom: 0;
  left:0;
  right:0;
  background: $white;
  .popBox{
    overflow: hidden;
    width: 600px;
    margin-left: 200px;
    .select{
      width: 173px!important;
    }
  }
}
</style>
