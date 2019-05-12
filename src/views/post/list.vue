<template>
  <main-panel class="post-container" title="文章列表">
    <post-list></post-list>
  </main-panel>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import PostList from '@/components/post/list.vue';
@Component({
  components: {PostList},
})
export default class PostManager extends Vue {}
</script>