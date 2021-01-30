<template>
  <div class="login-box">
    <div class="login-logo">
      <h1>Read Admin</h1>
    </div>
    <el-form :model="login">
      <el-form-item>
        <el-input v-model="login.name" autocomplete="off" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="login.pwd" autocomplete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit" :loading="loadings">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'login',
  setup () {
    const store = useStore()
    const loadings = ref(false)
    const login = reactive({
      name: '',
      pwd: ''
    })
    const handleSubmit = () => {
      if (!(/^1[3456789]\d{9}$/.test(login.name))) {
        ElMessage.error('手机号码有误，请重填')
        return false
      }
      if (login.pwd.length < 6) {
        ElMessage.error('密码不能小于6位数')
        return false
      }
      loadings.value = true
      store.dispatch('actionLogin', login)
    }
    return {
      login,
      handleSubmit,
      loadings
    }
  }
})
</script>

<style lang="scss" scoped>
.login-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-top: 240px;
  flex-direction: column;
  align-items: center;
  background: url("~@/assets/login.svg");
  background-size: 100%;
  .login-logo {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .svg-icon {
      font-size: 48px;
    }
    img {
      height: 48px;
    }
    h1 {
      margin-left: 10px;
      margin-bottom: 0;
      font-size: 28px;
    }
  }
  .el-form{
    width: 300px;
  }
  .el-button{
    width: 100%;
  }
}
</style>
