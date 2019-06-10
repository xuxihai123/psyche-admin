<template>
  <main-panel class="email-container" title="邮件通知配置">
    <el-form ref="form" :model="formData" label-width="80px" v-loading="loading">
      <el-form-item label="邮件用户">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="邮件密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item label="邮件主机">
        <el-input v-model="formData.host"></el-input>
      </el-form-item>
      <el-form-item label="开启ssl">
        <el-switch v-model="formData.ssl"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="update" :loading="doLoading">更新</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </main-panel>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import settingSvc from '@/services/setting';

@Component
export default class EmailSetting extends Vue {
  private formData: any = {
    username: '',
    password: '',
    host: '',
    ssl: false,
  };

  private loading: boolean = true;
  private doLoading: boolean = false;

  private async mounted() {
    try {
      this.loading = true;
      const result = await settingSvc.findEmailSetting();
      if (result) {
        Object.assign(this.formData, result);
      }
    } catch (err) {
      this.$message.error(err.message);
    } finally {
      this.loading = false;
    }
  }
  private async update() {
    try {
      this.doLoading = true;
      const result = await settingSvc.updateEmailSetting(this.formData);
      this.$message.success('更新成功！');
    } catch (err) {
      this.$message.error(err.message);
    } finally {
      this.doLoading = false;
    }
  }
}
</script>

<style lang="scss">
.email-container {
  .el-input {
    width: 300px;
  }
}
</style>
