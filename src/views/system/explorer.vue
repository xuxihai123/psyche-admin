<template>
  <main-panel class="explorer-container" title="文件浏览">
    <div class="file-list">
      <div class="list-content">
        <el-table :data="filelist" v-loading="loading" @row-click="switchDir">
          <el-table-column label="文件" fixed>
            <template slot-scope="scope">
              <i class="fa fa-folder" aria-hidden="true" v-if="scope.row.isDirectory"></i>
              <i class="fa fa-file-text" aria-hidden="true" v-if="!scope.row.isDirectory"></i>
              <span class="filename">{{scope.row.filename}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="mtime" label="时间" width="150" fixed></el-table-column>
          <el-table-column prop="size" label="大小" width="100" fixed></el-table-column>
          <el-table-column prop="attr" label="属性" width="100" fixed>-</el-table-column>
        </el-table>
      </div>
    </div>
  </main-panel>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import systemSvc from '@/services/system';
@Component
export default class FileExplorer extends Vue {
  private filelist: Array<{filename: string; isDirectory: boolean}> = [];
  private root: string = 'get:/';
  private loading: boolean = false;
  private async mounted() {
    try {
      this.loading = true;
      const result = await systemSvc.explorer({path: this.root});
      result.forEach((item: any) => (item.fullpath = this.root + item.filename));
      this.filelist = result;
    } catch (err) {
    } finally {
      this.loading = false;
    }
  }
  private async switchDir(item: any) {
    const path = item.fullpath;
    try {
      this.loading = true;
      const result = await systemSvc.explorer({path});
      result.forEach((temp: any) => (temp.fullpath = item.fullpath + '/' + temp.filename));
      this.filelist = result;
    } catch (err) {
    } finally {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
}
</script>

<style lang="scss">
.file-list {
  flex: 1 0 0;
  width: 100%;
  .list-content {
    width: 100%;
    height: 100%;
  }
  .el-table--small td,
  .el-table--small th {
    padding: 2px 0;
  }
  .filename {
    padding-left: 10px;
  }
}
</style>
