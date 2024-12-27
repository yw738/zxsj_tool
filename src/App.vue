<template>
  <router-view></router-view>
</template>

<script setup>
import {
  provide,
  ref,
  createVNode,
  toRefs,
  onBeforeMount,
  watch,
  nextTick,
  h,
  onMounted,
} from "vue";
</script>

<style lang="scss">
@import "./common/app.scss"; // 更改 单选的选中css
</style>
