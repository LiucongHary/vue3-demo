<template>
  <div class="home-header">
    <img src="" alt="" />
    <van-dropdown-menu>
      <van-dropdown-item
        :modelValue="category"
        :options="options"
        @change="change"
      />
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import { CATOGORY_TYPES } from '@/typing'
/* eslint-disable space-before-function-paren */
import { defineComponent, PropType, reactive, toRefs } from 'vue'

export default defineComponent({
  props: {
    category: {
      type: Number as PropType<CATOGORY_TYPES>
    }
  },
  emits: ['setCurrentCategory'],
  setup(props, context) {
    const state = reactive({
      options: [
        { text: '全部课程', value: CATOGORY_TYPES.ALL },
        { text: 'react课程', value: CATOGORY_TYPES.REACT },
        { text: 'vue课程', value: CATOGORY_TYPES.VUE },
        { text: 'node课程', value: CATOGORY_TYPES.NODE }
      ]
    })
    function change(value: CATOGORY_TYPES) {
      // eslint-disable-next-line vue/custom-event-name-casing
      context.emit('setCurrentCategory', value)
    }
    return {
      ...toRefs(state),
      change
    }
  }
})
</script>
<style lang="scss">
.home-header {
  width: 100%;
  height: 65px;
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 10px;
}
.van-dropdown-menu {
  padding: 0 28px;
}
.van-dropdown-menu {
  .van-dropdown-menu__bar {
    background-color: #2a2a2a;
  }
  .van-dropdown-menu__title {
    color: #fff;
  }
}
</style>
