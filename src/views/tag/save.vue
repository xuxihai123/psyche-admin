<template>
  <div class="more-setting" v-click-outside="closeModal">
    <el-form ref="form" :model="formData" label-position="top" label-width="80px">
      <h5 class="setting-title">标签设置</h5>
      <el-form-item label="Name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="URL">
        <el-input v-model="formData.slug"></el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input :rows="3" type="textarea" v-model="formData.description"></el-input>
      </el-form-item>
      <el-form-item label="Meta title">
        <el-input v-model="formData.meta_title"></el-input>
      </el-form-item>
      <el-form-item label="Meta Description">
        <el-input :rows="3" type="textarea" v-model="formData.meta_description"></el-input>
      </el-form-item>
      <div class="btns">
        <el-button type="primary" @click="onSubmit">保存</el-button>
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

  private formData: any = {
    name: '',
    slug: '',
    description: '',
    meta_title: '',
    meta_description: '',
  };
  private doLoading: boolean = false;
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
        await services.tagService.update(this.formData);
        this.$message.success('更新成功！');
      } else {
        await services.tagService.create(this.formData);
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

