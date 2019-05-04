<template>
  <div class="navbar">
    <div class="left tools">
      <div class="switch-slider">
        <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
      </div>
      <div>首页/组件/Markdown</div>
    </div>
    <div class="right tools">
      <div class="tool-item">
        <search></search>
      </div>
      <div class="tool-item">
        <i class="fa fa-arrows-alt  fa-lg" aria-hidden="true"></i>
      </div>
      <div class="tool-item">
        <i class="fa fa-language fa-lg" aria-hidden="true"></i>
      </div>
      <div class="tool-item">
        <i class="fa fa-language  fa-lg" aria-hidden="true"></i>
      </div>
      <div class="tool-item">4</div>
    </div>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import Search from './Search.vue';
@Component({
  components: {
    Search,
  },
})
export default class NavBar extends Vue {}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  justify-content: space-between;

  .switch-slider {
    width: 20px;
    padding: 0 15px;
  }
  .tools {
    display: flex;
    height: 50px;
    line-height: 50px;
    flex: 1;
  }
  .left {
    justify-content: flex-start;
  }
  .right {
    justify-content: flex-end;
    .tool-item {
      height: 50px;
      line-height: 50px;
      width: 20px;
      padding: 0 15px;
    }
  }
}
</style>

