import { asyncAndCommit } from '@/until/mixinHttp'
import { Module } from 'vuex'
import { ACCESS_TOKEN } from '@/until/define'
import { getStorage } from '@/until/localStorage'
interface BookState {
  query: {
    data: any;
    order: string;
    fullflag: number;
    typeid: number;
    page: number;
    size: number;
    articlename: string;
    author: string;
    siteid: number;
    num: number;
    biaoshi: string;
    sortid: number;
    subid: number;
  };
}
const state = {
  query: {
    data: '',
    order: 'articleid',
    fullflag: -1,
    typeid: -1,
    page: 1,
    size: -1,
    articlename: '',
    author: '',
    siteid: -1,
    num: 50,
    biaoshi: '',
    sortid: -1,
    subid: -1
  }
}

type BookStateType = typeof state
const login: Module<BookStateType, any> = {
  state: state,
  mutations: {
    setQueryBookData: (state: BookState, value) => { state.query.data = value; state.query.articlename = ''; state.query.author = '' },
    setDelectBookData: (state: BookState, value) => { state.query.data = '' },
    setQueryBookPage: (state: BookState, value) => { state.query.page = value },
    setQueryBookTypeId: (state: BookState, value) => { state.query.typeid = value },
    setQueryBookSubId: (state: BookState, value) => { state.query.subid = value },
    setQueryBookSortId: (state: BookState, value) => { state.query.sortid = value },
    setQueryBookFullFlag: (state: BookState, value) => { state.query.fullflag = value },
    setQueryBookOrder: (state: BookState, value) => { state.query.order = value },
    setQueryBookSiteid: (state: BookState, value) => { state.query.siteid = value },
    setQueryBookArticlename: (state: BookState, value) => { state.query.articlename = value },
    setQueryBookAuthor: (state: BookState, value) => { state.query.author = value },
    setQueryBookSize: (state: BookState, value) => { state.query.size = value },
    setQueryBookBiaoshi: (state: BookState, value) => { state.query.biaoshi = value },
    setQueryBookInit: (state: BookState) => {
      state.query.order = 'articleid'
      state.query.fullflag = -1
      state.query.typeid = -1
      state.query.page = 1
      state.query.size = -1
      state.query.articlename = ''
      state.query.author = ''
      state.query.siteid = -1
      state.query.biaoshi = ''
    }
  },
  actions: {
    actionQueryBookInfo: ({ commit, state }) => {
      const config = {
        url: '/admin/book/query.php',
        params: {
          page: state.query.page,
          order: state.query.order,
          fullflag: state.query.fullflag,
          typeid: state.query.typeid,
          token: getStorage(ACCESS_TOKEN),
          articlename: state.query.articlename,
          author: state.query.author,
          size: state.query.size,
          siteid: state.query.siteid,
          num: state.query.num,
          biaoshi: state.query.biaoshi,
          sortid: state.query.sortid,
          subid: state.query.subid
        },
        method: 'get'
      }
      return asyncAndCommit('setQueryBookData', commit, config)
    },
    actionDelectBookInfo: ({ commit }, param) => {
      const config = {
        url: '/admin/book/delect.php',
        params: {
          aid: param,
          token: getStorage(ACCESS_TOKEN),
          permission: true
        },
        method: 'get'
      }
      return asyncAndCommit('setDelectBookData', commit, config)
    }
  },
  getters: {
    bookQueryInfoData: (state: BookState) => state.query.data,
    bookQueryInfoPage: (state: BookState) => state.query.page,
    bookQueryInfoNum: (state: BookState) => state.query.num
  }
}
export default login
