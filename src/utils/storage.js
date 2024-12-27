/**
 * window.localStorage 浏览器永久缓存
 */
export const localStorage = {
  // 设置永久缓存
  set(key, val) {
    window.localStorage.setItem(key, JSON.stringify(val));
  },
  // 获取永久缓存
  get(key) {
    const json = window.localStorage.getItem(key);
    
    return JSON.parse(json);
   

  },
  // 移除永久缓存
  remove(key) {
    window.localStorage.removeItem(key);
  },
  // 移除全部永久缓存
  clear() {
    window.localStorage.clear();
  },
};

/**
 * window.sessionStorage 浏览器临时缓存
 */
export const sessionStorage = {
  // 设置临时缓存
  set(key, val) {
    window.sessionStorage.setItem(key, JSON.stringify(val));
  },
  // 获取临时缓存
  get(key) {
    const json = window.sessionStorage.getItem(key);
    return JSON.parse(json);
  },
  // 移除临时缓存
  remove(key) {
    window.sessionStorage.removeItem(key);
  },
  // 移除全部临时缓存
  clear() {
    window.sessionStorage.clear();
  },
};

import Cookies from "js-cookie";
/**
 * window.sessionStorage 浏览器临时缓存
 */
export const jsCookie = {
  // 设置临时缓存
  set(name, value, expires) {
    if (expires) {
      // Cookies.set(name, value, { expires: expires })
      const str = `${name}=${value};path=/;expires=${expires}"`;
      document.cookie = str;
    } else {
      Cookies.set(name, value);
    }
  },
  // 获取临时缓存
  get(key) {
    return Cookies.get(key);
  },
  // 移除临时缓存
  remove(key) {
    Cookies.remove(key);
  },
  // 移除全部临时缓存
  clear() {
    const obj = Cookies.get();
    for (const [label] of Object.entries(obj)) {
      Cookies.remove(label);
    }
    // window.sessionStorage.clear();
  },
};
