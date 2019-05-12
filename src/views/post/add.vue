<template>
  <main-panel class="post-container" title="创建文章">
    <post-add-form></post-add-form>
  </main-panel>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import PostAddForm from '@/components/post/add.vue';
@Component({
  components: {PostAddForm},
})
export default class PostCreate extends Vue {}
</script>