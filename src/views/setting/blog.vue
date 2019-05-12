<template>
  <main-panel class="email-container" title="博客设置">
    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="logo">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item label="主机">
        <el-input v-model="formData.host"></el-input>
      </el-form-item>
      <el-form-item label="ssl">
        <el-switch v-model="formData.ssl"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="update">更新</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </main-panel>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component
export default class BlogSetting extends Vue {
  private formData: any = {
    username: '',
    password: '',
    host: '',
    ssl: false,
  };

  private update() {
    console.log('update...');
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
