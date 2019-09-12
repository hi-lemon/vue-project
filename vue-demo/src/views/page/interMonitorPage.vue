<!--
 * @Author: yyl
 * @Description: 路口监控
 -->
<template>
  <div class="inter-monitor">
    <signal-list
      ref="signalList"
      @viewDetail="viewDetail"
    />
    <signal-detail
      ref="signalDetail"
      @closeDetail="closeDetail"
    />
  </div>
</template>
<script>
import SignalList from "@/components/interMonitor/signalList";
import SignalDetail from "@/components/interMonitor/signalDetail";
export default {
  name: "InterMonitorPage",
  components: {
    SignalList,
    SignalDetail
  },
  data() {
    return {};
  },
  methods: {
    // 页面右侧弹框显示信号机详情
    viewDetail(data) {
      this.$refs.signalDetail.initData(data);
    },
    // 关闭页面右侧弹框
    closeDetail() {
      this.$refs.signalList.clearAcsSelect();
    }
  }
};
</script>
<style lang="scss" scoped>
  .inter-monitor {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
