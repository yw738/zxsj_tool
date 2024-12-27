//检测设备是移动端还是PC端
const detectDeviceType = ()=>{
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) ? 'mobile' : 'desktop';
}

//判断某个对象是否为数值类型
const isNumeric = (value) => {
    return value != null && typeof value === 'number' && Number.isFinite(value);
}

//检查字符串是否能转换为正整数且大于0
const isValidPositiveIntegerOrZero = (str) => {
  // 正则表达式用于检查是否为0或正整数（不包括前导0，除非该数值为0）
  const regex = /^(0|[1-9][0-9]*)$/;
  // 使用正则表达式测试字符串
  if (regex.test(str)) {
      // 类型转换为数字
      const num = Number(str);
      // 检查是否大于等于0且为整数
      return num >= 0 && Number.isInteger(num);
  }
  return false;
}

//获取文件名后缀，并转换为大写形式
const getFileExtension = (filename) => {
  if (typeof filename === 'string' && filename.includes('.')) {
    return filename.substring(filename.lastIndexOf('.') + 1).toUpperCase();
  } else {
    return '';  // 如果没有后缀或者输入不合规范，返回空字符串
  }
}

export { detectDeviceType, isNumeric, getFileExtension };