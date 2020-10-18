<template>
  <div class="homeList">
    <van-card
      v-for="items in lessonList"
      :key="items.id"
      price="items.price"
      title="items.title"
      thumb="items.poster"
    >
      <template #tags>
        <van-tag plain>{{item.id}}</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script lang="ts">
/* eslint-disable space-before-function-paren */
import { defineComponent, PropType, toRefs } from 'vue'
import { Lessons } from '@/typing/index'

export default defineComponent({
  name: 'HomeList',
  props: {
    lessonList: {
      type: [] as PropType<Lessons[]>
    }
  },
  setup(props) {
    const state = {}
    console.log(props.lessonList)
    return {
      ...toRefs(state)
    }
  }
})
</script>
