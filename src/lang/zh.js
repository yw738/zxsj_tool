// 中文环境
import pcb from "./zh/pcb.js";
import smt from "./zh/smt.js";
import bom from "./zh/bom.js";
import pcba from "./zh/pcba.js";
import submit from "./zh/submit.js";

export default {
  header: {
    title: "PCB&PCBA一站式智能制造平台",
    welcomes: "尊敬的",
    register: "注册",
    login: "登录",
    centerNme: "个人中心",
    centerMenu1: "订单中心",
    centerMenu2: "收货地址",
    centerMenu3: "退出登录",
  },
  moneyUnit: "￥",
  day:'天',
  nav: {
    smt: "SMT贴片",
    bom: "BOM配单",
  },
  ...pcb,
  ...smt,
  ...bom,
  ...pcba,
  ...submit,

  rightBox: {
    delivery: {
      tit: "选择交期",
      table_col1: "选项",
      table_col2: "价格",
    },
    price: {
      name: "价格",
      detail: "明细",
      count: "总计",
      reset: "重置",
      submit: "立即下单",
      des: "具体价格以审核确认后为准",
      unit: "￥",
    },
  },
  btn: {
    cancel: "取消",
    confirm: "确定",
    tips:'去下PCBA单，享更多折扣'
  },
  upFileDes1:'上传文件只能是',
  upFileDes2:'文件大小不允许超过',
};
