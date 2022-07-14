<template>
  <div>
    <el-container>
      <el-aside width="200px"><app-aside></app-aside></el-aside>
      <el-container>
        <el-header><app-header></app-header></el-header>
        <el-main><app-main> </app-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppAside from "./AppAside";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    AppAside,
    AppHeader,
    AppMain,
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}
.el-header {
  background-color: #45bb9b;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #232d32;
  color: #333;
}

.el-main {
  background-color: #e9edf0;
  color: #333;
}
</style>
