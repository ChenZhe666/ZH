<template>
  <div class="login">
    <h1>智慧服务平台</h1>

    <div class="login-oo">
      <h2>欢迎登陆</h2>
      <el-form ref="form" :rules="rules" :model="loginForm">
        <el-form-item prop="username">
          <el-input
            v-model.trim="loginForm.username"
            placeholder="请输入账号"
            suffix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            clearable
            v-model.trim="loginForm.password"
            show-password
            placeholder="请输入密码"
            suffix-icon="el-icon-s-goods"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="verify">
            <el-input
              class="yzm"
              v-model.trim="loginForm.code"
              placeholder="请输入验证码"
            ></el-input>
            <el-image @click.stop="handleCodeRefresh" :src="codeImageUrl" />
          </div>
        </el-form-item>
        <el-form-item>
           <el-button class="login-button" :loading="loadingStatus" @click="handleVerifyForm" type="danger">{{loadingStatus ? '登录中...' : '立即登录' }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import rules from "./rules";
import APIuser from "../api/user";
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      codeImageUrl: "",
      loadingStatus: false,
      loginForm: {
        username: "duck",
        password: "admin888",
        code: "",
        token: "",
      },
      rules,
    };
  },
  methods: {
    handleGetCaptcha() {
      APIuser.getCaptcha().then((res) => {
        console.log(res);
        this.codeImageUrl = res.captchaImg;
        this.loginForm.token = res.token;
      });

      // this.codeImageUrl = captchaImg;
      // this.loginForm.token = token;
    },

    handleCodeRefresh() {
      this.loginForm.code = "";
      this.handleGetCaptcha();
    },

    async handleSubmitLogin() {
      try {
        const token = await this.login(this.loginForm);
        if (!token) return;
        this.$notify({ title: '提示', message: '登录成功', type: 'success' })
        this.loadingStatus = true
        await this.$router.push("/ketsu");
      } catch (e) {
        console.log(e);
      }
      finally {
        this.loadingStatus = false
      }
    },
    handleVerifyForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleSubmitLogin();
        }
      });
    },
    ...mapActions({
      login: "user/login",
    }),
  },
  created() {
    this.handleGetCaptcha();
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Verdana;
  background-size: cover;
  background: url("../assets/images/bg.jpg") no-repeat fixed center;

  h1 {
    text-align: center;
    font-size: 42px;
    margin-top: 50px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
  .login-oo {
    margin: 10% auto 13%;
    width: 20%;
    h2 {
      color: #fff;
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
}
.el-form {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  .el-input {
    padding: 2px 2px 2px 2px;
    background: #fff;
  }
  .yzm {
    -webkit-appearance: none;
    // background-color: #fff;
    border-radius: 4px;
    // border: 1px solid #dcdfe6;
    // box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    // padding: 0 15px;
    // transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 40%;
  }
  .el-image {
    width: 40%;
    height: 100%;
    font-size: 100%;
    border-radius: 4px;
    position: absolute;
    top: 0px;
    right: 10px;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
}
.el-button {
  width: 100%;
}
</style>
