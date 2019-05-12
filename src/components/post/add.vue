<template>
  <div class="form-container">
    <el-form class="add-form" ref="form" :model="formData" label-width="80px" size="mini">
      <el-form-item label="标题">
        <el-input v-model="formData.title" style="width:420px"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <mavon-editor class="markdown-box" v-model="formData.markdown" @imgAdd="imgAdd"/>
      </el-form-item>
      <el-form-item label="Meta">
        <el-input v-model="formData.title" style="width:420px"></el-input>
      </el-form-item>
      <el-form-item label="Meta描述">
        <el-input v-model="formData.title" style="width:420px" :rows="3" type="textarea"></el-input>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <el-button type="primary" @click="showSetting=true">更多设置</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
        <el-button @click="showSetting=false">取消</el-button>
      </el-form-item>
    </el-form>
    <transition name="slide-fade">
      <more-setting v-if="showSetting" class="fix-setting" @close="showSetting=false"></more-setting>
    </transition>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import MoreSetting from './MoreSetting.vue';
@Component({
  components: {
    MoreSetting,
  },
})
export default class PostCreate extends Vue {
  private formData: any = {
    title: '',
    markdown: '',
  };
  private showSetting: boolean = false;
  private onSubmit() {
    console.log('onSubmit...');
  }
  private imgAdd(files: any) {
    console.log(files);
  }
}
</script>

<style lang="scss">
.form-container {
  position: relative;
  .add-form {
    padding-bottom: 20px;
  }
  .markdown-box {
    min-height: 500px;
    width: 98%;
  }
  .fix-setting {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>

