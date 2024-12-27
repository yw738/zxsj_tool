/**
 * 英文版特供文件
 * 作用：中文=>英文
 */
/**
 * type 参数类型
 * list 参数
 */
export let getEnPcb = () => {
  return {
    CharacterColors: [
      { label: "白色", enlabel: "White", value: 1, color: "#ffffff" },
      { label: "黑色", enlabel: "Black", value: 2, color: "#000000" },
      { label: "无", enlabel: "None", value: 3, color: "transparent" },
    ],
    FR4_BoardMaterialTGs: [
      {
        Id: 1,
        Brand: "不指定品牌",
        PartNumber: "A级",
        TGValue: "TG130",
        value: 1,
        label: "不指定品牌A级TG130",
        enlabel: "FR4-TG130",
      },
      {
        Id: 2,
        Brand: "不指定品牌",
        PartNumber: "A级",
        TGValue: "TG150",
        value: 2,
        label: "不指定品牌A级TG150",
        enlabel: "FR4-TG150",
      },
      {
        Id: 3,
        Brand: "不指定品牌",
        PartNumber: "A级",
        TGValue: "TG170",
        value: 3,
        label: "不指定品牌A级TG170",
        enlabel: "FR4-TG170",
      },
      {
        Id: 4,
        Brand: "建滔",
        PartNumber: "KB6160",
        TGValue: "TG130",
        value: 4,
        label: "建滔KB6160TG130",
        enlabel: "KB6160-TG130",
      },
      {
        Id: 5,
        Brand: "建滔",
        PartNumber: "KB6165F",
        TGValue: "TG150",
        value: 5,
        label: "建滔KB6165FTG150",
        enlabel: "KB6165F-TG150",
      },
      {
        Id: 6,
        Brand: "建滔",
        PartNumber: "KB6167F",
        TGValue: "TG170",
        value: 6,
        label: "建滔KB6167FTG170",
        enlabel: "KB6167F-TG170",
      },
      {
        Id: 7,
        Brand: "生益",
        PartNumber: "S1000H",
        TGValue: "TG150",
        value: 7,
        label: "生益S1000HTG150",
        enlabel: "S1000H-TG150",
      },
      {
        Id: 8,
        Brand: "生益",
        PartNumber: "S1000-2M",
        TGValue: "TG170",
        value: 8,
        label: "生益S1000-2MTG170",
        enlabel: "S1000-2M-TG170",
      },
    ],
    MergeBoardRules: [
      { value: 0, label: "按客户文件拼板出货", enlabel: "Panel by Customer" },
      { value: 1, label: "SCS代拼板", enlabel: "Panel by SCS" },
    ],
    ShipmentModes: [
      { value: 0, label: "pcs (单片)", enlabel: "Single PCB" },
      { value: 1, label: "set (连片)", enlabel: "Panel" },
    ],
    SoldermaskColors: [
      { label: "绿色", enlabel: "Green", value: 1, color: "#008000" },
      { label: "红色", enlabel: "Red", value: 2, color: "#bb1407" },
      { label: "黄色", enlabel: "Yellow", value: 3, color: "#ffd200" },
      { label: "蓝色", enlabel: "Blue", value: 4, color: "#0c4ad9" },
      { label: "白色", enlabel: "White", value: 5, color: "#ffffff" },
      { label: "黑色", enlabel: "Black", value: 6, color: "#000000" },
      { label: "紫色", enlabel: "Purple", value: 7, color: "#a20495" },

      {
        label: "哑光绿",
        enlabel: "Matte Green",
        value: 8,
        color: "linear-gradient(to bottom, #238928, #56db5d)",
      },
      {
        label: "哑光黑",
        enlabel: "Matte Black",
        value: 9,
        color: "linear-gradient(to bottom, #040404, #616161)",
      },
      {
        label: "白油(太阳WT03)",
        enlabel: "White(WT03)",
        value: 10,
        color: "#f5f5f5",
      },
      { label: "无", enlabel: "None", value: 11, color: "#transparent" },
    ],
    SoldermaskCovers: [
      { label: "过孔盖油", value: 1, enlabel: "Tenting Vias" },
      { label: "过孔开窗", value: 2, enlabel: "Vias Not Covered" },
      { label: "过孔塞油", value: 3, enlabel: "Plugged Vias" },
      { label: "树脂塞孔+电镀填平", value: 4, enlabel: "Resin Gack+Plating" },
    ],
    SurfaceFinishes: [
      { label: "有铅喷锡", value: 1, enlabel: "HASL with Lead" },

      { label: "无铅喷锡", value: 2, enlabel: "HASL Lead Free" },
      { label: "沉金1U", value: 3, enlabel: "Immersion Gold(1U)" },
      { label: "沉金2U", value: 4, enlabel: "Immersion Gold(2U)" },
      { label: "沉金3U", value: 5, enlabel: "Immersion Gold(3U)" },
      { label: "沉金4U", value: 6, enlabel: "Immersion Gold(4U)" },
      { label: "沉金5U", value: 7, enlabel: "Immersion Gold(5U)" },
      { label: "沉锡", value: 8, enlabel: "Immersion Tin(5U)" },
      { label: "沉银", value: 9, enlabel: "Immersion Silver(5U)" },
      { label: "OSP", value: 10 },
      { label: "OSP+沉金1U", value: 11, enlabel: "OSP+Immersion Gold(1U)" },
      { label: "OSP+沉金2U", value: 12, enlabel: "OSP+Immersion Gold(2U)" },
    ],
    TestTypes: [
      { label: "飞针全测", value: 1, enlabel: "Flying Probe Fully Test" },
      { label: "飞针抽测", value: 2, enlabel: "Flying needle sampling" },
      { label: "工程测试架", value: 3, enlabel: "Engineering test rack" },
    ],
  };
};
