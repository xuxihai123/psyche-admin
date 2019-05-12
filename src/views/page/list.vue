<template>
  <main-panel class="post-container">
    <post-list type="page"></post-list>
  </main-panel>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import PostList from '@/components/post/list.vue';
@Component({
  components: {PostList},
})
export default class PageManager extends Vue {}
</script>