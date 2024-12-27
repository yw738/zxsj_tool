import { smtFormDes } from "./formDes";

let smt = {
  leftnav1: "BOM Upload",
  leftnav2: "Fill in specifications",
  leftnav3: "General Options ",
  leftnav4: "Raw materials and Accessories ",
  leftnav5: "Processing Services",
  section1Tit: "Assembly Specifications",
  // section1Des:
  //   "Tips: Please confirm the parameters to avoid mistakes and unnecessary misunderstandings.",
  section1Des: "",
  section2Tit: "General Options",
  section3Tit: "Advanced Options",
  section4Tit: "Box-Build Services",
  //   bom 上传
  up: {
    tit: "Drag BOM file to this box",
    btn: "Upload BOM File",
    tips: "Support.XLSX.XLS. CSV format file, no more than 2M",
    safeTip:
      "Will keep your documents confidential and protect your intellectual property rights.",
    des: "Based on AI large model of components, accurate matching, automatic analysis of PIN points and material types",
  },
  //   bom 上传 左侧盒子
  upRightBox: {
    label1: "Number",
    label1_unit: "Pcs",
    label2: "Unit Price",
    label3: "Total Price",
    label4: "Full Days",
    label4_unit: "Day",
    btn: "View Match Results",
  },

  form: {
    BomMaterialSource: "Materials", // "电子物料",
    PCBBoardSize: "Size (panel)", //"PCB拼版尺寸",
    PCBBoardLength: "Length",
    PCBBoardWidth: "Width",
    ProductionNumber: "PCB Quantity", // "生产数量",
    SingleBoardSMTNumber: "SMD Solder Joints", //"单片贴片点数",
    SingleBoardTHNumber: "DIP Solder Joints", //"单片插件点数",
    SingleDoubleSide: "Assembly Side", // "单面/双面贴片",
    SingleBoardTHNumber_unit: "One", //"个",
    MaterialTypeNumber: "Number of Parts", //"物料种类",
    MaterialTypeNumber_unit: "Species", // "种",
    ProcessRequirements: "Technology", //"工艺要求",
    PCBBoardType: "PCB Board type", //"PCB板类型",
    SeparateBoardShipment: "Split Board Ship", //"分板出货",
    BrushThreeProofPaint: "Painting", //"刷三防漆",
    FirstItemConfirm: "First Confirmation", //"首件确认",

    ElectronicComponentBake: "Electronic Baking", //"电子器件烘烤",
    LinePadAddTin: "Line/pad tinning", //"线路/焊盘加锡",
    FunctionTest: "Function test", //"功能测试",
    ProgramBurn: "Program burn", //"程序烧录",
    SteelMeshFollowShipment: "Stencil delivery", //"钢网随货发货",
    BoardClean: "Boardclean ", //"板面清洁",
    PCBUseDomain: "Quality Standards", //"品质标准",
    X_RaySetNumber: "X-ray Test sets", //"X-ray检测套数",
    PCBBoardSource: "PCB Board", //"PCB线路板",
    TestInstrument: "Test Jig", //"测试工装",
    SteelMeshType: "Stencil Type", //"钢网",
    PCBAPackage: "Packaging Type", //"包装类型",
    IsFinishedProductAssemblyService: "Product assembly", //"是否成品装配服务",
    remark: "Remark",
    remark2:
      "Please complete the component details so that we can understand your requirements as clearly as possible.",
  },
  smtFormDes: smtFormDes,

  SingleDoubleSideList: {
    label1: "Single side ", //"单面",
    label2: "Double-sided", //"双面",
  },
};
let pcbDetail = {};

export default {
  smt,
};
