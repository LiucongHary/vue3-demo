<template>
  <div class="home">
    <!-- 头部 -->
    <homeHeader
      :category="category"
      @setCurrentCategory="setCurrentCategory"
    ></homeHeader>

    <!-- 轮播图 -->
    <div style="margin-top:65px">
      <!-- <template #default> -->
      <homeSwiper></homeSwiper>
      <!-- </template> -->
      <!-- <template #fallback>
        <div>loading...</div>
      </template> -->
    </div>

    <!-- 列表 -->
    <homeList :lessonList="lessonList"></homeList>
  </div>
</template>

<script lang="ts">
/* eslint-disable space-before-function-paren */
import { GlobalState } from '@/store'
// import {IGlobalState} from '../../store/index'
import { computed, defineComponent, onMounted } from 'vue'
import { Store, useStore } from 'vuex'
import homeHeader from './home-header.vue'
import homeSwiper from './home-swiper.vue'
import homeList from './home-list.vue'
import { CATOGORY_TYPES } from '@/typing'
import * as Types from '@/store/action-types'

function useCategory(store: Store<GlobalState>) {
  const category = computed(() => {
    return store.state.home.currentCategory
  })
  function setCurrentCategory(category: CATOGORY_TYPES) {
    store.commit(`home/${Types.SET_CATEGORY}`, category)
  }
  return { category, setCurrentCategory }
}

function useLessonList(store: Store<GlobalState>) {
  const lessonList = computed(() => {
    return store.state.home.lessons.list
  })
  onMounted(() => {
    if (!lessonList.value.length) {
      store.dispatch(`home/${Types.SET_LESSON_LIST}`)
    }
  })
  return {
    lessonList
  }
}

export default defineComponent({
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeList
  },

  setup() {
    // 分类
    const store = useStore<GlobalState>()
    const { category, setCurrentCategory } = useCategory(store)

    // 列表获取
    const { lessonList } = useLessonList(store)
    return {
      category,
      setCurrentCategory,
      lessonList
    }
  }
})
</script>
