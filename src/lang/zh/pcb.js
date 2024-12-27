import { pcbFormDes } from "./formDes.js";

let pcb = {
  leftnav1: "上传文件",
  leftnav2: "规格选择",
  leftnav3: "工艺信息",
  leftnav4: "特殊信息",
  leftnav5: "个性化",

  up: {
    tit: "上传gerber文件",
    tips: "仅接受 zip 或 rar，最大 50 MB",
    safeTip: "所有上传内容都是安全且保密的，保护您的知识产权",
    des: "上传Gerber/PCB文件，系统将自动分析并填充PCB尺寸、最小孔径等计价参数",
  },

  showPcb: {
    btn: "重新上传PCB文件，自动解析文件",
    okTips:
      "您的Gerber文件已上传成功，解析文件中的参数已自动填充，为保障信息无误，请核对参数后下单",
    errTip: "您的PCB文件已上传成功，但无法解析参数，请手动填写参数下单",
    view: "Gerber在线查看器",
  },
  section1Tit: "PCB规格选择",
  section1Des: "提供优质高Tg板材选择，最新制程能力",
  section2Tit: "PCB工艺信息",
  section3Tit: "PCB特殊工艺",
  section4Tit: "个性化服务",
  section5Tit: "SMT服务",

  form: {
    boardMaterialType: "板材类型",
    boardLayer: "板子层数",
    mergeBoard_num: "拼版款数",
    shipmentMode: "出货方式",
    mergeBoard_Rule: "拼板规则",
    boardTitle1: "单片尺寸",
    boardTitle2: "板子尺寸",

    MergeBoard_Deliver: "交货形式",
    MergeBoard_Deliver_inpu1: "横片数量",
    MergeBoard_Deliver_inpu2: "纵片数量",
    MergeBoard_Deliver_demo: "实例",
    MergeBoard_CraftRim: "工艺边框",
    MergeBoard_IsForkPlate: "是否接受打叉板",
    MergeBoard_IsForkPlate_tip: "不接受会收取一定费用。",
    BoardNumber: "板子数量",
    tg: "板材/TG",
    BoardThickness: "板子厚度mm",
    OuterThickness: "铜箔厚度(外层)",
    InnerThickness: "内层铜厚",
    MinimumLineWidth: "最小线宽/线距",
    MinimumPoreSize: "最小过孔mm",
    SoldermaskColor: "阻焊颜色",
    CharacterColor: "字符颜色",
    SurfaceFinish: "表面处理",
    SoldermaskCover: "阻焊覆盖",
    TestType: "测试方法",

    NeedImpedanceControl: "阻抗",
    NeedGoldenFinger: "金手指倒斜边",
    NeedHoleCopper25UM: "孔铜25um",
    BlueGlue: "蓝胶",
    NeedHalfHole: "半孔",
    NeedMetallicEdge: "金属包边",
    NeedPressAcceptHole: "压接孔",
    NeedCountersink: "沉头孔",
    NeedDishMiddleHole: "盘中孔",
    NeedStackup: "要求叠层",
    NeedBuriedVias: "盲埋孔",
    remark: "其它要求",
    remark2: "客户其它要求备注",

    PackingRequirement: "包装要求",
    NeedIntervalWhitePaper: "隔白纸服务",
    NeedULIdentify: "UL标识",
    ShipmentReport: "出货报告",
    ShipmentStandard: "出货标准",
    smtserve: "SMT贴片服务",
  },
  formdes: pcbFormDes,

  rightTit: "PCB报价和交期",
  rightdes: "查看参数详情",

  // 参数变动提示弹框
  model: {
    tit: "温馨提示",
    contentS: "您选择的",
    contentE: "参数已发生变化，请仔细核对，谢谢！",
  },

  //   下拉框
  option: {
    yes: "需要",
    no: "不需要",
  },
  NeedHalfHoleList: {
    value1: "1边半孔",
    value2: "2边半孔",
    value3: "3边半孔",
  },
  NeedMetallicEdgeList: {
    value1: "1边包边",
    value2: "2边包边",
    value3: "3边包边",
    value4: "4边包边",
  },
  //
  PackingRequirementList: {
    value1: "SCS标识包装",
    value2: "PII标识包装",
    value3: "空白包装",
  },
  NeedIntervalWhitePaperList: {
    value1: "不需要",
    value2: "隔纸",
  },
  ShipmentReportList: {
    value1: "PII格式",
    value2: "客户指定格式",
  },
  ShipmentStandardList: {
    value1: "客户标准",
  },


  CraftRimList:{
    label1:'无',
    label2:'上下',
    label3:'左右',
    label4:'四边',
  },
  // 其它数量
  singlePieceNum: {
    label: "其它数量",
    tips: "数量x长x宽需大于",
    placeholder: "请输入其他数量",
  },

  // 实例
  example:{
    title:'拼版示例（仅供参考）',
    label:'拼版后大小',
    label2:'拼版后数量',
    label3:'拼版后面积',
    tit:'连片示意图'
  },

  // 详情弹框
  detailModal:{
    title:'已选参数详情',
    tips:'温馨提示：请仔细确认好参数下单哦'
  }
};

let pcbRule = {
  BoardLength: "单片尺寸不能为0",
  BoardNumber: "板子数量不能为0",
  MergeBoard_Length: "板子尺寸不能为0",
  MergeBoard_Number: "板子数量不能为0",

  MergeBoard_Number: "板子数量不能为0",
};

export default {
  pcb,
  pcbRule,
};
