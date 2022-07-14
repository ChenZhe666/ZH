<template>
  <div>
    <div class="from">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input
            v-model="formInline.user"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-button class="btn" type="primary" icon="el-icon-edit">新增</el-button>
    </div>
  </div>
</template>

<script>
 import APIuser from '../../api/user'
export default {
  data() {
    return {
      formInline: {
        user: "",
      },
    };
  },
  methods: {},
  created() {
    APIuser.getgoodsmenulist().then(res=>{
      console.log(res);
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.from {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  .btn {
    width: 100px;
    height: 40px;
    text-align: center;
  }
}
</style>
