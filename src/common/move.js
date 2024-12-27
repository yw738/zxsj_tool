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
 * 实现 表单拖拽的 js
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

export function moveDraggable(modalTitleRef) {
  const { x, y, isDragging } = useDraggable(modalTitleRef);

  const startX = ref(0);
  const startY = ref(0);
  const startedDrag = ref(false);
  const transformX = ref(0);
  const transformY = ref(0);
  const preTransformX = ref(0);
  const preTransformY = ref(0);
  const dragRect = ref({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  watch([x, y], () => {
    if (!startedDrag.value) {
      startX.value = x.value;
      startY.value = y.value;
      const bodyRect = document.body.getBoundingClientRect();
      const titleRect = modalTitleRef.value.getBoundingClientRect();
      dragRect.value.right = bodyRect.width - titleRect.width;
      dragRect.value.bottom = bodyRect.height - titleRect.height;
      preTransformX.value = transformX.value;
      preTransformY.value = transformY.value;
    }
    startedDrag.value = true;
  });
  watch(isDragging, () => {
    if (!isDragging) {
      startedDrag.value = false;
    }
  });
  watchEffect(() => {
    if (startedDrag.value) {
      transformX.value =
        preTransformX.value +
        Math.min(Math.max(dragRect.value.left, x.value), dragRect.value.right) -
        startX.value;
      transformY.value =
        preTransformY.value +
        Math.min(Math.max(dragRect.value.top, y.value), dragRect.value.bottom) -
        startY.value;
    }
  });
  const transformStyle = computed(() => {
    return {
      transform: `translate(${transformX.value}px, ${transformY.value}px)`,
    };
  });
  //最后将定义的方法及参数return出去
  return {
    transformStyle,
  };
}
