import { pcbFormDes } from "./formDes.js";
let pcb = {
  leftnav1: "Upload",
  leftnav2: "Specs",
  leftnav3: "General",
  leftnav4: "High-spec",
  leftnav5: "Advanced",

  up: {
    tit: "Upload Gerber file",
    tips: "Drop your Gerber file here, Only accepts ZIP or RAR, maximum 50 MB",
    safeTip:
      "All uploaded content is secure and confidential, protecting your intellectual property rights",
    des: "The system will automatically analyze and fill in quote parameters such as PCB size and minimum aperture",
  },

  showPcb: {
    btn: "Re upload PCB file",
    okTips:
      "Your Gerber file has been uploaded successfully, the parameters in the parsing file have been automatically filled, in order to ensure the information is correct, please check the parameters before placing an order",
    errTip:
      "Your PCB file has been uploaded successfully, but the parameters cannot be analyzed, please manually fill in the parameters to order",
    view: "Gerber view",
  },
  section1Tit: "PCB Specifications",
  section1Des:
    "Provide high quality Tg sheet selection, the latest process capabilities",
  section2Tit: "General Options",
  section3Tit: "High-spec Options",
  section4Tit: "Advanced Options",
  section5Tit: "Assembly Services",

  form: {
    boardMaterialType: "Base Material",
    boardLayer: "Layers",
    mergeBoard_num: "Different Design", //拼板款数
    shipmentMode: "Board Type",
    mergeBoard_Rule: "Patchwork rule",
    boardTitle1: "Size (single)",
    boardTitle2: "Size (panel)",

    MergeBoard_Deliver: "Delivery form",
    MergeBoard_Deliver_inpu1: "Number of transverse pieces",
    MergeBoard_Deliver_inpu2: "Number of longitudinal pieces",
    MergeBoard_Deliver_demo: "Demo",
    MergeBoard_CraftRim: "Break-away rail",
    MergeBoard_IsForkPlate: "X-out allowance in panel",
    MergeBoard_IsForkPlate_tip: "There will be a fee for non-acceptance.",
    BoardNumber: "Quantity",
    tg: "TG",
    BoardThickness: "Thickness(mm)", //板子厚度
    OuterThickness: "Finished Copper", //铜箔厚度(外层)
    InnerThickness: "Inner Copper", //内层铜厚
    MinimumLineWidth: "Min Spacing", //"最小线宽/线距",
    MinimumPoreSize: "Min Hole Size", // "最小过孔mm",
    SoldermaskColor: "PCB Color", //"阻焊颜色",
    CharacterColor: "Silkscreen", //"字符颜色",
    SurfaceFinish: "Surface Finish", // "表面处理",
    SoldermaskCover: "Solder mask", //"阻焊覆盖",
    TestType: "Test method", //"测试方法",

    NeedImpedanceControl: "Impedance", //"阻抗",
    NeedGoldenFinger: "Gold Fingers", //"金手指倒斜边",
    NeedHoleCopper25UM: "Porous copper", //"孔铜25um",
    BlueGlue: "Blue glue", //"蓝胶",
    NeedHalfHole: "Half hole", //"半孔",
    NeedMetallicEdge: "Metal edge", //"金属包边",
    NeedPressAcceptHole: "Crimp hole", // "压接孔",
    NeedCountersink: "Counterbore", //"沉头孔",
    NeedDishMiddleHole: "Disc hole", //"盘中孔",
    NeedStackup: "Need lamination", //"要求叠层",
    NeedBuriedVias: "Blind buried hole", //"盲埋孔",
    remark: "Remark", //"其它要求",
    remark2: "Customer remarks",

    PackingRequirement: "Package Box", //"包装要求",
    NeedIntervalWhitePaper: "Paper between", //"隔白纸服务",
    NeedULIdentify: "UL mark", //"UL标识",
    ShipmentReport: "Ship report", //"出货报告",
    ShipmentStandard: "Ship standard", // "出货标准",
    smtserve: "SMT patch", //"SMT贴片服务",
  },
  formdes: pcbFormDes,

  rightTit: "PCB price and delivery",
  rightdes: "view detail",

  // 参数变动提示弹框
  model: {
    tit: "Tips",
    contentS: "Your choice",
    contentE: "Parameters have changed, please check carefully",
  },

  option: {
    yes: "YES",
    no: "NO",
  },
  NeedHalfHoleList: {
    value1: "1 side half hole",
    value2: "2 side half hole",
    value3: "3 side half hole",
  },
  NeedMetallicEdgeList: {
    value1: "1 Wrap the edges",
    value2: "2 Wrap the edges",
    value3: "3 Wrap the edges",
    value4: "4 Wrap the edges",
  },
  //
  PackingRequirementList: {
    value1: "SCSPCBA Package",
    // value2: "PII Package",
    value3: "Blank packing",
  },
  NeedIntervalWhitePaperList: {
    value1: "No",
    value2: "Partition paper",
  },
  ShipmentReportList: {
    value1: "SCSPCBA Format",
    value2: "Customer Format",
  },
  ShipmentStandardList: {
    value1: "Customer standard",
  },

  CraftRimList: {
    label1: "None",
    label2: "Up and down",
    label3: "Around",
    label4: "All sides",
  },
  // 其它数量
  singlePieceNum: {
    label: "Other quantities",
    tips: "Quantity*length*width >=",
    placeholder: "Please enter other quantities",
  },

  // 实例
  example: {
    title: "Mosaic Example (for reference only)",
    label: "Size after collage",
    label2: "Quantity",
    label3: "Area",
    tit: "Contiguous diagram",
  },
};

let pcbRule = {
  BoardLength: "Single piece size cannot be 0",
  BoardNumber: "The number of boards cannot be 0",
  MergeBoard_Length: "The board size cannot be 0",
  MergeBoard_Number: "The number of boards cannot be 0",
};

export default {
  pcb,
  pcbRule,
};
