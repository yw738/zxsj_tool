let submit = {
  title: "Submit Order ",
  tips: "Warm tips: Please carefully confirm the parameters of the order oh ",
  upFile: {
    title: "File Upload ",
    file: "File ",
    editFile: "Modify File ",
    btnName: "Upload {name} File ",
    rarTip:
      "Please upload the file in (.rar.zip) format, the file size is less than 50M ",
    xlsTip:
      "Please upload the file in (.xlsx.xls) format, the file size is less than 50M ",
  },

  money: {
    shopMoneyMsg: "Total amount",
    payMoneyMsg: "Amount payable",
  },
  submitBtn: "Submit",
};

// quote
let priceLabel = {
  pcb: {
    BoardCost: "Boardcost",
    CopperThicknessesCost: `Copper cost`,
    SurfaceFinishCost: "Plating fee",
    ProjectCost: "Project cost",
    TestCost: "Test fee",
    ProcessDifficultyCost: "Process cost",
    ColorCost: "Color cost",
  },
  smt: {
    ProjectCost: "Project cost",
    SmtCost: "Patch fee",
    DipCost: "Plugin fee",
    StencilFeeCost: "Stencil fee",
    SpecialProcessCost: "Process cost",
    OthersCost: "Other cost",
  },
};

export default {
  submit,
  priceLabel,
};
