/**
 * @author   create by lijie
 * @date     2019/7/8 15:50
 * @Description : 一些工具方法
 */
/**
 * 获取上周同日日期
 * @param date
 */
export function getLastWeekDay() {
  var date = new Date();
  var dateTime = date.getTime();
  // var dateDay = date.getDay();
  var oneDayTime = 24 * 60 * 60 * 1000;
  var lastWeekTime = dateTime - 7 * oneDayTime;
  var lastDate = new Date(lastWeekTime);
  var lMonth = lastDate.getMonth() + 1;
  var ldate = lastDate.getDate();
  if (lMonth < 10) {
    lMonth = "0" + lMonth;
  }
  if (ldate < 10) {
    ldate = "0" + ldate;
  }
  return lastDate.getFullYear() + "-" + lMonth + "-" + ldate;
}

/**
 * 数组去重
 * @returns {Array}
 */
export function unique(arr) {
  var n = {};
  var r = []; // n为hash表，r为临时数组
  for (var i = 0; i < arr.length; i++) { // 遍历当前数组
    if (!n[arr[i]]) { // 如果hash表中没有当前项
      n[arr[i]] = true; // 存入hash表
      r.push(arr[i]); // 把当前数组的当前项push到临时数组里面
    }
  }
  return r;
}

/**
 * 获取锁定时间秒数
 * @param lockTime
 */
export function getSecondNum(lockTime) {
  var formatH = parseInt(lockTime.h);
  var formatM = parseInt(lockTime.m);
  if (!formatH) {
    formatH = 0;
  }
  if (!formatM) {
    formatM = 0;
  }
  var second = formatH * 3600 + formatM * 60;
  return second;
}
/**
 * 根据传入的值获取高4位二进制的值
 * @param v
 * @returns {*}
 */
export function getHeight4Byte(v) {
  return v >> 4;
}

/**
 * 深表复制
 * @param obj) 复制对象
 * @returns newObj 复制结果
 * */
export function deepCopy(obj) {
  var newObj = {};
  if (obj instanceof Array) {
    newObj = [];
  }
  for (var key in obj) {
    var val = obj[key];
    newObj[key] = typeof val === "object" ? deepCopy(val) : val;
  }
  return newObj;
}

/**
 * 数组去重方法 返回一个新对象数组，原有数组没改变！！！
 * @returns {Array}
 */
export function unique2(arr) {
  var n = {};
  var r = []; // n为hash表，r为临时数组
  for (var i = 0; i < arr.length; i++) { // 遍历当前数组
    if (!n[arr[i]]) { // 如果hash表中没有当前项
      n[arr[i]] = true; // 存入hash表
      r.push(arr[i]); // 把当前数组的当前项push到临时数组里面
    }
  }
  return r;
}

/**
 * 用户所属部门，获取路口列表用到
 * @param userDepartments
 * @returns {{ver: string, user: *, ar: {degree: number, primary_unit: number, unit_two: Array, unit_three: Array}, index: number, count: number}}
 */
export function initReqJson(userDepartments, current_user) {
  var reqJson = {
    "ver": "1.0",
    "user": current_user,
    "ar": {
      "degree": 1, // 行政单位代表
      "primary_unit": 10, // 一级行政单位支队
      "unit_two": [], // 大队
      "unit_three": [] // 中队
    },
    "index": 1,
    "count": 1000
  };
  var userDepartment = userDepartments[0];
  for (var i = 1; i < userDepartments.length; i++) {
    if (userDepartments[i].lft < userDepartment.lft) {
      userDepartment = userDepartments[i];
    }
  }
  reqJson.ar.degree = parseInt(userDepartment.lft);
  if (userDepartment.lft === 1) {
    reqJson.ar.primary_unit = parseInt(userDepartment.code);
  } else if (userDepartment.lft === 2) {
    reqJson.ar.unit_two.push(parseInt(userDepartment.code));
  } else if (userDepartment.lft === 3) {
    reqJson.ar.unit_two.push(parseInt(userDepartment.code.toString().substring(0, 2)));
    reqJson.ar.unit_three.push(parseInt(userDepartment.code));
  }
  return reqJson;
}
