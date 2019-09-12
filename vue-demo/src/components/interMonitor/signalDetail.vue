<!--
 * @Author: yyl
 * @Description: 信号机详情
 -->
<template>
  <div v-show="isShow" class="signal-detail">
    <div class="title">
      <div class="icon" />
      <div class="text">{{ currentAcsData.name }}</div>
    </div>
    <div class="close" @click="close"><i class="el-icon-close" /></div>
    <el-form ref="currentAcsData" :model="currentAcsData" label-width="100px">
      <el-form-item label="信号机名称：">
        <div :title="currentAcsData.name">{{ currentAcsData.name }}</div>
      </el-form-item>
      <el-form-item label="信号机ID：">
        <span>{{ currentAcsData.id }}</span>
      </el-form-item>
      <el-form-item label="IP地址：">
        <span>{{ currentAcsData.ip }}</span>
      </el-form-item>
      <el-form-item label="设备型号：">
        <div :title="currentAcsData.version">{{ currentAcsData.version }}</div>
      </el-form-item>
      <el-form-item label="设备类型：">
        <span>{{ currentAcsData.versionText }}</span>
      </el-form-item>
      <el-form-item label="信号机状态：">
        <span>{{ currentAcsData.state }}</span>
      </el-form-item>
    </el-form>
    <el-button @click="doMonitor">监控</el-button>
  </div>
</template>
<script>
import { dev_type_map } from "@/js/common_acs.js";
export default {
  name: "SignalDetail",
  data() {
    return {
      isShow: false, // 是否显示
      currentAcsData: {}
    };
  },
  mounted() {},
  methods: {
    initData(data) {
      this.isShow = true;
      this.currentAcsData = {
        id: data.acs_id || "-",
        name: data.name || "-",
        ip: data.ip || "-",
        version: data.version || "版本未知",
        versionText: dev_type_map.get(data.dev_type) || "-",
        state: data.acsState || "-"
      };
    },
    close() {
      this.isShow = false;
      this.$emit("closeDetail");
    },
    doMonitor() {

    }
  }
};

</script>
<style lang="scss" scoped>
.signal-detail {
  width: 310px;
  height: calc(100% - 180px);
  position: absolute;
  right: 0;
  top: 60px;
  background-color: #04193e;
  border: solid 1px rgba(4, 78, 105, 0.51);
  overflow: auto;

  .close {
    position: absolute;
    top: 20px;
    right: 10px;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
  }

  .title {
    width: 290px;
    height: 60px;
    margin: 0 10px;
    border-bottom: 1px solid #4c5262;
    position: relative;

    .icon {
      width: 3px;
      height: 25px;
      background-color: #00fefe;
      float: left;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }

    .text {
      float: left;
      color: #fff;
      height: 60px;
      line-height: 60px;
      margin-left: 15px;
      font-size: 14px;
    }
  }

  .el-button {
    width: 280px;
    border-radius: 2px;
    background: transparent;
    border: 1px solid rgba(0, 254, 254, 0.37);
    margin: 40px 14px 0 14px;
    color: #fff;
  }

  .el-button:hover,
  .el-button:focus {
    background: transparent;
    border: 1px solid #00fefe;
  }
}

</style>
<style lang="scss">
.el-form {
  margin: 15px 0 0 25px;

  .el-form-item {
    margin-bottom: 0;
  }

  .el-form-item__label {
    text-align: left;
    color: #fff;
    font-weight: normal;
    font-size: 12px;
  }

  .el-form-item__content span {
    color: #00fdfd;
    font-size: 12px;
  }

  .el-form-item__content div {
    color: #00fdfd;
    font-size: 12px;
    width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

</style>
