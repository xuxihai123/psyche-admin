<template>
  <div class="more-setting">
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

