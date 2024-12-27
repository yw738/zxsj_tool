import request from "@/utils/request";
import bRequest from "@/utils/bcRequest";
/**
 * # 公共文件
 * 定义请求类型
 */

// get
export const get = (url, data = {}) =>
  request({
    url: url,
    method: "get",
    params: data,
  });

// post
export const post = (url, data = {}) =>
  request({
    url: url,
    method: "post",
    data,
  });

// postFile
export const postFile = (url, data = {}) =>
  request({
    url: url,
    method: "post",
    data,
    customContentType: "multipart/form-data",
  });

// post json File 下载
export const postJsonFile = (url, data = {}) =>
  request({
    url: url,
    method: "post",
    responseType: "blob",
    data,
  });
// put
export const put = (url, data = {}) =>
  request({
    url: url,
    method: "put",
    data,
  });
// put
export const putFile = (url, data = {}) =>
  request({
    url: url,
    method: "put",
    responseType: "blob",
    data,
  });

// del
export const del = (url, data = {}) =>
  request({
    url: url,
    method: "delete",
    data,
  });

//get 下载文件
export const getFile = (url, data = {}) =>
  request({
    url: url,
    method: "get",
    params: data,
    responseType: "blob",
  });

// =================================================================
export const crmGet = (url, data = {}) =>
  bRequest({
    url: url,
    method: "get",
    params: data,
  });

export const crmPost = (url, data = {}) =>
  bRequest({
    url: url,
    method: "post",
    data,
  });

// postFile
export const crmPostFile = (url, data = {}) =>
  bRequest({
    url: url,
    method: "post",
    data,
    customContentType: "multipart/form-data",
  });

// postFile
export const crmPostDownFile = (url, data = {}) =>
  bRequest({
    url: url,
    method: "post",
    data,
    responseType: "blob",
    customContentType: "multipart/form-data",
  });

export let getWssUrl = () => {
  let BASE_API = import.meta.env.VITE_APP_BASE_API;
  if (BASE_API == "/devApi") {
    // 测试环境
    return "/devApi"
    //return `http://8.149.246.127:5209`;
    return "http://localhost:5209";
    // return "http://10.168.8.142:5209";
  } else if (BASE_API == "/orderApi") {
    //nginx  test
    return `${window.location.origin}${BASE_API}`;
  } else {
    // 生产
    return `${window.location.origin}`;
  }
};
