let submit = {
  title: "提交订单",
  tips: "温馨提示：请仔细确认好参数下单哦",
  upFile: {
    title: "文件上传",
    file: "文件",
    editFile: "修改文件",
    btnName: "上传{name}文件",
    rarTip: "上传文件请使用 (.rar .zip)格式，文件大小50M以内",
    xlsTip: "上传文件请使用 (.xlsx .xls)格式，文件大小50M以内",
  },

  money: {
    shopMoneyMsg: "1个订单， 商品总金额",
    payMoneyMsg: "应付金额",
  },
  submitBtn: "提交订单",
};

// 计价
let priceLabel = {
  pcb: {
    BoardCost: "板费",
    CopperThicknessesCost: "铜厚费",
    SurfaceFinishCost: "喷镀费",
    ProjectCost: "工程费",
    TestCost: "测试费",
    ProcessDifficultyCost: "工艺难度费",
    ColorCost: "颜色费",
  },
  smt:{
    ProjectCost:'工程费',
    SmtCost:'贴片费',
    DipCost:'插件费',
    StencilFeeCost:'钢网费',
    SpecialProcessCost:'特殊工艺费',
    OthersCost:'其他费用',
  }
};

export default {
  submit,
  priceLabel
};
