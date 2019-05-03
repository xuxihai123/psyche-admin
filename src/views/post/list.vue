<template>
  <div class="post-container">
    <post-list></post-list>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import PostList from '@/components/post/list.vue';
@Component({
  components: {PostList},
})
export default class PostManager extends Vue {}
</script>