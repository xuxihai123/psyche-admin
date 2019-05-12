<template>
  <el-form
    :model="formData"
    :rules="rules"
    ref="formData"
    label-position="left"
    label-width="0px"
    class="demo-ruleForm login-container"
  >
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" prefix-icon="el-icon-user" v-model="formData.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" prefix-icon="el-icon-lock" v-model="formData.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="verifycode">
      <el-input
       prefix-icon="el-icon-key"
        type="text"
        v-model="formData.verifycode"
        auto-complete="off"
        placeholder="验证码"
        style="width:160px;"
      ></el-input>
      <img :src="captchaUrl" class="captcha" @click="refreshToken">
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button
        type="primary"
        style="width:100%;"
        @click.native.prevent="loginSys"
        :loading="logining"
      >登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>



<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import userSvc from '@/services/user';
@Component
export default class LoginStep1 extends Vue {
  private formData: any = {
    username: 'admin',
    password: 'admin',
    verifycode: '123456',
  };
  private checked: boolean = false;
  private logining: boolean = false;
  private captchaUrl: string = '';
  private rules: any = {};

  private mounted() {
    this.refreshToken();
  }
  private async loginSys() {
    // console.log('login...');
    try {
      this.logining = true;
      const payload = {
        username: this.formData.username,
        password: this.formData.password,
        verifycode: this.formData.verifycode,
      };
      await userSvc.login(payload);
      this.$router.push('/login/step2');
    } catch (err) {
      console.log(err);
    } finally {
      this.logining = false;
    }
  }
  private refreshToken() {
    this.captchaUrl = '/api/v1/captcha?time=' + Date.now();
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
  .captcha {
    height: 32px;
    vertical-align: middle;
    margin-left: 30px;
  }
}
</style>