<template>
  <div class="home">
    <!-- 头部 -->
    {{ category }}
    <homeHeader
      :category="category"
      @setCurrentCategory="setCurrentCategory"
    ></homeHeader>

    <!-- 轮播图 -->
    <homeSwiper></homeSwiper>

    <!-- 列表 -->
    <homeList></homeList>
  </div>
</template>

<script lang="ts">
/* eslint-disable space-before-function-paren */
import { GlobalState } from '@/store'
// import {IGlobalState} from '../../store/index'
import { computed, defineComponent } from 'vue'
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

export default defineComponent({
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeList
  },

  setup() {
    const store = useStore<GlobalState>()

    const { category, setCurrentCategory } = useCategory(store)
    return {
      category,
      setCurrentCategory
    }
  }
})
</script>
