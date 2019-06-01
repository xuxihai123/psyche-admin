<template>
  <div class="more-setting" v-click-outside="closeModal">
    <el-form ref="form" :model="formData" :rules="rules" label-position="top" label-width="80px">
      <h5 class="setting-title">导航设置</h5>
      <el-form-item label="导航名称">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="导航链接">
        <el-input v-model="formData.link"></el-input>
      </el-form-item>
      <el-form-item label="导航图标">
        <el-input v-model="formData.icon"></el-input>
      </el-form-item>
      <div class="btns">
        <el-button type="primary" @click="onSubmit" :loading="doLoading">保存</el-button>
        <el-button @click="closeModal">取消</el-button>
      </div>
    </el-form>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import services from '@/services';
@Component
export default class MoreSetting extends Vue {
  @Prop()
  private editObj: any;

  private doLoading: boolean = false;
  private formData: any = {
    name: '',
    link: '',
    icon: '',
  };
  private rules: any = {
    name: [{required: true}],
    link: [{required: true}],
  };

  private mounted() {
    if (this.editObj) {
      Object.assign(this.formData, this.editObj);
    }
  }
  private async onSubmit() {
    console.log('submit...');
    try {
      this.doLoading = true;
      if (this.editObj) {
        await services.navigationService.update(this.formData);
        this.$message.success('更新成功！');
      } else {
        await services.navigationService.create(this.formData);
        this.$message.success('创建成功！');
      }
      this.closeModal();
      this.$emit('refreshList');
    } catch (err) {
      this.$message.error(err.message);
    } finally {
      this.doLoading = false;
    }
  }
  private closeModal() {
    this.$emit('close');
  }
}
</script>
