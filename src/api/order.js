/**
 *  订单 相关接口
 */
import {
  crmGet,
  crmPost,
  crmPostFile,
  post,
  crmPostDownFile,
} from "@/api/public";

/* 订单 相关 Api */
export const orderApi = {
  /**
   * 提交订单
   * pcb => 0 ; smt=> 1;bom => 2 ; pcba =>3
   */
  addOrder: (data) => crmPost(`/api/Order/SubmitOrder`, data),

  getList: (data) => crmGet(`/api/Order/GetOrderList`, data), // 获取订单列表
  detail: (data) => crmGet(`/api/Order/GetOrderDetail`, data), // 详情
  cancelOrder: (data) => crmPost(`/api/Order/CancelOrder`, data), // 取消订单

  upload: (data) => crmPostFile(`/api/Order/OrderFileUpload`, data), // 上传文件
  down: (data) =>
    crmPostDownFile(`/api/Order/OrderFileDownload?OrderFileId=${data}`, {}), // 下载文件

  editAddress: (Id, data) =>
    crmPost(`/api/Order/ModifyDelivery?OrderNO=${Id}`, data), // 修改地址

  uploadPayFile: (data) => crmPost(`/api/Order/UploadPaymentCredentials`, data), // 上传付款凭证
  editLog: (data) => crmGet(`/api/Order/GetOrderLog?OrderNO=${data}`, {}), // 订单修改记录
};

/* 订单支付 相关 Api */
export const payApi = {
  alipay: (OrderNo) => crmPost(`/api/Order/AliPay?OrderNo=${OrderNo}`, {}), // 支付宝支付
  alipayQuery: (OrderNumber) =>
    crmPost(`/api/Order/AlipayQuery?OrderNumber=${OrderNumber}`, {}), // 查询支付宝支付
};

/**
 * 建议：
 * 未审核---黄色、未完全到货---蓝色、未完全入库---绿色、未完全开票---灰色、未完全付款---红色、完全付款---白色。
 */
export let orderStatus = [
  "待审核",
  "待付款",
  "待确认",
  "生产中",
  "已发货",
  "已确认收货",
  "已取消",
];

export let orderColor = [
  "#ff9900",
  "#ef4040",
  "#1677ffc7",
  "#333",
  "#333",
  "#333",
];
