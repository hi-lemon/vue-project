<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// const WIDTH = 1920; // refer to Bootstrap's responsive design
const delay = 200;
import { debounce } from "@/utils";
export default {
  name: "App",
  beforeDestroy() {
    window.removeEventListener("resize", debounce(this.resize, delay));
  },
  mounted() {
    this.resize();
    window.addEventListener("resize", debounce(this.resize, delay));
  },
  methods: {
    resize() {
      this.$bus.$emit("window-resize", window.innerHeight, window.innerWidth);
      this.setScale();
    },
    setScale() {
      // const scale = window.innerWidth / WIDTH;
      // this.$store.commit("app/SET_SCALE", scale);
    }
  }
};
</script>

