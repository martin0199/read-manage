<template>
  <el-form ref="form" :model="form" label-width="300px">
    <el-form-item label="小说列表一页显示几行">
      <el-input v-model="form.bookList"></el-input>
    </el-form-item>
    <el-form-item label="小说采集一页显示几行">
      <el-input v-model="form.bookCollect"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
