<template>
  <div>
    <div class="mainbox">
      <a-card :bordered="true">
        <a-tabs
          v-model:activeKey="activeKey"
          hide-add
          type="editable-card"
          @edit="onEdit"
        >
          <template #tabBarExtraContent>
            <div>
              <a-button @click="add">加种类</a-button>
            </div>
          </template>
          <a-tab-pane
            v-for="pane in panes"
            :key="pane.key"
            :tab="pane.title"
            :closable="pane.closable"
          >
            <!-- 222 -->
            <TabPlan />
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </div>
  </div>
</template>

<script setup>
/**
 * 下单
 */
import { useRouter, useRoute } from "vue-router";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";

import {
  onBeforeMount,
  onMounted,
  ref,
  watch,
  reactive,
  toRefs,
  nextTick,
  computed,
} from "vue";
import { useUser } from "@/store/user.js";
import { localStorage } from "@/utils/storage";
import TabPlan from "./tabPlan.vue";
const panes = ref([
  {
    title: "名称 1",
    key: "1",
  },
  {
    title: "名称 1",
    key: "2",
  },
]);
const activeKey = ref(panes.value[0].key);
const newTabIndex = ref(100);
const add = () => {
  activeKey.value = `${newTabIndex.value++}`;
  panes.value.push({
    title: `名称 ${activeKey.value}`,
    key: activeKey.value,
  });
};
const remove = (targetKey) => {
  let lastIndex = 0;
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1;
    }
  });
  panes.value = panes.value.filter((pane) => pane.key !== targetKey);
  if (panes.value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = panes.value[lastIndex].key;
    } else {
      activeKey.value = panes.value[0].key;
    }
  }
};
const onEdit = (targetKey) => {
  remove(targetKey);
};
</script>

<style scoped lang="scss">
.mainbox {
  width: 800px;
  position: absolute;
  left: calc(50% - 400px);
  top: 30px;
}
</style>
