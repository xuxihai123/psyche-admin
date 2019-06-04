<template>
  <main-panel class="email-container" title="博客设置">
    <el-form ref="form" :model="formData" label-width="120px">
      <el-form-item label="博客地址">
        <el-input v-model="formData.blogUrl"></el-input>
      </el-form-item>
      <el-form-item label="博客标题">
        <el-input v-model="formData.blogTitle"></el-input>
      </el-form-item>
      <el-form-item label="博客子标题">
        <el-input v-model="formData.blogSubTitle"></el-input>
      </el-form-item>
      <el-form-item label="logo">
        <el-input v-model="formData.blogLogo"></el-input>
      </el-form-item>
      <el-form-item label="favicon">
        <el-input v-model="formData.faviconUrl"></el-input>
      </el-form-item>
      <el-form-item label="Meta">
        <el-input v-model="formData.blogMeta"></el-input>
      </el-form-item>
      <el-form-item label="Meta Description">
        <el-input v-model="formData.blogMetaDesc"></el-input>
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
export default class BlogSetting extends Vue {
  private formData: any = {
    blogUrl: '',
    blogTitle: '',
    blogSubTitle: '',
    blogLogo: '',
    faviconUrl: '',
    blogMeta: '',
    blogMetaDesc: '',
  };
  private loading: boolean = true;
  private doLoading: boolean = false;

  private async mounted() {
    try {
      this.loading = true;
      const result = await settingSvc.findBaseSetting();
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
      const result = await settingSvc.updateBaseSetting(this.formData);
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
