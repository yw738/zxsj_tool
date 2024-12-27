import axios from "axios";
import { localStorage, jsCookie } from "@/utils/storage";

/**
 * 普通请求    transform: scale(.8);
 */

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // timeout: 50000,//毫秒
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

// 请求拦截器
service.interceptors.request.use(
  async (config) => {
    if (config.customContentType) {
      config.headers["Content-Type"] = config.customContentType;
      delete config.customContentType;
    }

    // if (true) {
    //   config.baseURL = "/orderApi";

    // }
    const token = localStorage.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${localStorage.get("token")}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  async (response) => {
    return response.data;
  },
  (error) => {
    let code = error?.response?.status;
    if (code == "401") {
      // token 过期
    } else {
      if (code == "400" && error.config.url.includes("OrderFileDownload")) {
        message.warning("未找到指定文件");
      } else {
        // message.error("系统出错");
      }
    }
    return Promise.reject(error.response);
  }
);
// 导出 axios 实例
export default service;
