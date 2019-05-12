<template>
  <main-panel class="explorer-container">
    <div class="caidao-input">
      <el-input v-model="currentPath"></el-input>
      <el-button style="width:100px;margin-left:10px;">读取</el-button>
    </div>
    <div class="cai-dao">
      <div class="file-tree">
        <el-tree
          key="id"
          :data="folderTree"
          icon-class="open-status el-icon-tree"
          :props="defaultProps"
          :default-expand-all="true"
          @node-click="clickNode"
          @node-expand="expandNode"
          @node-collapse="collapseNode"
        ></el-tree>
      </div>
      <div class="file-list">
        <div class="list-content">
          <el-table :data="filelist" height="600">
            <el-table-column prop="filename" label="文件" fixed></el-table-column>
            <el-table-column prop="mtime" label="时间" width="150" fixed></el-table-column>
            <el-table-column prop="size" label="大小" width="100" fixed></el-table-column>
            <el-table-column prop="attr" label="属性" width="100" fixed></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </main-panel>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import systemSvc from '@/services/system';
import './style.scss';

const getUid = () =>
  Math.random()
    .toString(32)
    .substr(2);

@Component
export default class CaiDao extends Vue {
  private iconClass: string = '';
  private defaultProps: any = {
    children: 'children',
    label: 'filename',
    isLeaf: (data: any) => {
      console.log(data.filename);
      //   return data.children && data.children.length === 0;
    },
  };

  private currentPath: string = '';
  private currentNode: any;
  private filelist: any = [];
  private folderTree: any = [];
  private async mounted() {
    const result = await systemSvc.readCurrentDir();
    const {root, last} = this.buildTree(result);
    this.folderTree = root.children;

    console.log(root);
    await this.resolveNode(last, null);
  }
  private clickNode(node: any, vnode: any, instance: any) {
    console.log(node);
    console.log(vnode);
    console.log(instance);
    this.resolveNode(node, vnode);
  }
  private buildTree(folderName: string) {
    const folders = folderName.split('/');
    const root = {
      filename: '/',
      fullpath: '/',
      root: true,
      children: [],
      id: getUid(),
    };
    let prev: any = root;
    folders.forEach((folder: string) => {
      if (folder === '') {
        return;
      }
      const nextNode: any = {
        id: getUid(),
        filename: folder,
        $root: root,
        $parent: prev,
        children: [],
      };
      if (prev.root) {
        nextNode.fullpath = '/' + folder;
      } else {
        nextNode.fullpath = prev.fullpath + '/' + folder;
      }
      prev.children.push(nextNode);
      prev = nextNode;
    });
    return {
      root,
      last: prev,
    };
  }
  private async resolveNode(node: any, vnode: any) {
    // if (node.children.length) {
    //   return node;
    // }
    if (vnode) {
      //   vnode.loading = true;
    }
    this.currentPath = node.fullpath;
    const filelist = await systemSvc.readDir({path: node.fullpath});
    this.filelist = filelist;
    node.children = filelist
      .filter((item: any) => item.isDirectory)
      .map((item: any) => {
        const filename = item.filename.replace(/\/$/, '');
        return {
          id: getUid(),
          filename,
          fullpath: node.fullpath + '/' + filename,
          $root: node.$root,
          $parent: node,
          children: [],
        };
      });
    if (vnode) {
      vnode.loading = false;
    }
  }

  private renderContent(h: any, {node, data, store}: any) {
    return node;
  }
  private expandNode() {
    this.iconClass = 'el-icon-minus';
  }

  private collapseNode() {
    this.iconClass = 'el-icon-plus';
  }
}
</script>