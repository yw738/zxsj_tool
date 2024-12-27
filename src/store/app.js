import { defineStore } from "pinia";
import { message } from "ant-design-vue";
import { localStorage, jsCookie } from "@/utils/storage";

export const useApp = defineStore("app", {
  state: () => ({
    locale: localStorage.get("language"),
  }),

  getters: {},

  actions: {
    async RESET_STATE() {
      this.$reset();
    },
    setLocale(name = "zh") {
      // this.locale = name;
    },
  },
});
