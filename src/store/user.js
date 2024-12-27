import { defineStore } from "pinia";
import axios from "axios";
import { message } from "ant-design-vue";
import { localStorage, jsCookie } from "@/utils/storage";
import { loginApi } from "@/api/login";

export const useUser = defineStore("user", {
  state: () => ({
    token: localStorage.get("token") || "",
    // refreshToken: jsCookie.get("refreshToken") || "",
    userInfo: {}, //用户信息
    nickname: "",
    userId: "",
    avatar: "",
    roles: [],
    perms: [],
    isReLogin: false,

    collapsed: false,
  }),

  getters: {},

  actions: {
    async RESET_STATE() {
      this.$reset();
    },
    /**
     * 用户登录请求
     * @param userInfo 登录用户信息
     *  username: 用户名
     *  password: 密码
    //  *  code: 验证码
    //  *  uuid: 匹配正确验证码的 key
     */
    login(userInfo) {
      const { Username, Password } = userInfo;
      return new Promise((resolve, reject) => {
        loginApi
          .login({
            Username: Username.trim(),
            Password: Password.trim(),
          })
          .then((response) => {
            const { Data: token } = response.data;
            // jsCookie.set('token', token, expiresIn);
            // const date = new Date();
            // const time = expiresIn * 1000;
            // date.setTime(date.getTime() + time);
            localStorage.set("token", token);
            // localStorage.set("token", token, date.toUTCString());
            // jsCookie.set("refreshToken", refreshToken);
            this.token = token;
            // this.refreshToken = refreshToken;
            message.success("登录成功");
            resolve("");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    /**
     *  获取用户信息（昵称、头像、角色集合、权限集合）
     */
    getUserInfo() {
      let language = localStorage.get("language");
      
      // 海外特供
      // if (language == "en") {
      //   return new Promise((resolve, reject) => {
      //     this.token = localStorage.get("token");
      //     this.userInfo = {
      //       UUID: "df9e0f3e-08b4-4064-8975-a9553b69e3a3",
      //       UserName: "User",
      //       PhoneNumber: "test01",
      //       Integral: 0,
      //     };
      //     this.nickname = "User";
      //     this.userId = "df9e0f3e-08b4-4064-8975-a9553b69e3a3";
      //     resolve({});
      //   });
      // }
      return new Promise((resolve, reject) => {
        loginApi
          .userInfo({
            JwtToken: localStorage.get("token"),
          })
          .then((res) => {
            let { Data: data, Type: type } = res;
            if (type == 0) {
              if (!data) {
                return reject("please Login again.");
              }
              this.isReLogin = false;
              let json = {};
              if (typeof data == "string") {
                json = JSON.parse(data);
              } else {
                json = data;
              }
              const { UUID, UserName, PhoneNumber, authorities = [] } = json;
              // const params = JSON.parse(JSON.stringify(data));
              // delete params.authorities;
              // delete params.password;
              this.userInfo = json;
              this.nickname = UserName;
              this.userId = UUID;
              this.token = localStorage.get("token");
              // this.avatar = avatar;
              // this.roles = authorities;
              resolve(json);
            } else {
              reject("请重新登录");
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    /**
     *  注销
     */
    logout() {
      return new Promise((resolve, reject) => {
        localStorage.remove('token');
        this.token = "";
        this.userId = "";
        this.userInfo = {};
        this.RESET_STATE();
        resolve(null);
      });
      return new Promise((resolve, reject) => {
        loginApi
          .logout()
          .then(() => {
            jsCookie.clear();
            this.token = "";
            this.userInfo = {};
            // resetRouter();
            resolve(null);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    /**
     * 清除 Token
     */
    resetToken() {
      return new Promise((resolve) => {
        localStorage.remove('token');
        this.token = "";
        this.userInfo = {};
        this.RESET_STATE();
        resolve(null);
      });
    },

    // 是否重新登录
    setReLogin(bool = false) {
      this.isReLogin = bool;
    },

    setCollapsed(bool) {
      this.collapsed = bool;
    },
  },
});
