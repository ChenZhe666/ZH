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
      <el-button class="btn" type="primary" icon="el-icon-edit" >新增</el-button>
    </div>

    <el-table
      ref="singleTable"
      :data="usergoods"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <el-table-column type="index" label="序号"> </el-table-column>

      <el-table-column property="username" label="用户名"> </el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt="" />
        </template>
      </el-table-column>
      <el-table-column label="角色">
        <template slot-scope="scope">
          <el-tag> {{ scope.row.roles[0].name }} </el-tag>
        </template>
      </el-table-column>
      <el-table-column property="email" label="邮箱"> </el-table-column>
      <el-table-column property="createTime" label="注册时间"></el-table-column>
      <el-table-column property="deleted" label="状态">
        <template>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="success" size="mini"
            >编辑</el-button
          >
          <el-button type="warning" size="mini">警告按钮</el-button>
          <el-button type="danger" size="mini">危险按钮</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import APIuser from "../../api/user";
export default {
  data() {
    return {
      formInline: {
        user: "",
      },
      usergoods: [],
      value: true,
      userlist: {
        current: "1",
        size: "15",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
  created() {
    APIuser.getUserlist().then((res) => {
      console.log(res);
      this.usergoods = res.records;
      this.value = res.records.deleted == "0" ? false : true;
    });
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.from{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn{
    width: 100px;
    height: 40px;
    text-align: center;
  }
}
.el-form {
  margin-top: 20px;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
