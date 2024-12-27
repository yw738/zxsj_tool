import router from "@/router";
import { message } from "ant-design-vue";
import { useUser } from "@/store/user.js";
import { userCenter } from "./router/usercenter.js";

// 跳转登录页
const toLogin = () => {
  // window.location.href = `${app.sassApi}/#/login`
};
let getArr = () => {
  let arr = [];
  router.options.routes.forEach((v) => {
    arr.push(v.path);
    if (v.children?.length) {
      let b = v.children.map((a) => a.path);
      arr.push(...b);
    }
  });
  return arr
};
// 白名单路由
const whiteList = ["/login"];
router.beforeEach(async (to, from, next) => {
  const user = useUser();
  const hasToken = user.token;
  let patharr = getArr();
  if(!patharr.some(v=>v==to.path)){
    next({ path: "/" });
    return
  }
  if (hasToken) {
    const noGoArr = ["/login", "/register", "/fogetPassword"];
    // 登录成功，跳转到首页
    if (noGoArr.includes(to.path)) {
      next({ path: "/" });
    } else {
      const hasGetUserInfo = user.userInfo?.UUID;
      if (hasGetUserInfo) {
        if (to.matched.length === 0) {
          from.name ? next({ name: from.name }) : next("/");
        } else {
          next();
        }
      } else {
        try {
          let res = await user.getUserInfo(); // 加载路由
          next({ ...to, replace: true });
        } catch (error) {
          await user.resetToken(); // 移除 token 并跳转登录页
          // message.error(error || "Has Error");
          toLogin();
          // next("/login");
          next();
        }
      }
    }
  } else {
    // 未登录 禁止进入 个人中心
    // let blackUrl = ["mycenter", "userorder", "address", "userinvoice"];
    // 个人中心 url list
    let blackUrl = userCenter[0].children.map((v) => v.path);
    if (blackUrl.filter((v) => to.path.includes(v)).length) {
      // toLogin();
      // next("/login");
      next();
    } else {
      next();
    }

    // await user.resetToken();
    // toLogin();
    // if (whiteList.indexOf(to.path) !== -1) {
    //   next();
    // } else {
    //   await user.resetToken();
    //   toLogin();
    // }
  }
});

router.afterEach(() => {});
