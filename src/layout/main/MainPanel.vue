<template>
  <div class="main-panel">
    <div class="main-title" v-if="title">{{title}}</div>
    <div class="main-content">
      <slot></slot>
    </div>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component
export default class MainPanel extends Vue {
  @Prop({default: '内容标题'})
  private title!: string;
}
</script>

<style lang="scss">
.main-panel {
  position: relative;
  .main-title {
    font-size: 16px;
    font-weight: 700;
    padding: 15px 20px;
  }
  .main-content {
    padding: 0 20px;
  }
}
</style>
