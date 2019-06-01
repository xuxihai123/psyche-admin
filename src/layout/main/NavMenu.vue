<template>
  <div>
    <logo v-if="showLogo" :collapse="isCollapse"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="_activeIndex"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :collapse="isCollapse"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
        @select="handleSelect"
      >
        <template v-for="(item,index) in menuList">
          <el-menu-item
            :key="index"
            :index="generateIndex(item,index)"
            v-if="!item.children||item.children.length==0"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
          <el-submenu
            :key="index"
            :index="generateIndex(item,index)"
            v-if="item.children&&item.children.length>0"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <template v-for="(item2,index2) in item.children">
              <el-menu-item :key="index2" :index="generateIndex(item2,index2)">{{item2.title}}</el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import Logo from './Logo.vue';

@Component({
  components: {Logo},
})
export default class NavMenu extends Vue {
  @Prop({type: Array})
  public readonly data!: any[];
  @Prop()
  public readonly defaultActive!: string;
  @Prop({required: true})
  public readonly indexKey!: string;
  @Prop({default: 'horizontal'})
  public readonly mode!: string;

  private showLogo: boolean = true;

  private isCollapse: boolean = false;

  private variables: any = {
    menuBg: '#304156',
    menuText: '#fff',
    menuActiveText: '#1890ff',
  };

  public generateIndex(item: any, index: number) {
    // console.log(item);
    // console.log(item[this._indexKey]);
    return item[this._indexKey];
  }
  public handleSelect(indexStr: string) {
    console.log(indexStr);
    this.$emit('handleSelect', indexStr);
  }

  public get menuList() {
    return this.data || [];
  }
  public get _indexKey() {
    return this.indexKey;
  }

  public get _activeIndex() {
    return this.defaultActive;
  }
}
</script>

<style lang="scss">
.el-scrollbar {
  height: 100%;
}
.scrollbar-wrapper {
  height: 100%;
  margin-bottom: 0;
  overflow-x: hidden !important;
  .el-menu-item i,
  .el-submenu__title i {
    color: #909399;
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
  }
  .el-menu {
    border: none;
    height: 100%;
    margin-bottom: 30px;
    width: 100% !important;
    // li:hover {
    //   position: relative;
    //   &:after {
    //     display: block;
    //     position: absolute;
    //     content: '';
    //     height: 56px;
    //     width: 5px;
    //     z-index: 200;
    //     right: 0;
    //     top: 0;
    //     background-color: #409eff;
    //   }
    // }
  }
}
</style>
