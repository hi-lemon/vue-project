import request from "@/utils/request";
import configContentType from "./config";

/**
 * 获取所有行政区划
 */
export function getAllDepartmentList() {
  return request({
    url: "/platform/webservice/findAllDepartments?userName=admin1",
    method: "get"
  });
}
/**
 * 获取当前用户行政区划
 */
export function getUserDepartmentList() {
  return request({
    url: "/platform/webservice/findAllDepartments?userName=admin1",
    method: "get"
  });
}
/**
 * 获取所有信号机数据
 */
export function getAcsList(data) {
  return request({
    url: "/intellitbi/get_acs_devices",
    headers: { "Content-Type": configContentType.json },
    method: "post",
    data: data
  });
}
/**
 * 获取所有信号机状态数据
 */
export function getAcsStateList(data) {
  return request({
    url: "/intellirt/get_acs_states",
    headers: { "Content-Type": configContentType.json },
    method: "post",
    data: data
  });
}
/**
 * 获取所有信号机版本数据
 */
export function getAcsVersionList(data) {
  return request({
    url: "/intellirt/get_device_versions",
    headers: { "Content-Type": configContentType.json },
    method: "post",
    data: data
  });
}
