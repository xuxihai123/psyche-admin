<template>
  <div class="more-setting">
    <el-form ref="form" :model="formData" label-position="top" label-width="80px">
      <h5 class="setting-title">标签设置</h5>
      <el-form-item label="名称">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="别名">
        <el-input v-model="formData.slug"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input :rows="3" type="textarea" v-model="formData.description"></el-input>
      </el-form-item>
      <el-form-item label="Tags">
        <el-select
          v-model="formData.tagIds"
          :multiple="true"
          :loading="tagLoading"
          :filterable="true"
        >
          <el-option v-for="item in tagsList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
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
export default class CategoryForm extends Vue {
  @Prop()
  private editObj: any;

  private formData: any = {
    name: '',
    slug: '',
    description: '',
    tagIds: [],
  };
  private doLoading: boolean = false;
  private tagLoading: boolean = false;
  private tagsList: any[] = [];

  private mounted() {
    this.loadTags();
    if (this.editObj) {
      Object.assign(this.formData, this.editObj);
      this.formData.tagIds = this.editObj.tags.map((tag: any) => tag.id);
    }
  }
  private async loadTags() {
    try {
      this.tagLoading = true;
      const result: any = await services.tagService.findAll({pageSize: 1000});
      this.tagsList = result.items || [];
    } finally {
      this.tagLoading = false;
    }
  }
  private async onSubmit() {
    console.log('submit...');
    try {
      this.doLoading = true;
      if (this.editObj) {
        await services.categoryService.update(this.formData);
        this.$message.success('更新成功！');
      } else {
        await services.categoryService.create(this.formData);
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

