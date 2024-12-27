/**
 *  积分商场 相关接口
 */
import {
  get,
  crmGet,
  crmPost,
  crmPostFile,
  crmPostDownFile,
} from "@/api/public";
/* 积分 相关 Api */
export const integralApi = {
  getList: (data) => get(`/api/IntegralHub/GetIntegralProductList`, data), // 获取积分商品
  detail: (data) => get(`/api/IntegralHub/GetIntegralProductDetail`, data), // 详情
  addOrder: (data) => crmPost(`/api/IntegralHub/SubmitIntegralOrder`, data), //add
  orderList: (data) => crmGet(`/api/IntegralHub/GetIntegralOrderList`, data), //订单
  history: (data) => crmGet(`/api/IntegralHub/GetIntegralChangeHistory`, data), //积分记录
};

export let orderStatus = [
  { label: "所有订单", value: -2 },
  { label: "已取消", value: -1 },
  { label: "已下单", value: 0 },
  { label: "已审核", value: 1 },
  { label: "已发货", value: 2 },
];

// 获取图片前缀 代拼连接
export let getPrefixUrl = (imgPath) => {
  let BASE_API = import.meta.env.VITE_APP_BASE_API;
  let url = "";
  // 为空
  if (!imgPath) {
    return imgPath;
  }
  // 合法的连接
  if (imgPath.includes("http")) {
    return imgPath;
  }
  if (BASE_API?.includes("devApi")) {
    // 测试环境
    // return `http://8.149.246.127:5209`;
    url = "http://localhost:5000";
    // return "http://10.168.8.142:5209";
  } else if (BASE_API?.includes("orderApi")) {
    //nginx  test
    url = `${window.location.origin}${BASE_API}`;
  } else {
    // 生产
    // url = `${window.location.origin}`;
    url = `http://8.149.246.127:5000`;
  }
  return `${url}/${imgPath}`;
};
