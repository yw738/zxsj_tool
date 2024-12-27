/**
 *  pcb 相关接口
 */
import { crmGet, crmPost, get, post, getWssUrl, postFile } from "@/api/public";

/* bomapi */
export const bomApi = {
  // uploadBom: (data) => postFile(`/api/BomPrice/BomPriceAnalyzeRowCol`, data), //bom 上传文件
  uploadBom: (data) => postFile(`/api/BomPrice/BomPriceAnalyzeRowCol_V2`, data), //bom 上传文件

  searchPartNumber: (data) =>
    get(`/api/BomPrice/SearchPartNumber?keyword=${data}`, {}), //searchPartNumber
  getPartECList: (data) => get(`api/BomPrice/SearchReplacement_EC`, data), //获取更换型号list
  getBomPriceHubUrl: `${getWssUrl()}/BomPriceHub`, //bom SignalR 进行请求数据的链接

  getSheet: (data) => postFile(`/api/BomPrice/GetBomWorkSheetNames`, data), // 获取SheetNames
};

/* pcb 相关 Api */
export const pcbApi = {
  getOption: (data) => get(`/api/PCBPrice/GetOptionalParameter`, data), //pcb 获取下拉菜单
  // getLimit: (data) => get(`/api/PCBPrice/GetOptionalParameterLimit`, data), //pcb 获取 限制关系 旧的接口
  getLimit: (data) => get(`/api/PCBPrice/GetOptionalParameterLimit2`, data), //pcb 获取 限制关系
  getPrice: (data) => post(`/api/PCBPrice/GetReferencesPrice`, data), //pcb 计算报价
  getInitOrder: (data) => get(`/api/Order/GetInitPCB`, data), //pcb 获取 初始订单信息
  getDays: (area, data) =>
    post(`/api/PCBPrice/Get_DeliveDays?area=${area}`, data), //pcb 获取 交期时间
};

/* smt 相关 Api */
export const smtApi = {
  getInitOrder: (data) => get(`/api/Order/GetInitSMT`, data), //smt 获取 初始订单信息
  getOption: (data) => get(`/api/SMTPrice/GetOptionalParameter`, data), //smt 获取下拉菜单
  getPrice: (data) => post(`/api/SMTPrice/GetReferencesPrice`, data), //smt 计算报价
  getDays: (data) => post(`/api/SMTPrice/Get_DeliveryDays`, data), //smt 获取 交期时间
};
