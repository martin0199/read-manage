import { asyncAndCommit } from '@/until/mixinHttp'
import { setStorage } from '@/until/localStorage'
import { ACCESS_TOKEN } from '@/until/define'
import { Module } from 'vuex'
import { ElMessage } from 'element-plus'
import router from '@/router'
interface LoginState {
  userid: number | string;
  username: string;
  token: string;
  groupid: number;
}
const state = {
  userid: '',
  username: '',
  token: '',
  groupid: 0
}
type loginStateType = typeof state
const login: Module<loginStateType, any> = {
  state: state,
  mutations: {
    setLogin: (state: LoginState, value) => {
      if (value.code == 200) {
        state.userid = value.data.userid
        state.username = value.data.username
        state.token = value.data.token
        state.groupid = value.data.groupid
        setStorage(ACCESS_TOKEN, state.groupid + '_' + value.data.token, 500000)
      }
      ElMessage.success({
        message: value.message,
        type: 'success'
      })
      const toPath = decodeURIComponent((router.currentRoute.value.query?.redirect || '/') as string)
      toPath ? router.push(toPath) : router.push('/')
    }
  },
  actions: {
    actionLogin: ({ commit }, params: string[]) => {
      const config = {
        url: '/admin/book/login.php',
        params: params,
        method: 'get'
      }
      return asyncAndCommit('setLogin', commit, config)
    }
  },
  getters: {
    loginData: (state: LoginState) => state,
    loginGroupid: (state: LoginState) => state.groupid
  }
}
export default login
