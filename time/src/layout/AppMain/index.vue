<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{this.$store.state.name}}</el-breadcrumb-item>
      
    </el-breadcrumb>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:""
    };
  },
  methods: {},
  created() {
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped></style>
