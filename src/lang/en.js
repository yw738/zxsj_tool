// en环境
import pcb from "./en/pcb.js";
import smt from "./en/smt.js";
import bom from "./en/bom.js";
import pcba from "./en/pcba.js";
import submit from "./en/submit.js";



export default {
  header: {
    // title: "PCB&PCBA Intelligent manufacturing platform",
    title: "TURNKEY PCBA QUOTE & ORDER ONLINE",
    welcomes: "Respectful",
    register: "Register",
    login: "Login",
    centerNme: "Personal",
    centerMenu1: "Order",
    centerMenu2: "Address",
    centerMenu3: "Exit",
  },
  moneyUnit: "$",
  day:'Day',
  nav: {
    smt: "SMT ",
    bom: "BOM ",
  },
  ...pcb,
  ...smt,
  ...bom,
  ...pcba,
  ...submit,

  rightBox: {
    delivery: {
      tit: "Delivery",
      table_col1: "Option",
      table_col2: "Price",
    },
    price: {
      name: "Price",
      detail: "Detail",
      count: "Total",
      reset: "Reset",
      submit: "Submit",
      des: "The price is subject to review and confirmation",
      unit: "$",
    },
  },
  btn: {
    cancel: "Cancel",
    confirm: "Confirm",
    tips:'To PCBA order and get more discount'
  },
  upFileDes1:'Uploading files can only be',
  upFileDes2:'The file size must not exceed that of the uploaded file',
};
