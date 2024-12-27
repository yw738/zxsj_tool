import { createApp, h } from "vue";
import { Spin } from "ant-design-vue";

let instance = null;

// 定义全屏遮罩样式
/**
 * 2024-08-26
 * 去掉遮罩
*/
const style = {
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // background: "rgba(0, 0, 0, .05)",
  background: "rgba(0, 0, 0, 0)",
  zIndex: 99999,
  "pointer-events": "none",
};

function getInstance() {
  if (!instance) {
    const vn = createApp({
      data() {
        return {
          show: false,
          message: "Loading...",
          timeoutId: "loader",
        };
      },
      unmounted() {
        if (instance && instance.$el) {
          instance.$el.remove(); // 当组件卸载时，从DOM中移除元素以避免内存泄漏
        }
      },
      methods: {
        loading(val, timeout) {
          this.show = true;
          this.message = val || "加载中...";
          if (timeout) {
            this.timeoutId = setTimeout(() => {
              this.close();
            }, timeout); // 超时时间单位为毫秒
          }
        },
        close() {
          clearTimeout(this.timeoutId); // 清除定时器
          this.show = false;
        },
      },
      render() {
        return this.show
          ? h("div", { style }, [h(Spin, { tip: this.message })])
          : null;
      },
    });
    const ele = document.createElement("div");
    instance = vn.mount(ele);
    document.body.appendChild(ele);
  }
  return instance;
}

export default {
  ...Spin,
  show(val, timeout) {
    getInstance().loading(val, timeout);
  },
  hide() {
    getInstance().close();
  },
};
