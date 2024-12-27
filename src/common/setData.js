import {
  ref,
  toRefs,
  computed,
  reactive,
  watch,
  defineEmits,
  watchEffect,
} from "vue";
import { useDraggable } from "@vueuse/core";

/**
   * 处理 数据的 js
   * eg:
   *  <template #modalRender="{ originVNode }">
        <div :style="transformStyle">
          <component :is="originVNode" />
        </div>
      </template>
  
      import { moveDraggable } from "@/common/move";
      const modalTitleRef = ref(null);
      let { transformStyle } = moveDraggable(modalTitleRef);
  */

/**
 * 处理 data 数据
 * 把data数据转为json 格式
 */
export function setData(data) {
  let json = {};
  try {
    if (typeof data == "string" && data.includes("{")) {
      json = JSON.parse(data);
    } else {
      json = data;
    }
  } catch (error) {
    json = data;
  }

  return json;
}
