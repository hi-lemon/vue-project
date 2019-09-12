<!--
 * @Author: yyl
 * @Description: map + router-view
 -->
<template>
  <el-main class="app-main">
    <!-- <Map /> -->
    <transition name="fade-toggle" mode="out-in">
      <router-view :key="key" class="page" />
    </transition>
  </el-main>
</template>
<script>
// import Map from "@/components/map/map";
export default {
  name: "AppMain",
  components: {
    // Map
  },
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>
<style lang="scss">
.app-main {
  &.el-main {
    padding: 0;
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
