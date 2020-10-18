import { createStore } from 'vuex'
import { home } from './modules/home'
import { HomeState } from '@/typing'

export interface GlobalState {
  home: HomeState; // 某个页面，某个模块可以在这里增加
}

const store = createStore<GlobalState>({
  mutations: {
  },
  actions: {
  },
  modules: {
    home
  }
})

export default store
