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
      :data="rolesgoods"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <el-table-column type="index" label="序号"> </el-table-column>

      <el-table-column property="name" label="用户名"> </el-table-column>
      <el-table-column property="code" label="编码">
      </el-table-column>
      <el-table-column property="remark" label="描述">
      </el-table-column>

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
       <el-table-column property="createTime" label="创建时间"> </el-table-column>
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
  data () {
    return {
      formInline: {
        user: "",
      },
        rolesgoods: [],
    }
  },
  methods: {

  },
  created () {
    APIuser.getRolelist().then(res=>{
      console.log(res);
      this.rolesgoods = res.records;
      console.log(this.rolesgoods);
      this.value = res.records.deleted == "0" ? false : true;
    })
  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
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
