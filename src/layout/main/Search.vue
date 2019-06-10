<template>
  <div :class="{'show':show}" class="header-search">
    <span class="search-icon">
      <i class="fa fa-search fa-lg" @click.stop="click"></i>
    </span>
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      :remote-method="querySearch"
      filterable
      default-first-option
      remote
      placeholder="Search"
      class="header-search-select"
      @change="change"
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :value="item"
        :label="item.title.join(' > ')"
      />
      <slot name="prefix">
        <i class="fa fa-search fa-lg" @click.stop="click"></i>
      </slot>
    </el-select>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class HeaderSearch extends Vue {
  private search: string = '';
  private options: any[] = [];
  private searchPool: any[] = [];
  private show: boolean = false;
  private fuse: boolean = false;

  private click() {
    this.show = true;
  }
  private clickOut() {
    this.show = false;
  }
  private change(val: string) {
    console.log(123);
  }
  private initFuse(list: any[]) {
    console.log(123);
  }
  private querySearch(query: string) {
    console.log('querySearch');
  }
}
</script>

<style lang="scss">
.header-search {
  font-size: 0 !important;
  display: flex;
  .search-icon {
    cursor: pointer;
    font-size: 16px;
    color: #ccc;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
