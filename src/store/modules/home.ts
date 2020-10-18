/* eslint-disable space-before-function-paren */
import { Module } from 'vuex'
import { CATOGORY_TYPES, HomeState, Lessons, Slider } from '@/typing/index'
import { GlobalState } from '..'
import * as Types from '../action-types'
import { getLessons, getSliders } from '@/api/home'

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
  state,
  mutations: {
    [Types.SET_CATEGORY](state, payload: CATOGORY_TYPES) {
      state.currentCategory = payload
    },
    [Types.SET_SLIDER_LIST](state, payload: Slider[]) {
      state.sliders = payload
    },
    [Types.SET_LOADING](state, payload: boolean) {
      state.lessons.loading = payload
    },
    [Types.SET_LESSON_LIST](state, payload: Lessons) {
      state.lessons.list = [...state.lessons.list, ...payload.list]
      state.lessons.hasMore = payload.hasMore
      state.lessons.offset = payload.offset
    }
  },
  actions: {
    async [Types.SET_SLIDER_LIST]({ commit }) {
      const sliders = await getSliders<Slider>()
      commit(Types.SET_SLIDER_LIST, sliders)
    },
    async [Types.SET_LESSON_LIST]({ commit }) {
      console.log(state.lessons)

      if (state.lessons.loading) {
        return
      }
      if (!state.lessons.hasMore) {
        return
      }
      commit(Types.SET_LOADING, true)
      const lessons = await getLessons<Lessons>(
        state.currentCategory,
        state.lessons.offset,
        state.lessons.limit
      )
      commit(Types.SET_LESSON_LIST, lessons)
      commit(Types.SET_SLIDER_LIST, false)
    }
  }
}

export { home }
