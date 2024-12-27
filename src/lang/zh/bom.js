let bom = {
  up: {
    tit: "点击上传BOM文件",
    des: "拖拽BOM文件至此框，10秒内获取报价",

    tips: "支持 .XLSX .XLS .CSV 格式文件,不超过2M",
    safeTip: "将对您的文件绝对保密，保护您的知识产权",
  },

  title: "Ai 智能BOM成本分析工具",
  sec1: {
    tit: "核算成本",
    div1: "快速估算产品打样物料成本",
    div2: "器件物料批量选型，供应商现货比价",
    div3: "对接160家正规供应商，提供2亿条元器件现货库存报价",
  },
  sec2: {
    tit: "替代选型",
    div1: "提供替代器件方案，降低采购成本",
    div2: "停产物料替代选型，12000家产品库供选",
    div3: "AI大数据推荐，1000万种替代器件关系库",
  },
  sec3: {
    tit: "风险规避",
    div1: "元器件生命周期预警，规避停产风险",
    div2: "元器件供应链风险预警，规避采购风险",
    div3: "BOM智能对比分析，避免数量、位号和封装错误",
  },
  bottom: {
    tit1: "BOM基于元器件大数据深度算法",
    tit2: "AI解析BOM型号大数据精准匹配让您选型更准确、采购更高效",
    btn: "上传BOM文件，10秒匹配供应商最低价格",
  },

  sheelModel: {
    title: "请确认需要解析的Sheet",
    message: "当前上传的文件有多个sheet，请选择当前要解析的sheet。10秒快速报价",
    label: "Sheet名称",
    button: "确定",
  },

  setNumberModel: {
    title: "采购套数",
    label: "采购套数(套)",
    label2: "电子物料",
    tooltip: "请选择您的元器件是由采购还是自供",
    message: "选择代采会变更为pcba类型订单。下单pcba，会有大量折扣",
    button: "确定",
  },

  //   进度条
  progress: {
    progress1: "匹配进度",
    progress2: "PIN点解析率",
    progress3: "已匹配物料",
    progress4: "待确定型号个数",
    progress5: "无匹配物料",
    unit: "个",
    msg: "BOM文件型号数量共({0})个，成功匹配({1})个，待确定型号({2})个，未完全匹配的({3})个",
  },
  unit: "个",
  submit: {
    button: "提交订单",
    warnning: "价格以审核后为准",
  },
  tab: {
    tab1: "全部",
    tab2: "完全匹配",
    tab3: "待确定型号",
    tab4: "无匹配",
    rightMsg: "BOM文件型号",
    rightMsg2: "报价型号",
  },
  table: {
    btn: {
      delete: "删除",
      edit: "编辑",
      confirm: "确定型号",
      change: "更换型号",
    },
    head: {
      index: "序号",
      col1: "原始需求",
      col2: "需求型号/参数",
      col3: "位号",
      col4: "用量",
      col5: "总量",
      col6: "备损量",
      col7: "结果",
      col8: "匹配型号/参数",
      col9: "匹配品牌",
      col10: "总价",
      col11: "交期(天)",
      col12: "操作",
      col13: "物料来源",//Material source

    },
    body: {
      PartNumber: "型号",
      Brand: "品牌",
      Encapsulates: "封装",
      Parameters: "参数",
      Description: "参数",

      status1: "成功匹配",
      status2: "型号需确认",
      status3: "无匹配结果",
      loading: "匹配中",
      nodata: "暂无匹配数据",
    },
  },
  BomSourceType:{
    option1:'代采',
    option2:'客户自供',
    option3:'空贴',
  },
  // 更换型号
  changeModal: {
    title: "更换型号",
    label: "需求型号",
    head: {
      col1: "需求型号",
      col2: "描述/规格参数",
      col3: "需求品牌",
      col4: "封装",
      col5: "位号",
      col6: "用量",
      col7: "总数",
    },
    head2: {
      col1: "替代型号",
      col2: "规格书",
      col3: "售价",
      col3_1: "数量",
      col3_2: "国内含税",
      col3_3: "价格参考",

      col4: "操作",
    },
    active1: "当前选择",
    active2: "选择替换",
  },

  // 修改型号
  editModal: {
    title: "修改需求",
    message: "提示：多个参数及位号，请用英文逗号隔开",
  },

  // 解析描述
  analysisMsg: {
    msg0: "上传文件中",
    msg1: "准备BOM解析",
    msg2: "AI解析中。。。",
    msg3: "开始智能解析BOM",
    msg4: "BOM智能解析完成",
  },
};

export default {
  bom,
};
