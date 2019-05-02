<template>
  <div class="toolbar">nav bar</div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component
export default class NavBar extends Vue {}
</script>

<style lang="scss" scoped>
.toolbar {
  height: 60px;
  background-color: white;
  border-bottom: 1px solid lightgray;
}
</style>

