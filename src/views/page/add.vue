<template>
  <main-panel class="post-container">
    <post-add-form type="page"></post-add-form>
  </main-panel>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import PostAddForm from '@/components/post/add.vue';
@Component({
  components: {PostAddForm},
})
export default class PageCreate extends Vue {}
</script>