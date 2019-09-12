<!--
 * @Author: yyl
 * @Description: 信号机列表
 -->
<template>
  <div class="signal-list">
    <div class="list-header">
      <div class="list-title">
        <span class="icon" />
        <span class="text">路口监控</span>
      </div>
      <el-input v-model="searchText" placeholder="请输入关键字" @keyup.enter.native="doSearch">
        <i slot="suffix" class="el-input__icon el-icon-search" @click="doSearch" />
      </el-input>
    </div>
    <div class="list-content">
      <ul>
        <li v-for="tab in filterList" :key="tab.id" :class="{'selected': selectFilterId === tab.id}" @click="doFilter(tab.id)">{{ tab.name }}</li>
      </ul>
      <div class="filter-content" :class="{'diff-filter': filterContent.length > 4}">
        <div v-for="content in filterContent" :key="content.id" class="content-div" :class="{'diff-content': filterContent.length > 4}">
          <div>
            <img :src="content.imgUrl">
            <div class="label">{{ content.label }}</div>
          </div>
          <div class="number" :style="{color: content.color}">{{ content.number }}</div>
          <div v-if="content.isBorder" class="border" />
        </div>
      </div>
      <div class="tree">
        <div v-for="one in tableListArr" :key="one.id" class="tree-node">
          <div class="label" :class="{'node-select': one.isOpen}" @click="handleNodeClick(one)">{{ one.label }}</div>
          <div v-if="one.isOpen" class="group">
            <div v-for="two in one.children" :key="two.id" class="tree-node">
              <div class="label" @click="handleNodeClick(two)">
                <div class="icon" :class="{'icon-select': two.isOpen}" />
                <div class="text">{{ two.label }}</div>
              </div>
              <div v-if="two.isOpen" class="group">
                <div v-for="three in two.children" :key="three.id" class="tree-node">
                  <div class="label" :class="{'label-select': three.isSelect}" @click="handleNodeClick(three)">{{ three.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="tableListArr.length === 0" class="no-data">暂无数据</div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAllDepartmentList, getUserDepartmentList, getAcsList, getAcsStateList, getAcsVersionList } from "@/api/interMonitor.js";
import { getAcsCountStates, getAcsStateText, getIconSkinByState } from "@/js/common_acs.js";
import axios from "axios";
export default {
  name: "SignalList",
  data() {
    return {
      searchText: null, // 搜索值
      selectFilterId: 1,
      filterList: [{ // 信号机列表过滤条件
        id: 1,
        name: "按状态"
      }, {
        id: 2,
        name: "按拥堵"
      }, {
        id: 3,
        name: "按模式"
      }],
      filterContent: [], // 信号机列表过滤条件具体内容
      countState: { // 信号机状态计数
        xhjzx: 0,
        xhjgz: 0,
        xhjjj: 0,
        xhjlx: 0
      },
      allDepartmentMap: new Map(), // 所有行政区划
      userDepartmentMap: new Map(), // 当前用户行政区划
      acsListMap: new Map(), // 所有信号机数据
      allTableListArr: [], // 左侧列表数据
      tableListArr: [], // 左侧列表数据
      acsVersionMap: new Map(), // 所有信号机版本数据
      acsStateMap: new Map() // 所有信号机状态数据
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const _this = this;
      _this.refreshContent(1);
      const request1 = {
        ver: "1.0",
        user: "admin1"
      };
      const request2 = {
        ver: "1.0",
        user: "admin1",
        index: 1,
        count: 1000
      };
      axios.all([getAllDepartmentList(), getUserDepartmentList(), getAcsList(request1), getAcsStateList(request2), getAcsVersionList(request2)]).then(axios.spread(function(res1, res2, res3, res4, res5) {
        res1.forEach(val => {
          if (val.id) {
            _this.allDepartmentMap.set(val.id, val);
          }
        });
        res2.forEach(val => {
          if (val.id) {
            _this.userDepartmentMap.set(val.id, val);
          }
        });
        res3.data.forEach(val => {
          _this.acsListMap.set(val.acs_id, val);
          // 当该用户下因为分配资源组或某种原因存在其他行政区划节点，添加该节点
          if (!_this.userDepartmentMap.get(val.unit_three) && _this.allDepartmentMap.get(val.unit_three)) {
            _this.userDepartmentMap.set(val.unit_three, _this.allDepartmentMap.get(val.unit_three));
          }
          if (!_this.userDepartmentMap.get(val.unit_two) && _this.allDepartmentMap.get(val.unit_two)) {
            _this.userDepartmentMap.set(val.unit_two, _this.allDepartmentMap.get(val.unit_two));
          }
          if (!_this.userDepartmentMap.get(val.primary_unit) && _this.allDepartmentMap.get(val.primary_unit)) {
            _this.userDepartmentMap.set(val.primary_unit, _this.allDepartmentMap.get(val.primary_unit));
          }
        });
        res4.data.forEach(val => {
          _this.acsStateMap.set(val.acs_id, val.acs_comm_state);
        });
        res5.data.forEach(val => {
          _this.acsVersionMap.set(val.device_id, val.version_src);
        });
        _this.acsListMap.forEach((value, key) => {
          const state = _this.acsStateMap.get(key) || "";
          value.acsState = getAcsStateText(state);
          value.version = _this.acsVersionMap.get(key) || "";
          value.icon = getIconSkinByState(state, value.dev_type);
          getAcsCountStates(_this.countState, state);
        });
        _this.initData();
      })).catch(function(error) {
        console.log(error);
      });
    },
    initData() {
      const _this = this;
      _this.filterContent[0].number = _this.countState.xhjzx;
      _this.filterContent[1].number = _this.countState.xhjgz;
      _this.filterContent[2].number = _this.countState.xhjjj;
      _this.filterContent[3].number = _this.countState.xhjlx;
      // 找出支队节点
      let zdPid = null;
      try {
        _this.userDepartmentMap.forEach((value, key) => {
          if (value.pid === "0") {
            zdPid = value.id;
            throw new Error();
          }
        });
      } catch (e) {
        console.log(e);
      }
      // 找出大队
      _this.userDepartmentMap.forEach((value, key) => {
        if (value.pid === zdPid) {
          const info = {
            id: value.id,
            pId: value.pid,
            label: value.name,
            isOpen: false,
            level: 1,
            children: []
          };
          _this.tableListArr.push(info);
        }
      });
      // 找出中队
      _this.userDepartmentMap.forEach(value => {
        _this.tableListArr.forEach(list => {
          if (value.pid === list.id) {
            const info = {
              id: value.id,
              pId: value.pid,
              label: value.name,
              isOpen: false,
              level: 2,
              children: []
            };
            list.children.push(info);
          }
        });
      });
      // 找出信号机
      _this.tableListArr.forEach(list => {
        list.children.forEach(child => {
          _this.acsListMap.forEach(acs => {
            if (parseInt(acs.unit_three) === parseInt(child.id)) {
              const info = {
                id: acs.acs_id,
                pId: acs.unit_three,
                label: acs.name,
                isSelect: false,
                level: 3
              };
              child.children.push(info);
            }
          });
        });
      });
      _this.allTableListArr = JSON.parse(JSON.stringify(_this.tableListArr));
    },
    handleNodeClick(data) {
      if (data.level === 1 || data.level === 2) {
        if (data.children.length > 0) {
          data.isOpen = !data.isOpen;
        }
      } else if (data.level === 3) {
        this.clearAcsSelect();
        data.isSelect = true;
        this.$emit("viewDetail", this.acsListMap.get(data.id));
      }
    },
    clearAcsSelect() {
      this.tableListArr.forEach(one => {
        one.children.forEach(two => {
          two.children.forEach(three => {
            three.isSelect = false;
          });
        });
      });
    },
    // 根据关键字搜索信号机
    doSearch() {
      const _this = this;
      if (_this.searchText) {
        const acsArr = [];
        _this.acsListMap.forEach(value => {
          if (value.name.indexOf(_this.searchText) > -1 || String(value.acs_id).indexOf(_this.searchText) > -1) {
            acsArr.push(value);
          }
        });
      } else {
        _this.tableListArr = JSON.parse(JSON.stringify(_this.allTableListArr));
      }
    },
    // 切换信号机筛选条件
    doFilter(id) {
      this.selectFilterId = id;
      this.refreshContent(id);
    },
    // 切换信号机筛选内容
    refreshContent(id) {
      this.filterContent = [];
      if (id === 1) {
        this.filterContent = [{
          id: 1,
          label: "在线",
          number: this.countState.xhjzx,
          isBorder: true,
          color: "#9cff00",
          imgUrl: ""
        }, {
          id: 2,
          label: "故障",
          number: this.countState.xhjgz,
          isBorder: true,
          color: "#ed2222",
          imgUrl: ""
        }, {
          id: 3,
          label: "降级",
          number: this.countState.xhjjj,
          isBorder: true,
          color: "#f87b1a",
          imgUrl: ""
        }, {
          id: 4,
          label: "离线",
          number: this.countState.xhjlx,
          isBorder: false,
          color: "#a7a7a7",
          imgUrl: ""
        }];
      } else if (id === 2) {
        this.filterContent = [{
          id: 1,
          label: "畅通",
          number: "-",
          isBorder: true,
          color: "#9cff00",
          imgUrl: ""
        }, {
          id: 2,
          label: "拥挤",
          number: "-",
          isBorder: true,
          color: "#f87b1a",
          imgUrl: ""
        }, {
          id: 3,
          label: "拥堵",
          number: "-",
          isBorder: true,
          color: "#ed2222",
          imgUrl: ""
        }, {
          id: 4,
          label: "无数据",
          number: "-",
          isBorder: false,
          color: "#43d9c5",
          imgUrl: ""
        }];
      } else if (id === 3) {
        this.filterContent = [{
          id: 1,
          label: "单点定时",
          number: "-",
          isBorder: true,
          color: "#0c7dff",
          imgUrl: ""
        }, {
          id: 2,
          label: "单点优化",
          number: "-",
          isBorder: true,
          color: "#0c7dff",
          imgUrl: ""
        }, {
          id: 3,
          label: "手动模式",
          number: "-",
          isBorder: false,
          color: "#0c7dff",
          imgUrl: ""
        }, {
          id: 4,
          label: "联网定时",
          number: "-",
          isBorder: true,
          color: "#0ef2f2",
          imgUrl: ""
        }, {
          id: 5,
          label: "联网优化",
          number: "-",
          isBorder: false,
          color: "#0ef2f2",
          imgUrl: ""
        }];
      }
    }
  }
};

</script>
<style lang="scss" scoped>
.signal-list {
  width: 348px;
  height: 100%;
  background-image: linear-gradient(192deg, #0b2147 0%, #03122a 100%);
  background-color: #0b1c38;
  box-shadow: 0px 3px 6px 0px #000000;

  .list-header {
    width: 324px;
    height: 90px;
    margin: 0 12px;
    border-bottom: 1px solid #003446;

    .list-title {
      height: 50px;
      position: relative;

      .icon {
        width: 4px;
        height: 24px;
        background-color: #00fefe;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }

      .text {
        color: #fff;
        height: 50px;
        line-height: 50px;
        margin-left: 20px;
      }
    }
  }

  .list-content {
    width: 338px;
    height: calc(100% - 154px);
    margin: 0 5px;
    border-left: 1px solid #003446;
    border-right: 1px solid #003446;
    overflow: auto;

    ul {
      width: 326px;
      height: 30px;
      line-height: 30px;
      margin: 5px;
      background-color: #0a4372;
      list-style: none;

      li {
        float: left;
        width: 109px;
        height: 30px;
        text-align: center;
        color: #fff;
        font-size: 12px;
        cursor: pointer;

        &:not(:last-child) {
          width: 108px;
        }

        &.selected {
          color: #00fefe;
          background-color: #064f8c;
        }
      }
    }

    .filter-content {
      width: 326px;
      height: 72px;
      margin: 0 5px;
      border: 1px solid #0d5895;

      .content-div {
        width: 81px;
        height: 70px;
        float: left;
        text-align: center;
        color: #fff;
        font-size: 12px;
        position: relative;

        img {}

        .label {}

        .number {
          font-size: 16px;
          margin-top: 10px;
        }

        .border {
          width: 1px;
          height: 28px;
          background-color: #ffffff;
          opacity: 0.24;
          position: absolute;
          right: 0;
          top: 20px;
        }
      }

      .diff-content {
        width: 108px;
      }
    }

    .diff-filter {
      height: 142px;
    }

    .tree {
      position: relative;
      width: 326px;
      margin: 10px 5px;
      color: #fff;

      .tree-node {
        .label {
          width: 326px;
          height: 36px;
          line-height: 36px;
          background-color: rgba(0, 254, 254, 0.14);
          font-size: 14px;
          padding-left: 15px;
          margin: 10px 0;
          cursor: pointer;
        }

        .node-select {
          border: 1px solid #00fefe;
        }

        .group {
          .tree-node {
            .label {
              height: 28px;
              line-height: 28px;
              background-color: transparent;
              font-size: 12px;
              padding-left: 5px;

              .icon {
                width: 4px;
                height: 28px;
                background-color: #00fefe;
                float: left;
              }

              .icon-select {
                background-color: #fea900;
              }

              .text {
                width: 301px;
                height: 28px;
                line-height: 28px;
                background-color: #515867;
                border: 1px solid #3d3d3d;
                float: left;
                margin-left: 5px;
                padding-left: 15px;
              }
            }

            .group {
              .tree-node {
                .label {
                  width: 309px;
                  height: 28px;
                  line-height: 28px;
                  background-color: transparent;
                  margin-left: 5px;
                  padding-left: 30px;

                  &:hover {
                    background-color: #095e87;
                    border: 1px solid #0a6794;
                  }
                }

                .label-select {
                  background-color: #095e87;
                  border: 1px solid #0a6794;
                }
              }
            }
          }
        }
      }

      .no-data {
        position: absolute;
        left: 130px;
        top: 40px;
      }
    }
  }
}

</style>
<style lang="scss">
.el-input--medium .el-input__inner {
  width: 302px;
  height: 30px;
  line-height: 30px;
  background-color: #06243e;
  border: 1px solid #707070;
  opacity: 0.92;
  margin: 0 11px;
}

.el-input__suffix {
  top: -3px;
  right: 20px;
  cursor: pointer;
}

</style>
