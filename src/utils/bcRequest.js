import axios from "axios";
import { message, Modal } from "ant-design-vue";
import { localStorage, jsCookie } from "@/utils/storage";
import { useUser } from "@/store/user.js";
import router from "@/router";
import { inject, nextTick } from "vue";

/**
 * 验证登录状态的拦截器
 */

let needLoadingRequestCount = 0;

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) endLoading();
}

let loading;

function startLoading() {}

function endLoading() {
  // loading.close()
}

// 是否正在刷新的标记 -- 防止重复发出刷新token接口--节流阀
let isRefreshing = false;
// 失效后同时发送请求的容器 -- 缓存接口
let subscribers = [];
function onAccessTokenFetched(newToken) {
  subscribers.forEach((callback) => {
    callback(newToken);
  });
  // 清空缓存接口
  subscribers = [];
}
// 添加缓存接口
function addSubscriber(callback) {
  subscribers.push(callback);
}
// 跳转登录页
const toLogin = async () => {
  const user = useUser();
  await user.resetToken();
  user.setReLogin(true);
  let lang = localStorage.get("language");
  if (lang == "en") {
    message.warning("Please login again!");
  } else {
    message.warning("请重新登录！");
  }

  console.log("登录过期~~~~~~~~~~~~~~~~~~~~");
};

// const getRefreshToken = () => {
//   return new Promise((resolve, reject) => {
//     const refreshToken = jsCookie.get("refreshToken");
//     axios({
//       url: "/auth/sso/refresh-token",
//       method: "get",
//       data: {},
//       baseURL: import.meta.env.VITE_APP_BASE_API,
//       headers: {
//         refreshToken: refreshToken,
//       },
//     })
//       .then((res) => {
//         if (res.data.code == 1) {
//           const { user } = useStore();
//           const { token, refreshToken, expiresIn } = res.data.data;
//           const date = new Date();
//           const time = expiresIn * 1000;
//           date.setTime(date.getTime() + time);
//           localStorage.set("token", token, date.toUTCString());
//           jsCookie.set("refreshToken", refreshToken);
//           user.token = token;
//           user.refreshToken = refreshToken;
//           resolve(token);
//         } else {
//           reject();
//         }
//       })
//       .catch(() => {
//         reject();
//       });
//   });
// };

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // timeout: 50000,//毫秒
  // timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

/**
 * 判断token 是否过期 逻辑，
 *          - token过期：请求 refreshToken
 *                  refreshToken未过期： 获取最新的token 和 refreshToken 更新
 *                                      进行后续的接口调取
 *                  refreshToken过期：   退出登录
 *          - token未过期： 继续执行请求
 *                  请求token过期（1001：无效token）：请求 refreshToken
 *                                                refreshToken未过期： 获取最新的token 和 refreshToken 更新
 *                                                                    （此时接口调取已完成，但是没有数据）需要重新调取接口
 *                                                refreshToken过期：   退出登录
 *                  请求token未过期：正常获取数据
 *
 */

// 请求拦截器
service.interceptors.request.use(
  async (config) => {
    showFullScreenLoading();
    if (!config.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }
    if (config.customContentType) {
      config.headers["Content-Type"] = config.customContentType;
    }
    // if (true) {
    //   config.baseURL = "/orderApi";
    // }
    // 全局处理参数 空字符串处理为null
    // if (config.data && Object.entries(config.data)?.length) {
    //   for (let [label, value] of Object.entries(config.data)) {
    //     if (value === "") {
    //       config.data[label] = null;
    //     }
    //   }
    // }
    const token = localStorage.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${localStorage.get("token")}`;
    }
    //
    if (token) {
      return config;
    } else {
      // token过期 跳出登录
      toLogin();
      return false;
    }
    // return config;
  },
  (error) => {
    tryHideFullScreenLoading();
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  async (response) => {
    const { Type: type, Data: data } = response.data;
    tryHideFullScreenLoading();
    if (response.config.url.includes("OrderFileDownload")) {
      return {
        headers: response.headers,
        data: response.data,
      };
    } else {
      return response.data;
    }

    /**
     *
     * Success=0, Warning=1, Error=2
     *
     */
    if (type == "0") {
    } else if (type == "1") {
      // if (!isRefreshing) {
      //   isRefreshing = true;
      //   getRefreshToken()
      //     .then((newToken) => {
      //       isRefreshing = false;
      //       onAccessTokenFetched(newToken);
      //     })
      //     .catch(() => {
      //       toLogin(); // 失败就跳转登陆
      //       isRefreshing = false;
      //     });
      // }
      // 将其他接口缓存起来
      // const retryRequest = new Promise((resolve) => {
      //   // 返回Promise并且让其状态一直为等待状态,
      //   // 只有当token刷新成功后, 就会调用通过addSubscriber函数添加的缓存接口,
      //   // 此时, Promise的状态就会变成resolve
      //   addSubscriber((newToken) => {
      //     // 表示用新的token去替换掉原来的token
      //     response.config.headers.Authorization = "Bearer " + newToken;
      //     // 替换掉url -- 因为baseURL会扩展请求url
      //     // response.config.url = response.config.url.replace(response.config.baseURL, '')
      //     // 用重新封装的config去请求, 就会将重新请求后的返回
      //     resolve(service(response.config));
      //   });
      // });
      return {};
    } else {
      return {};
    }
  },
  (error) => {
    tryHideFullScreenLoading();
    let code = error?.response?.status;
    // const { code, msg } = error?.response?.data || {};

    if (code == "401") {
      // token 过期
      toLogin();
    } else {
      if (code == "400" && error.config.url.includes("OrderFileDownload")) {
        message.warning("未找到指定文件");
      } else {
        // message.error("系统出错");
      }
    }
    return Promise.reject(error);
  }
);
// 导出 axios 实例
export default service;
