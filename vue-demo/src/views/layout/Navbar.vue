<!--
 * @Author: yyl
 * @Description: 菜单栏
 -->
<template>
  <el-header class="header" height="64px">
    <div class="header-title">Intellific OS | 信号监控</div>
    <ul>
      <li v-for="tab in menuList" :key="tab.name" :class="{'selected': selectedTab === tab.id}" @click="goTabPage(tab)">{{ tab.name }}</li>
    </ul>
    <div class="login-info">
      <el-dropdown trigger="click" placement="bottom">
        <el-button type="text">
          <span :title="userName">{{ userName }}</span>
          <i class="el-icon-arrow-down el-icon--right" />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="exitLogin">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script>
// import { createNamespacedHelpers } from "vuex";
// const { mapState, mapMutations } = createNamespacedHelpers("app");
export default {
  name: "NavBar",
  data() {
    return {
      menuList: [{
        id: "im",
        name: "路口监控"
      }, {
        id: "rm",
        name: "区域监控"
      }, {
        id: "cs",
        name: "集中调度"
      }, {
        id: "om",
        name: "运行维护"
      }],
      selectedTab: "",
      userName: "admin1"
    };
  },
  created() {
    const name = this.$route.name;
    this.selectedTab = name || "im";
  },
  methods: {
    goTabPage(tab) {
      this.selectedTab = tab.id;
      this.$router.push(tab.id);
    }
  }
};
</script>
<style lang="scss" scoped>
  .header {
    background-image: linear-gradient(312deg, #141f54 0%, #114a9e 100%);
    box-shadow: 0px 1px 4px 0px rgba(3, 14, 22, 0.53);
    .header-title {
      float: left;
      height: 64px;
      line-height: 64px;
      font-size: 20px;
      color: #fff;
    }
    ul {
      position: relative;
      left: 150px;
      float: left;
      height: 64px;
      line-height: 64px;
      list-style: none;
      li {
        width: 100px;
        text-align: center;
        font-size: 16px;
        &:not(:last-child) {
          margin-right: 50px;
        }
        color: #fff;
        float: left;
        cursor: pointer;
        &.selected {
          color: #00fefe;
          border-bottom: 2px solid #00fefe;
        }
      }
    }
    .login-info {
      float: right;
      line-height: 64px;
      height: 64px;
      right: 10px;
      color: #fff;
    }
  }
</style>
