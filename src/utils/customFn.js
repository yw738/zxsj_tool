/**
 * ------------------------自定义的公共方法-----------------
 */
import { localStorage } from "@/utils/storage";

/**
 * 解析二进制流下载文件
 */
function AnalysisBlobFile(data, fileName, fileType) {
  let type =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  if (fileType == "pdf") {
    type = "application/pdf;charset=UTF-8";
  }
  const url = window.URL.createObjectURL(new Blob([data], { type: type }));
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
/**
 * 下载base64图片
 */
function DownloadBase64Img(url) {
  const img = url;
  const link = document.createElement("a");
  link.href = img;
  link.download = "download.png";
  link.click();
}
/**
 * 获取当前时间
 * 2021-01-01 00:00:00
 * @param {boolean} isHasHMS是否要包含时分秒
 */
const getTime = (isHasHMS = false) => {
  const time = new Date();
  const year = time.getFullYear();
  let month = time.getMonth() + 1; //月份是从0开始的
  let day = time.getDate();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  month = month.toString().padStart(2, "00"); //补0
  day = day.toString().padStart(2, "00");
  h = h.toString().padStart(2, "00");
  m = m.toString().padStart(2, "00");
  s = s.toString().padStart(2, "00");
  if (isHasHMS) {
    return `${year}-${month}-${day} ${h}:${m}:${s}`;
  } else {
    return `${year}-${month}-${day}`;
  }
};

/**
 * 时间戳 => 时间
 * @param {Number|string} timestamp 时间戳
 */
const dateFormat = (timestamp, isHasHMS = false, isHasS = true) => {
  const time = new Date(timestamp); //先将时间戳转为Date对象，然后才能使用Date的方法
  const year = time.getFullYear();
  let month = time.getMonth() + 1; //月份是从0开始的
  let day = time.getDate();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  month = month.toString().padStart(2, "00"); //补0
  day = day.toString().padStart(2, "00");
  h = h.toString().padStart(2, "00");
  m = m.toString().padStart(2, "00");
  s = s.toString().padStart(2, "00");
  if (isHasHMS) {
    if (isHasS) {
      return `${year}-${month}-${day} ${h}:${m}:${s}`;
    } else {
      return `${year}-${month}-${day} ${h}:${m}`;
    }
  } else {
    return `${year}-${month}-${day}`;
  }
};

/**
 * 时间=>时间戳
 * @param {String} date 时间
 */
const dateFormatNum = (date) => {
  return new Date(date).getTime();
};

/**
 * 时间=>时间戳
 * @param {String} time  iso 时间格式 => 日期
 */
const ISO2Time = (time) => {
  if (!time) return "";
  return dateFormat(dateFormatNum(time), true, false);
};

/**
 * 获取今日
 * 2021-01-03
 */
const getToDay = () => {
  return dateFormat(new Date().getTime());
};

/**
 * 获取昨日
 * 2021-01-02
 */
const getYesterday = () => {
  const day = 86400000;
  return dateFormat(new Date().getTime() - day);
};

/**
 * 获取明日 或者后面几天 前面几天
 * 2021-01-04
 */
const getTomorrow = (num = 0) => {
  const day = 86400000;
  if (num > 0) {
    let oldDay = +day * num;
    return dateFormat(new Date().getTime() + +oldDay);
  } else if (num == 0) {
    return dateFormat(new Date().getTime() + +day);
  } else {
    let oldDay = parseFloat(num * -1) * day;
    return dateFormat(new Date().getTime() - +oldDay);
  }
};

/**
 * 获取本周时间
 * 周第一天-最后一天
 * [2021-12-13,2021-12-19] 周一，周日
 */
const getWeek = () => {
  const now = new Date();
  const nowTime = now.getTime();
  const day = now.getDay();
  const oneDayTime = 24 * 60 * 60 * 1000;
  //显示周一
  const MondayTime = nowTime - (day - 1) * oneDayTime;
  //显示周日
  const SundayTime = nowTime + (7 - day) * oneDayTime;
  const monday = new Date(MondayTime).getTime();
  const sunday = new Date(SundayTime).getTime();
  //打印查看结果
  return [dateFormat(monday), dateFormat(sunday)];
};

/**
 * 获取本月时间
 * ['2022-01-01', '2022-01-31']
 */
const getMonth = () => {
  const newTimeArr = dateFormat(new Date().getTime()).split("-");
  const val = `${newTimeArr[0]}-${newTimeArr[1]}`;
  const arr = val.split("-");
  const timeStar = val + "-01";
  const day = 86400000;
  let nextM = null;
  let year = arr[0];
  if (arr[1] == 12) {
    nextM = 1; //判断是否跨年
    year++;
  } else {
    nextM = Number(arr[1]) + 1;
  }
  //选择月的最后一天的时间戳
  const mLastDay = new Date(`${year}-${nextM}-01`).getTime() - day;
  return [dateFormat(timeStar), dateFormat(mLastDay)];
};

/**
 * 获取本年时间段
 * ['2021-01-01', '2021-12-31']
 */
const getYear = () => {
  const newTimeArr = dateFormat(new Date().getTime()).split("-");
  const timeStar = newTimeArr[0] + "-01-01";
  const day = 86400000;
  const nextY = Number(newTimeArr[0]) + 1;
  const yLastDay = new Date(`${nextY}-01-01`).getTime() - day; //选择今年的第一天的时间戳
  return [dateFormat(timeStar), dateFormat(yLastDay)];
};

/**
 * 获取两个日期中间的所有日期
 * @param {String} starDay 开始日期
 * @param {String} endDay 结束日期
 * ['2022-01-01', '2022-01-02', ... ,'2022-01-29', '2022-01-30', '2022-01-31']
 */
const getTimeSpace = (starDay, endDay) => {
  const arr = [];
  const dates = [];
  // 设置两个日期UTC时间
  const db = new Date(starDay);
  const de = new Date(endDay);
  // 获取两个日期GTM时间
  const s = db.getTime() - 24 * 60 * 60 * 1000;
  const d = de.getTime() - 24 * 60 * 60 * 1000;
  // 获取到两个日期之间的每一天的毫秒数
  for (let i = s; i <= d; ) {
    i = i + 24 * 60 * 60 * 1000;
    arr.push(parseInt(i));
  }
  // 获取每一天的时间  YY-MM-DD
  for (const j in arr) {
    const time = new Date(arr[j]);
    const year = time.getFullYear();
    const mouth =
      time.getMonth() + 1 >= 10
        ? time.getMonth() + 1
        : "0" + (time.getMonth() + 1);
    const day = time.getDate() >= 10 ? time.getDate() : "0" + time.getDate();
    const YYMMDD = year + "-" + mouth + "-" + day;
    dates.push(YYMMDD);
  }
  return dates;
};

/**
 * 判断某个时间是否在一段时间内
 * @param {string} time 需要判断的时间 //2018-3-28 14:44
 * @param {string} startTime 开始的时间点 //2018-3-28 16:44
 * @param {string} endTime 结束的时间点 //2018-3-28 16:45
 * @returns {boolean} true 在时间内 false 在时间外
 * judgmentTime('2018-3-28 14:44','2018-3-28 9:30','2018-3-29 3:20') //true
 * judgmentTime('2018-3-28 9:20','2018-3-28 9:30','2018-3-29 3:20')  //false
 */
const judgmentTime = (time = "", startTime = "", endTime = "") => {
  //把字符串格式转换为日期类
  const curTime = new Date(Date.parse(time));
  const sTime = new Date(Date.parse(startTime));
  const eTime = new Date(Date.parse(endTime));
  return curTime >= sTime && curTime <= eTime; //进行比较
};

// 枚举转数组
function enum2Arr(enumData) {
  const arr = [];
  for (const [value, label] of Object.entries(enumData)) {
    arr.push({
      label,
      value,
    });
  }
  return arr;
}

/**
 * 平层列表转树形结构
 * id 与 pid 必有。
 * id = 当前节点id
 * pid = 当前节点的父id
 * @param {array} arr 数组
 * @param {number|string} id 唯一的id。第一次默认为顶层id = -1
 * @returns {array} array 返回一个列表树
 */
const list2Tree = (arr = [], id = -1) => {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (id == item.pid) {
      const children = list2Tree(arr, item.id);
      const json = {
        ...item,
        pid: id,
        id: item.id,
      };
      if (children?.length) json.children = children;
      array.push(json);
    }
  }
  // 代表是顶层
  if (id == -1) {
    return [
      {
        id,
        pId: null,
        children: array,
      },
    ];
  } else {
    return array;
  }
};

/**
 * 树形结构转平层列表
 * @param {array} arr 数组
 * @returns {array} array 返回一个列表树
 */
const tree2List = (arr = []) => {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let children = [];
    if (item.children?.length) {
      children = tree2List(item.children);
    }
    const json = JSON.parse(JSON.stringify(item));
    if (json.children) delete json.children;
    if (children?.length) {
      array.push(...children);
    }
    array.push(json);
  }
  return array;
};

/**
 * 文件下载
 * @param {string} apiName 对象名
 * @param {object} searchData 查询条件
 *
let exportFn = () => {
  (window  ).fileDown('businessUser', state.searchData);
};
 */
const fileDown = async (apiName = "", searchData = {}, fileName) => {
  return;
  return new Promise(async (resolve, reject) => {
    let bFlog;
    apiName == "fileTemplate"
      ? (bFlog = true)
      : (bFlog = await ElMessageBoxAsync());
    if (!bFlog) return;
    try {
      const api = exportApi[apiName];
      let params = {};
      params = JSON.parse(JSON.stringify(searchData));
      // null做处理
      for (const [label, value] of Object.entries(params)) {
        if (value === null) {
          params[label] = "";
        }
      }
      let name = fileName || api.name;
      delete params["__v_isRef"];
      delete params["_defaultValue"];
      delete params["_key"];
      delete params["_object"];
      if (!api) return;
      api.down(params).then((res) => {
        if (res.data.type == "application/json") {
          if (res.data instanceof Blob) {
            var blob = res.data;
            //通过FileReader读取数据
            var reader = new FileReader();
            //以下这两种方式我都可以解析出来，因为Blob对象的数据可以按文本或二进制的格式进行读取
            // reader.readAsBinaryString(blob);
            reader.readAsText(blob, "utf8");
            reader.onload = function (jsonData) {
              let response = JSON.parse(jsonData.target.result);
              ElMessage.error(response?.msg || "该失败数据已过期，无法下载。");
              resolve(true);
            };
          }
        } else if (res.data) {
          ElMessage.success("导出成功！");
          window.AnalysisBlobFile(
            res.data,
            name + "_" + new Date().getTime() + ".xlsx"
          );
        }
      });
    } catch (err) {}
  });
};

/**
 * 文件上传
 * @param {string} apiName 对象名
 * @param {object} searchData 查询条件
 *
 * eg:
let uploadFn = () => {
  (window  ).fileDown('businessUser', state.searchData);
};

 */
const uploadFileFn = (apiName = "", searchData = {}) => {
  return;
  return new Promise((resolve, reject) => {
    ElMessageBox.confirm("此操作将导出文件, 是否继续?", "提示")
      .then(() => {
        try {
          const api = uploadApi[apiName];
          let params = JSON.parse(JSON.stringify(searchData));
          if (!api) return;
          api.uploadF(params).then((res) => {
            if (res.data.type == "application/json") {
              ElMessage.success("上传成功");
            } else if (res.data) {
              ElMessage.info("导入文件，格式有误，请改正！");
              window.AnalysisBlobFile(
                res.data,
                api.name + new Date().getTime() + ".xlsx"
              );
            }
            resolve({});
          });
        } catch (err) {
          reject();
        }
      })
      .catch(() => {
        reject();
      });
  });
};

/**
 * 通过id查询label
 */
function findLabel(arr = [], id) {
  return arr.filter((v) => v.value === id)[0]?.label ?? "";
}
/**
 * 通过id查询item
 */
function findItem(arr = [], id) {
  return arr.filter((v) => v.value === id)[0] ?? {};
}
/**
 * 通过label 查询  id
 */
function findValue(arr = [], label) {
  return arr.filter((v) => v.label === label)[0]?.value ?? "";
}

/**
 * 计算文件大小
 */
function change_size(filesize) {
  var size = "";
  if (filesize < 0.1 * 1024) {
    //小于0.1KB，则转化成B
    size = filesize.toFixed(2) + "B";
  } else if (filesize < 0.1 * 1024 * 1024) {
    //小于0.1MB，则转化成KB
    size = (filesize / 1024).toFixed(2) + "KB";
  } else if (filesize < 0.1 * 1024 * 1024 * 1024) {
    //小于0.1GB，则转化成MB
    size = (filesize / (1024 * 1024)).toFixed(2) + "MB";
  } else {
    //其他转化成GB
    size = (filesize / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  }
  var sizeStr = size + ""; //转成字符串
  var index = sizeStr.indexOf("."); //获取小数点处的索引
  var dou = sizeStr.substr(index + 1, 2); //获取小数点后两位的值
  if (dou == "00") {
    //判断后两位是否为00，如果是则删除00
    return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2);
  }
  return size;
}

const isJSON = (str) => {
  if (typeof str == "string") {
    try {
      var obj = JSON.parse(str);
      if (typeof obj == "object" && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
};

// 金额 保留2位小数
const filterNum = (json) => {
  let item = { ...json };
  for (let [label, value] of Object.entries(item)) {
    item[label] = parseInt(+value * 100) / 100;
  }
  return item;
};

// 挂载方法到window
window.AnalysisBlobFile = AnalysisBlobFile;
window.DownloadBase64Img = DownloadBase64Img;
window.getTime = getTime;
window.dateFormat = dateFormat;
window.dateFormatNum = dateFormatNum;
window.getToDay = getToDay;
window.getYesterday = getYesterday;
window.getTomorrow = getTomorrow;
window.getWeek = getWeek;
window.getMonth = getMonth;
window.getYear = getYear;
window.getTimeSpace = getTimeSpace;
window.judgmentTime = judgmentTime;
window.enum2Arr = enum2Arr;
window.list2Tree = list2Tree;
window.tree2List = tree2List;
window.findLabel = findLabel;
window.findItem = findItem;
window.findValue = findValue;
window.change_size = change_size;
window.isJSON = isJSON;
window.ISO2Time = ISO2Time;
window.filterNum = filterNum;

// $(document).ready(function(){

//   compressImg(targetObj.src, 0.5, useImg, targetObj)
// });

let targetObj = {
  // base64字符串 太大了，删掉了，可以自己替换
  src: "",
};

/**
 * base 64 压缩
 */
function compressImg(base64, multiple, useImg, targetObj = {}) {
  // 第一个参数就是需要加密的base65，
  // 第二个是压缩系数 0-1，
  // 第三个压缩后的回调 用来获取处理后的 base64
  if (!base64) {
    return;
  }
  // const _this = this
  const length = base64.length / 1024;
  // 压缩方法
  let newImage = new Image();
  // let quality = 0.6; // 压缩系数0-1之间
  let quality = 0.9; // 压缩系数0-1之间
  newImage.src = base64;
  newImage.setAttribute("crossOrigin", "Anonymous"); // url为外域时需要
  let imgWidth, imgHeight;
  let w = undefined;
  newImage.onload = function () {
    // 这里面的 this 指向 newImage
    // 通过改变图片宽高来实现压缩
    w = this.width * multiple;
    imgWidth = this.width;
    imgHeight = this.height;
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    if (Math.max(imgWidth, imgHeight) > w) {
      if (imgWidth > imgHeight) {
        canvas.width = w;
        // 等比例缩小
        canvas.height = w * (imgHeight / imgWidth);
      } else {
        canvas.height = w;
        // 等比例缩小
        canvas.width = w * (imgWidth / imgHeight);
      }
    } else {
      canvas.width = imgWidth;
      canvas.height = imgHeight;
      // quality 设置转换为base64编码后图片的质量，取值范围为0-1  没什么压缩效果
      // 还是得通过设置 canvas 的宽高来压缩
      quality = 1;
      // quality = 0.6;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(this, 0, 0, canvas.width, canvas.height); //  // 这里面的 this 指向 newImage
    let smallBase64 = canvas.toDataURL("image/jpeg", quality); // 压缩语句
    // 如想确保图片压缩到自己想要的尺寸,如要求在50-150kb之间，请加以下语句，quality初始值根据情况自定
    // while (smallBase64.length / 1024 > 150) {
    // quality -= 0.01;
    // smallBase64 = canvas.toDataURL("image/jpeg", quality);
    // }
    // 防止最后一次压缩低于最低尺寸，只要quality递减合理，无需考虑
    // while (smallBase64.length / 1024 < 50) {
    // quality += 0.001;
    // smallBase64 = canvas.toDataURL("image/jpeg", quality);
    // }

    // 必须通过回调函数返回，否则无法及时拿到该值，回调函数异步执行
    console.log(`压缩前：${length}KB`);
    console.log(`压缩后：${smallBase64.length / 1024} KB`);

    useImg(smallBase64, targetObj);
  };
}

// svg => base64
function svgToBase64(svgString) {
  // 对SVG字符串进行编码
  const encodedSvg = encodeURIComponent(svgString).replace(
    /%([0-9A-F]{2})/g,
    function (match, p1) {
      return String.fromCharCode("0x" + p1);
    }
  );
  // 将编码后的字符串转换为base64
  const base64 = btoa(encodedSvg);
  return "data:image/svg+xml;base64," + base64;
}
window.compressImg = compressImg;
window.svgToBase64 = svgToBase64;

/**
 * 价格转换
 *  priceConver(props.pcbPrice.totalPrice)
 */
let priceConver = (price) => {
  let lang = localStorage.get("language");
  if (lang == "en") {
    let num = 6.8;
    let a = 1 / num; //比例 1rmb = n usd
    return parseInt(+price * a * 1000) / 1000;
  } else {
    return price;
  }
};
window.priceConver = priceConver;
