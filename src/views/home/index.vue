<template>
  <div class="home">
    <!-- 头部 -->
    {{category}}
    <homeHeader></homeHeader>

    <!-- 轮播图 -->
    <homeSwiper></homeSwiper>

    <!-- 列表 -->
    <homeList></homeList>
  </div>
</template>

<script lang="ts">
import { GlobalState } from '@/store'
// import {IGlobalState} from '../../store/index'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import homeHeader from './home-header.vue'
import homeSwiper from './home-swiper.vue'
import homeList from './home-list.vue'

export default defineComponent({
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeList
  },

  setup () {
    const store = useStore<GlobalState>()

    const category = computed(() => {
      return store.state.home.currentCategory
    })
    return {
      category
    }
  }
})
</script>
