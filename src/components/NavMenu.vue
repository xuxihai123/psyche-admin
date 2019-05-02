<template>
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="_activeIndex"
    :class="customClass"
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
        {{item.title}}
      </el-menu-item>
      <el-submenu
        :key="index"
        :index="generateIndex(item,index)"
        v-if="item.children&&item.children.length>0"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          {{item.title}}
        </template>
        <template v-for="(item2,index2) in item.children">
          <el-menu-item :key="index2" :index="generateIndex(item2,index2)">{{item2.title}}</el-menu-item>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import {isUndefined, isFunction} from 'lodash';

@Component
export default class NavMenu extends Vue {
  @Prop({type: Array})
  public readonly data!: any[];
  @Prop()
  public readonly defaultActive!: string;
  @Prop({required: true})
  public readonly indexKey!: string;
  @Prop({default: 'horizontal'})
  public readonly mode!: string;
  @Prop({default: 'slidebar'})
  public readonly customClass!: string;

  public generateIndex(item: any, index: number) {
    console.log(item);
    console.log(item[this._indexKey]);
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

<style lang="scss" scoped>
</style>
