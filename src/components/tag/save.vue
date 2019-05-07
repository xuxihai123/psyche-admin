<template>
  <div class="more-setting" v-click-outside="closeModal">
    <el-form ref="form" :model="formData" label-position="top" label-width="80px">
      <h5 class="setting-title">发布设置</h5>
      <div class="image-setting">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <template v-if="imageUrl">
            <i class="el-icon-delete-solid" @click.stop="removeImage"></i>
            <img :src="imageUrl" class="avatar">
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
      <el-form-item label="Publish Date">
        <el-date-picker v-model="formData.abb" align="right" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="Tags">
        <el-select v-model="formData.type">
          <el-option value="js"></el-option>
          <el-option value="css"></el-option>
          <el-option value="html"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Excerpt">
        <el-input :rows="3" type="textarea" v-model="formData.excerpt"></el-input>
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
@Component
export default class MoreSetting extends Vue {
  private formData: any = {
    name: '',
    slug: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  };
  private imageUrl: string = '';
  private onSubmit() {
    console.log('submit...');
  }
  private handleAvatarSuccess() {
    console.log('handleAvatarSuccess...');
  }
  private beforeAvatarUpload(file: any) {
    // console.log(file);
  }
  private beforeRemove() {
    console.log('beforeRemove...');
  }
  private removeImage() {
    console.log('removeImage...');
    this.imageUrl = '';
  }
  private closeModal() {
    this.$emit('close');
  }
}
</script>

<style lang="scss">
.more-setting {
  position: absolute;
  right: 0;
  top: 75px;
  padding: 0 15px;
  margin-bottom: 15px;
  width: 300px;
  z-index: 2000;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #f4f8fb;
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
  .avatar-uploader {
    line-height: 140px;
    height: 140px;
    text-align: center;
    margin: 0 auto;
    background-color: white;
    position: relative;
    .el-icon-camera-solid {
      position: absolute;
      bottom: 8px;
      left: 8px;
    }
    .el-icon-delete-solid {
      position: absolute;
      top: 8px;
      right: 8px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 4px;
      box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.2);
      color: #fff;
      padding: 5px;
      //   z-index: 2001;
    }
    .el-upload {
      height: 140px;
      width: 287px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .setting-title {
    font-size: 14px;
    padding: 10px 0;
  }
  .el-select,
  .el-input {
    width: 100%;
  }
  .el-form-item {
    margin-bottom: 0;
  }
  .el-form-item__label {
    padding: 0px;
  }
  .btns {
    text-align: right;
    line-height: 36px;
    padding: 10px 0px;
  }
}
</style>

