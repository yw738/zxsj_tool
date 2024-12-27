import { smtFormDes } from "./formDes";

let smt = {
  leftnav1: "BOM上传",
  leftnav2: "规格填写",
  leftnav3: "制造工艺",
  leftnav4: "原料辅料",
  leftnav5: "加工服务",
  section1Tit: "SMT规格填写",
  section1Des: "特别注意：请确认参数，以免出错，产生不必要的误会。",
  section2Tit: "制造工艺",
  section3Tit: "原材料/辅料",
  section4Tit: "一体化装配加工服务",
  //   bom 上传
  up: {
    tit: "拖拽BOM文件至此框",
    btn: "上传BOM文件",
    tips: "支持 .XLSX .XLS .CSV 格式文件,不超过2M",
    safeTip: "将对您的文件绝对保密，保护您的知识产权。",
    des: "基于元器件AI大模型，精准匹配，自动解析PIN点及物料种类",
  },
  //   bom 上传 左侧盒子
  upRightBox: {
    label1: "采购套数",
    label1_unit: "套",
    label2: "单套价格",
    label3: "总价格",
    label4: "齐套天数",
    label4_unit: "天",
    btn: "查看匹配结果",
  },

  form: {
    BomMaterialSource: "电子物料",
    PCBBoardSize: "PCB拼版尺寸",
    PCBBoardLength: "长度",
    PCBBoardWidth: "宽度",
    ProductionNumber: "生产数量",
    SingleDoubleSide:'单面/双面贴片',
    SingleBoardSMTNumber: "单片贴片点数",
    SingleBoardTHNumber: "单片插件点数",
    SingleBoardTHNumber_unit: "个",
    MaterialTypeNumber: "物料种类",
    MaterialTypeNumber_unit: "种",
    ProcessRequirements: "工艺要求",
    PCBBoardType: "PCB板类型",
    SeparateBoardShipment: "分板出货",
    BrushThreeProofPaint: "刷三防漆",
    FirstItemConfirm: "首件确认",

    ElectronicComponentBake: "电子器件烘烤",
    LinePadAddTin: "线路/焊盘加锡",
    FunctionTest: "功能测试",
    ProgramBurn: "程序烧录",
    SteelMeshFollowShipment: "钢网随货发货",
    BoardClean: "板面清洁",
    PCBUseDomain: "品质标准",
    X_RaySetNumber: "X-ray检测套数",
    PCBBoardSource: "PCB线路板",
    TestInstrument: "测试工装",
    SteelMeshType: "钢网",
    PCBAPackage: "包装类型",
    IsFinishedProductAssemblyService: "是否成品装配服务",
    remark: "备注及特殊要求",
    remark2: "请填写元件详细信息，以便我们尽可能清楚地了解您的要求。",

  },
  smtFormDes: smtFormDes,

  SingleDoubleSideList: {
    label1: "单面",
    label2: "双面",
  },

  
};
let pcbDetail = {};

export default {
  smt,
};
