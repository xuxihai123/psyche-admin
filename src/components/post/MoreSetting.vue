<template>
  <div class="more-setting" v-click-outside="closeModal">
    <el-form ref="form" :model="formData" label-position="top" label-width="80px">
      <h5 class="setting-title">发布设置</h5>
      <div class="image-setting">
        <el-upload
          class="avatar-uploader"
          name="image"
          action="/api/v1/upload/single"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <template v-if="formData.imageUrl">
            <i class="el-icon-delete-solid" @click.stop="removeImage"></i>
            <img :src="formData.imageUrl" class="avatar">
          </template>
          <template v-else>
            <el-button>Upload post image</el-button>
            <i class="el-icon-camera-solid"></i>
          </template>
        </el-upload>
      </div>
      <el-form-item label="Post URL">
        <el-input v-model="formData.slug"></el-input>
      </el-form-item>
      <el-form-item label="Publish Date" v-if="type==='post'">
        <el-date-picker
          v-model="formData.publish_date"
          align="right"
          type="datetime"
          placeholder="选择日期时间"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="Tags" v-if="type==='post'">
        <el-select
          v-model="formData.tagIds"
          :multiple="true"
          :loading="tagLoading"
          :filterable="true"
        >
          <el-option v-for="item in tagsList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Meta">
        <el-input :rows="3" type="text" v-model="formData.meta_title"></el-input>
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
  private setting: any;
  @Prop({default: 'post'})
  private type!: string;

  private formData: any = {
    slug: '',
    tagIds: [],
    meta_title: '',
    meta_description: '',
    publish_date: '',
    imageUrl: '',
  };
  private tagLoading: boolean = false;
  private tagsList: any[] = [];
  private mounted() {
    this.loadTags();
    if (this.setting) {
      console.log(this.setting);
      Object.assign(this.formData, this.setting);
      this.formData.tagIds = this.setting.tags.map((item: any) => item.id);
    }
  }
  private onSubmit() {
    const obj = Object.assign({}, this.formData);
    obj.tags = this.formData.tagIds.map((id: number) => this.tagsList.find((tag) => tag.id === id));
    console.log(obj);
    this.$emit('change', obj);
    this.$emit('close');
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
  private handleAvatarSuccess(result: any) {
    console.log(result);
    console.log('handleAvatarSuccess...');
    this.formData.imageUrl = result.data.originalname;
  }
  private beforeAvatarUpload(file: any) {
    // console.log(file);
  }
  private beforeRemove() {
    console.log('beforeRemove...');
  }
  private removeImage() {
    console.log('removeImage...');
    this.formData.imageUrl = '';
  }
  private closeModal(event: any) {
    if (event.target && event.target.textContent === '更多设置') {
    } else {
      this.$emit('close');
    }
  }
}
</script>


<style lang="scss" scoped>
.more-setting {
  height: 800px;
}
</style>
