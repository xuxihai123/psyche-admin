<template>
  <div class="post-container">
    <post-update-form type="page"></post-update-form>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import PostUpdateForm from '@/components/post/edit.vue';
@Component({
  components: {PostUpdateForm},
})
export default class PageUpdate extends Vue {}
</script>