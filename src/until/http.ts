import axios from 'axios'
import store from '@/store'
const axiosInstance = axios.create({
  timeout: 1000 * 8,
  headers: { 'content-type': 'application/json; charset=UTF-8' },
  baseURL: process.env.VUE_APP_URL
})
axiosInstance.interceptors.request.use(
  config => {
    store.commit('setError', '')
    config.cancelToken = new axios.CancelToken(function (c) {
      const arag = [c, config.url]
      store.commit('setHttpList', arag)
    })
    return config
  },
  error => Promise.reject(error)
)
axiosInstance.interceptors.response.use(
  response => {
    setTimeout(() => {
      store.commit('removeHttpList', response.config.url)
    }, 200)
    return Promise.resolve(response)
  },
  error => {
    setTimeout(() => {
      store.commit('removeHttpList', error.config.url)
    }, 200)
    store.commit('setError', error.message)
    return Promise.reject(error.response)
  }
)
export default axiosInstance
