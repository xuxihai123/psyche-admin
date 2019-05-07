<template>
  <div class="explorer-container">
    <el-tree
      :data="filelist"
      lazy
      :load="loadNode"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import systemSvc from '@/services/system';
@Component
export default class CaiDao extends Vue {
  private defaultProps: any = {
    children: 'children',
    label: 'filename',
    isLeaf: (item: any) => {
      return !item.isDirectory;
    },
  };
  private rootDir: string = '/home/toor';
  private filelist: any = [];
  private mounted() {
    systemSvc.readDir({path: this.rootDir}).then((result) => {
      this.filelist = result;
      console.log(this.filelist);
    });
  }
  private handleNodeClick(node: any) {
    console.log(node);
  }
  private loadNode(node: any, resolve: any) {
    const path = node.data.parent + '/' + node.data.filename;
    systemSvc.readDir({path}).then((result) => {
      //   this.filelist = result;
      //   console.log(this.filelist);
      resolve(result);
    });
  }
}
</script>