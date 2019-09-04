/*
 * @Author: hwj
 * @Date: 2019-06-19 10:55:15
 * @LastEditors: hwj
 * @LastEditTime: 2019-08-11 15:25:01
 * @Description: 公用方法
 */
/* eslint-disable */
import { Message } from "element-ui";
import Log from "./log";
/**
 * @msg: 错误提示
 * @param {String} err
 */
export function errorMsgTip(err) {
  Log.error(err);
  Message({
    type: "error",
    message: err
  });
}
/**
 * 用户所属部门，获取路口列表用到
 * @param userDepartments
 * @returns {{ver: string, user: *, ar: {degree: number, primary_unit: number, unit_two: Array, unit_three: Array}, index: number, count: number}}
 */
export function initReqJson(userDepartments, current_user) {
  var reqJson = {
    ver: "1.0",
    user: current_user,
    ar: {
      degree: 2, // 行政单位代表
      primary_unit: 10, // 一级行政单位支队
      unit_two: [], // 大队
      unit_three: [] // 中队
    },
    index: 1,
    count: 1000
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
    reqJson.ar.unit_two.push(
      parseInt(userDepartment.code.toString().substring(0, 2))
    );
    reqJson.ar.unit_three.push(parseInt(userDepartment.code));
  }
  return reqJson;
}
/**
 * @msg: 字符串转数组
 * @param {String} rings
 * @return: Object:centerXY
 */
export function strToArray(rings) {
  // let rings = "[[[120,30],[121,31],[122,32],[123,33]]]";
  rings = rings && rings.substring(2, rings.length - 2);
  const ringsArr = rings.split("[");
  let x = 0;
  let y = 0;

  const length = ringsArr.length;
  ringsArr.forEach((r, index) => {
    let xy = [];
    if (index !== 0) {
      if (index === length - 1) {
        r = r.substring(0, r.length - 1);
        xy = r.split(",");
      } else {
        r = r.substring(0, r.length - 2);
        xy = r.split(",");
      }
      x += parseFloat(xy[0]);
      y += parseFloat(xy[1]);
    }
  });
  const centerXY = {
    lng: x / (length - 1),
    lat: y / (length - 1)
  };
  return centerXY;
}

// 格式化
Date.prototype.format = function(format) {
  var date = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? date[k]
          : ("00" + date[k]).substr(("" + date[k]).length)
      );
    }
  }
  return format;
};
