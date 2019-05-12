

<template>
  <div class="nav-link">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <a href="/">首页</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in crumbs" :key="index">
        <a :href="item.path" v-if="item.path">{{item.name}}</a>
        <span v-else>{{item.name}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class NavLink extends Vue {
  private crumbs: any = [];
  @Watch('$route.name')
  public watchRouteChange() {
    console.log(this.$route);
    const meta = this.$route.meta;
    if (meta) {
      this.crumbs = meta.breadcrumb;
    }
  }
}
</script>

<style lang="scss">
.nav-link {
  height: 20px;
  line-height: 20px;
  padding: 15px 0;
  .el-breadcrumb {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>

