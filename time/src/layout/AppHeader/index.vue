<template>
  <div class="header">
    <div class="left">
      <el-button @click="handeradd" class="btns" type="text" icon="el-icon-s-unfold"></el-button>
      <el-tag v-for="(item, index) in goods" :key="index">
        <span class="tagview" @click="gotoleft(index)">{{ item }}</span>
        <span @click="del(index)">x</span>
      </el-tag>
    </div>
    <div class="right">
      <el-dropdown @command="deletes">
        <span class="el-dropdown-link">
          <b>duck</b> <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="emitl">个人设置</el-dropdown-item>
          <el-dropdown-item command="del">退出</el-dropdown-item>
        </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { removeItem } from "../../utils/storage";
export default {
  data() {
    return {
      goods: [],
    };
  },
  methods: {
    handeradd(){
      this.$store.dispatch('menu/setCollapse')
    },
    del(index) {
      this.$store.commit("del", index);
    },
    gotoleft(index) {
      this.$store.commit("gotoleft", index);
    },
    gotoleft(index) {
      console.log(index);
      if (index == 0) {
        this.$router.push("/ketsu");
      }
      if (index == 1) {
        this.$router.push("/sys/users");
      }
      if (index == 2) {
        this.$router.push("/sys/roles");
      }
      if (index == 3) {
        this.$router.push("/sys/menus");
      }
    },
    deletes(command) {
      console.log(command);
      if (command === 'emitl') {
        alert('6')
      }
      if (command === 'del') {
        removeItem('token')
        this.$router.push('/login')
      }
    },
  },
  created() {
    this.goods = this.$store.state.goods;
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.btns{
  font-size: 25px;
  color: #ffffff;
}
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-dropdown-link {
  font-size: 18px;
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
span {
  padding: 0 5px 0 5px;
  margin-left: 5px;
}
.tagview{
  cursor: pointer;
}
</style>
