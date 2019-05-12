<template>
  <el-form
    :model="formData"
    :rules="rules"
    ref="formData"
    label-position="left"
    label-width="0px"
    class="demo-ruleForm login-container"
  >
    <h3 class="title">口令认证</h3>
    <el-form-item prop="token">
      <el-input
        type="password"
        prefix-icon="el-icon-lock"
        v-model="formData.token"
        auto-complete="off"
        placeholder="口令"
      ></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button
        type="primary"
        style="width:100%;"
        @click.native.prevent="loginSys"
        :loading="logining"
      >确定</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>



<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import userSvc from '@/services/user';
@Component
export default class LoginStep2 extends Vue {
  private formData: any = {
    token: '123456',
  };
  private checked: boolean = false;
  private logining: boolean = false;
  private rules: any = {};

  private async loginSys() {
    // console.log('login...');
    try {
      this.logining = true;
      await userSvc.auth({token: this.formData.token});
      this.$router.push('/');
    } catch (err) {
      console.log(err);
    } finally {
      this.logining = false;
    }
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
}
</style>