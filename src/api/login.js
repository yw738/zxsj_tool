/**
 *  用户模块
 */
import {
  crmGet,
  crmPost,
  get,
  post,
  getFile,
  del,
  getWssUrl,
} from "@/api/public";

/* 登录相关api */
export const loginApi = {
  registerUser: (data) => post(`/api/CustomerAuth/RegisterUser`, data), //注册,
  login: (data) => post(`/api/CustomerAuth/Login`, data), //账号--登录,
  smsLogin: (data) => post(`/api/CustomerAuth/SmsLogin`, data), //手机号--登录,
  getSMSCode: (data) => post(`/api/CustomerAuth/GetSMSCode`, data), //sms code 获取验证码
  forgotPassword: (data) => post(`/api/CustomerAuth/ForgotPassword`, data), //忘记密码
  getCaptchaImage: (data) => get(`/api/CustomerAuth/GetCaptchaImage`, data), //获取验证码 图片
  userInfo: (data) => crmPost(`/api/CustomerAuth/GetUserInfo`, data), //通过token获取用户信息,需要传token

  // 没有
  logout: (data) => crmPost(`/auth/sso/logout`, data), //登出

  // 海外版特供 邮箱注册 || 登录
  emailLogin: (data) => post(`/api/CustomerConnect/CustomerVerify`, data),
  sendEmail: (data) =>
    get(`/api/CustomerConnect/GenerateVerificationCode`, data), // 发送邮件
};

/* 收货相关api */
export const addressApi = {
  add: (data) => crmPost(`/api/CustomerAuth/SaveDeliveryAddress`, data), //
  del: (data) => crmPost(`/api/CustomerAuth/DelDeliveryAddress`, data), //
  getList: (data) => crmGet(`/api/CustomerAuth/GetDeliveryAddress`, data), //
};

export const msgApi = {
  // wssMsgUrl: `${getWssUrl()}/MessagePushHub`, //msg SignalR 进行请求数据的链接
  getList: (data) => get(`/api/Message/GetMessageList`, data),
  confirm: (id) => post(`/api/Message/ConfirmMessage?messageId=${id}`, {}),
};
