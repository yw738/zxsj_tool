import { defineStore } from "pinia";
import axios from "axios";
import { message } from "ant-design-vue";
import { localStorage, jsCookie } from "@/utils/storage";
import { loginApi } from "@/api/login";
import { orderData } from "@/pages/Desktop/CalculatePrice/module/quotationTime";

export const useOrder = defineStore("order", {
  state: () => ({
    pcbFileData: null, // 绑定的文件数据
    pcbFile: null,
    pcbOrderData: null,

    bomFile: null,
    smtOrderData: null,
    bomFileData: null,

    fromPage: "smt", //从哪儿过来 默认smt

    // bom 解析相关
    signalRMsg: null,
    fileProg: 0, //bom 解析总进度
    msgArr: [],
  }),

  getters: {},

  actions: {
    RESET_STATE() {},
    clear() {
      this.pcbFileData = null; // 绑定的文件数据
      this.pcbFile = null;
      this.pcbOrderData = null;
      this.bomFile = null;
      this.smtOrderData = null;
      this.bomFileData = null;
      this.fromPage = "smt"; //从哪儿过来
    },
    clearWss(isClearArr=false) {
      if(isClearArr){
        this.msgArr = []; // 绑定的文件数据
        return
      }
      this.signalRMsg = null; // 绑定的文件数据
      this.fileProg = 0; // 绑定的文件数据
      this.msgArr = []; // 绑定的文件数据
    },
    setOrderData({ type, data }) {
      /**
       * 设置 来 源
       * smt || pcb
       * 没有默认smt
       */
      this.fromPage = type;
      if (type == "pcb") {
        this.pcbOrderData = data;
      } else if (type == "smt") {
        this.smtOrderData = data;
      }
    },
    setOrderFile({ type, file, fileData }) {
      if (type == "pcb") {
        this.pcbFile = file;
        this.pcbFileData = fileData;
      } else if (type == "smt") {
        this.bomFile = file;
        this.bomFileData = fileData;
      }
    },

    setSignalRMsg(item) {
      this.msgArr.push(item);
      this.signalRMsg = item;
    },

    setFileProg(num = 0) {
      if (num > 100) this.fileProg = 100;
      if (num < 0) this.fileProg = 0;
      this.fileProg = num;
    },
  },
});
