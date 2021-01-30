import { createStore } from 'vuex'
import { App } from 'vue'

const module: any = []
const file = require.context('./module', true, /\.ts/)
file.keys().forEach((key) => {
  module.push(file(key).default || file(key))
})

interface GlobalState {
  globalLoading: boolean;
  error: string;
  httpList: Array<string>;
  collapse: boolean;
}
const store = createStore({
  state: {
    globalLoading: false,
    error: '',
    httpList: [],
    collapse: false
  },
  mutations: {
    setGlobalLoading: (state: GlobalState, value: boolean) => { state.globalLoading = value },
    setError: (state: GlobalState, value: string) => { state.error = value },
    setHttpList: (state: GlobalState, value: any) => {
      const rel = state.httpList.findIndex(e => e[1] === value[1])
      rel === -1 ? state.httpList.push(value) : value[1]('error')
    },
    removeHttpList: (state: GlobalState, value: string) => {
      const rel = state.httpList.findIndex(e => e[1] === value)
      rel !== -1 && state.httpList.splice(rel, 1)
    },
    setCollapse: (state: GlobalState, value: boolean) => {
      state.collapse = value
    }
  },
  getters: {
    globalLoading: (state: GlobalState) => state.globalLoading,
    globalError: (state: GlobalState) => state.error,
    globalHttpList: (state: GlobalState) => state.httpList,
    globalCollapse: (state: GlobalState) => state.collapse
  },
  modules: {
    ...module
  }
})

export function setupStore (app: App) {
  app.use(store)
}
export default store
