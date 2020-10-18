import { Module } from 'vuex'
import { CATOGORY_TYPES, HomeState } from '@/typing/index'
import { GlobalState } from '..'

// 首页存储的数据
const state: HomeState = {
  currentCategory: CATOGORY_TYPES.ALL,
  sliders: [],
  lessons: {
    hasMore: true, // 有没有更多数据
    loading: false, // 默认没有正在加载
    offset: 0,
    limit: 5,
    list: [] // 当前显示在页面上课程
  }

}

// Module  参数1 自己状态 2 全局状态
const home: Module<HomeState, GlobalState> = {
  namespaced: true,
  state
}

export { home }
