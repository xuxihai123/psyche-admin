<template>
  <div class="form-container">
    <el-form class="add-form" ref="form" :model="formData" label-width="80px" size="mini">
      <el-form-item label="标题">
        <el-input v-model="formData.title" style="width:420px"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <mavon-editor class="markdown-box" ref="md" v-model="formData.markdown" @imgAdd="imgAdd"/>
      </el-form-item>
      <el-form-item label="摘要">
        <el-input v-model="formData.excerpt" style="width:420px" :rows="5" type="textarea"></el-input>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <el-button type="primary" @click="showMoreSet(true)">更多设置</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="publish(true)" v-if="type==='page'">确定</el-button>
        <el-button type="primary" @click="publish(false)" v-if="type==='post'">保存</el-button>
        <el-button type="primary" @click="publish(true)" v-if="type==='post'">发布</el-button>
        <el-button @click="showMoreSet(false)">取消</el-button>
      </el-form-item>
    </el-form>
    <transition name="slide-fade">
      <more-setting
        :type="type"
        v-show="showSetting"
        class="fix-setting"
        @close="showMoreSet(false)"
        @change="changeSetting"
      ></more-setting>
    </transition>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import MoreSetting from './MoreSetting.vue';
import services from '@/services';
@Component({
  components: {
    MoreSetting,
  },
})
export default class PostCreate extends Vue {
  @Prop({default: 'post'})
  private type!: string;

  private formData: any = {
    title: '',
    markdown: '',
    excerpt: '',
  };
  private setting: any = {};
  private showSetting: boolean = false;

  private async publish(flag: boolean) {
    try {
      console.log('onSubmit...');
      const payload: any = {
        title: this.formData.title,
        markdown: this.formData.markdown,
        excerpt: this.formData.excerpt,
        slug: this.setting.slug,
        meta_title: this.setting.meta_title,
        meta_description: this.setting.meta_description,
        publish_date: this.setting.publish_date,
        imageUrl: this.setting.imageUrl,
        status: flag ? 'published' : 'draft',
        postType: this.type,
      };
      payload.tagIds = this.setting.tags.map((item: any) => item.id);
      await services.postService.create(payload);
      this.$message.success('添加成功！');
    } catch (err) {
      this.$message.error(err.message);
    } finally {
    }
  }
  private showMoreSet(flag: boolean) {
    if (flag) {
      // this.$scope.app.activePanel = true;
      this.showSetting = true;
    } else {
      this.showSetting = false;
      // setTimeout(() => {
      //   this.$scope.app.activePanel = false;
      // }, 300);
    }
  }
  private changeSetting(setting: any) {
    Object.assign(this.setting, setting);
  }
  private imgAdd(pos: any, $file: any) {
    console.log(pos);
    // step 1. upload image to server.
    // var formdata = new FormData();
    // formdata.append('image', $file);
    // axios({
    //   url: 'server url',
    //   method: 'post',
    //   data: formdata,
    //   headers: {'Content-Type': 'multipart/form-data'},
    // }).then((url) => {
    //   // step 2. replace url ![...](0) -> ![...](url)
    //   $vm.$img2Url(pos, url);
    // });
    // step 1. upload image to server.
    const $vm = this.$refs.md as any;
    services.fileService
      .upload({
        image: $file,
      })
      .then((result) => {
        // step 2. replace url ![...](0) -> ![...](url)
        $vm.$img2Url(pos, result.originalname);
      });
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
}
</style>

