/**
 * @Author: yyl
 * @Description: socketIO公共js
 */
/* eslint-disable */
import io from "socket.io-client";
import {
  unique
} from "@/js/commonUtils.js";
// var url = "http://10.10.20.39:36666";
// 单个消息体
var calssPath1 = "com.supconit.ticc_common.nettysocketio.entities.ChatObject";
// 批量订阅消息体为了解决IE9下同时多次调用emit无效问题
// * 比如页面同时调用socket.emit(A);socket.emit(B);socket.emit(C);socket.emit(D);socket.emit(E);
// * 只有A,B能发送数据到服务端，CDE无效，间隔发是可以的，同时发不行，
// * 如果后面谁能解决IE9下该问题，那么就可以恢复前面多次调用的灵活性
var calssPath = "com.supconit.ticc_common.nettysocketio.entities.RelChatObject";
var socketFn = function(url) {
  // socketFn("url") 或者 new socketFn("url")都可以使用socketFn方法
  if (!(this instanceof socketFn)) {
    return new socketFn(url);
  }
  this.socket = null;
  // 缓存订阅的东西，key为频道号，如果频道号是全匹配的话value为*，否则为实例ID拼接字符，逗号,隔开
  this.dataCache = new Map(); // 存放已订阅的频道号以及实例
  this.init(url);
  this.needSubCache = {
    "@class": calssPath,
    "list": []
  };
  this.needUnSubCache = {
    "@class": calssPath,
    "list": []
  };
};
socketFn.prototype = {
  init: function(url) {
    var _this = this;
    if (!!_this.socket && _this.socket.connected) {
      // console.log("连接存在，请勿重复初始化！");
      return;
    }
    var socket = io.connect(url);
    // 建立新的连接后执行方法
    socket.on("connect", function() {
      if (!_this.dataCache.size) {
        _this.dataCache.forEach(function(key, value, index) {
          if (value == "*") {
            _this.subChannel(key);
          } else {
            _this.subChannel(key, value);
          }
        });
      }
    });
    // 断开连接后执行方法
    socket.on("disconnect", function() {
      // console.log("socket连接断开！");
    });
    _this.socket = socket;
  },
  /**
   * 断开连接
   */
  sendDisconnect: function() {
    this.socket.disconnect();
    this.dataCache = new Map();
    return this;
  },
  /**
   * 订阅频道号
   * @param channelId -频道号
   * @param ids -实例ids，多个逗号隔开，在频道号不属于全匹配时使用
   */
  subChannel: function(channelId, ids) {
    var chatObject = {
      "@class": calssPath1,
      channelId: channelId,
      ids: ids
    };
    this.needSubCache.list.push(chatObject);
    return this;
  },
  /**
   * 取消订阅
   * @param channelId -频道号
   * @param ids -实例ids，多个逗号隔开，在频道号不属于全匹配时使用
   */
  unsubChannel: function(channelId, ids) {
    var chatObject = {
      "@class": calssPath1,
      channelId: channelId,
      ids: ids
    };
    this.needUnSubCache.list.push(chatObject);
    return this;
  },
  commit: function() {
    var _this = this;
    if (_this.needUnSubCache.list.length > 0) {
      _this.socket.emit("unsubChannel", _this.needUnSubCache, function(msg) {
        // code,desc,pageFunName,isMacth
        var data = JSON.parse(msg);
        for (var i = 0; i < data.length; i++) {
          var code = data[i].code;
          var desc = data[i].desc;
          var pageFunName = data[i].pageFunName;
          var isMacth = data[i].isMacth;
          var channelId = data[i].chatObject.channelId;
          var ids = data[i].chatObject.ids;
          _this.common(code, desc, pageFunName, isMacth, false, channelId, ids);
        }
        _this.needUnSubCache.list = [];
      });
    }
    if (_this.needSubCache.list.length > 0) {
      _this.socket.emit("subChannel", _this.needSubCache, function(msg) {
        console.log(msg);
        var data = JSON.parse(msg);
        for (var i = 0; i < data.length; i++) {
          var code = data[i].code;
          var desc = data[i].desc;
          var pageFunName = data[i].pageFunName;
          var isMacth = data[i].isMacth;
          var channelId = data[i].chatObject.channelId;
          var ids = data[i].chatObject.ids;
          _this.common(code, desc, pageFunName, isMacth, true, channelId, ids);
        }
        _this.needSubCache.list = [];
      });
    }
  },
  common: function(code, desc, pageFunName, isMacth, type, channelId, ids) {
    var _this = this;
    if (code == 0) {
      // 缓存中不存在
      if (!_this.dataCache.get(channelId)) {
        if (type == true) { // 订阅
          if (isMacth == true) { // 全匹配
            _this.dataCache.set(channelId, "*");
          } else {
            _this.dataCache.set(channelId, ids);
          }
          // 绑定频道号的页面回调方法对象
          var funObj = window[pageFunName];
          // 判断回调方法名是否是一个方法，是的话就绑定在socket连接上
          if (Object.prototype.toString.call(funObj) === "[object Function]") {
            _this.socket.on(pageFunName, funObj);
          }
        }
      } else { // 缓存中存在
        if (type == true) { // 订阅
          if (isMacth != true) { // 实例匹配
            var oldIds = _this.dataCache.get(channelId);
            var oldArr = (oldIds + "").split(",");
            var arr = (ids + "").split(",");
            var c = oldArr.concat(arr);
            var d = unique(c);
            var newIds = "";
            for (var i = 0; i < d.length; i++) {
              var obj = d[i];
              if (i == (d.length - 1)) {
                newIds += obj;
              } else {
                newIds += obj + ",";
              }
            }
            _this.dataCache.set(channelId, newIds);
          }
        } else { // 取消订阅
          if (isMacth == true) { // 全匹配
            _this.dataCache.delete(channelId);
          } else { // 实例匹配
            var oldIds = _this.dataCache.get(channelId);
            var oldArr = (oldIds + "").split(",");
            var arr = (ids + "").split(",");
            var newIds = "";
            var oldmap = new Map();
            for (var i = 0; i < oldArr.length; i++) {
              oldmap.set(oldArr[i], oldArr[i]);
            }
            for (var i = 0; i < arr.length; i++) {
              oldmap.delete(arr[i]);
            }
            oldmap.forEach(function(val, key) {
              newIds += val + ",";
            });
            if (newIds !== "") {
              newIds = newIds.substr(0, newIds.length - 1);
            }
            if (newIds === "") {
              _this.dataCache.delete(channelId);
            } else {
              _this.dataCache.set(channelId, newIds);
            }
          }
        }
      }
    }
  }
};
// 暴露对象
export {
  socketFn
};
