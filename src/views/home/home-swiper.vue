<template>
  <div class="homeSwiper">
    <van-swipe class="my-swipe" v-if="sliderList.length">
      <van-swipe-item v-for="item in sliderList" :key="item.url">
        <img :src="item.url" alt=""  style="width:100%"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { GlobalState } from '@/store'
/* eslint-disable space-before-function-paren */
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import * as Types from '@/store/action-types'

export default defineComponent({
  name: 'HomeSwiper',
  setup() {
    const store = useStore<GlobalState>()
    const sliderList = computed(() => {
      return store.state.home.sliders
    })
    if (sliderList.value.length === 0) {
      store.dispatch(`home/${Types.SET_SLIDER_LIST}`)
    }
    return {
      sliderList
    }
  }
})
</script>
