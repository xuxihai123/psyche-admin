<template>
  <main-panel class="post-container" title="编辑文章">
    <post-update-form></post-update-form>
  </main-panel>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import PostUpdateForm from '@/components/post/edit.vue';
@Component({
  components: {PostUpdateForm},
})
export default class PostUpdate extends Vue {}
</script>