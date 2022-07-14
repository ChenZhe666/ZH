<template>
  <div>
    <el-menu
      router
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#242d32"
      text-color="#fff"
      active-text-color="#ffd04b"
      :index="index"
    >
      <el-menu-item index="/ketsu">
        <i class="el-icon-menu"></i>
        <span slot="title">控制台</span>
      </el-menu-item>
      <el-submenu
        :index="index"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="ele in list"
            :key="ele.id"
            :index="ele.path"
            @click="add(ele.label)"
            >{{ ele.label }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import APIuser from "../../api/user";
import store from "../../store";
export default {
  data() {
    return {
      list: [],
      title:""
    };
  },
  methods: {
    add(label){
      // console.log(label);
      
      console.log(this.goods);
      store.commit('add',label)
    }
  },
  created() {
    APIuser.getMenulist().then((res) => {
      // console.log(res.menus[1].label);
      this.title = res.menus[1].label
      this.list = res.menus[1].children;
      // console.log(list[1].label);
    });
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped></style>
