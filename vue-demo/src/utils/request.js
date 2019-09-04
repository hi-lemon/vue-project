import axios from "axios";
// import { MessageBox, Message } from "element-ui";
import { Message } from "element-ui";
import Log from "@/utils/log";
// import store from '@/store'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000 // request timeout
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  }
});
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config;
  },
  error => {
    // do something with request error
    Log.error(error);
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    let res = response.data;
    if (typeof res === "string") {
      res = res.trim();
    }
    if (res !== "") {
      if (typeof res === "string") {
        res = JSON.parse(res);
      }
      res.meta = {
        success: response.status === 200 || response.status === 201
      };
    }
    // console.info("response:", response);

    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message || "Error",
    //     type: "error",
    //     duration: 5 * 1000
    //   });

    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm(
    //       "You have been logged out, you can cancel to stay on this page, or log in again",
    //       "Confirm logout",
    //       {
    //         confirmButtonText: "Re-Login",
    //         cancelButtonText: "Cancel",
    //         type: "warning"
    //       }
    //     ).then(() => {
    //       // store.dispatch('user/resetToken').then(() => {
    //       //   location.reload()
    //       // })
    //     });
    //   }
    //   return Promise.reject(new Error(res.message || "Error"));
    // } else {
    return res;
    // }
  },
  error => {
    Log.error(error);
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
