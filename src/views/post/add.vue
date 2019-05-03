<template>
  <div class="post-container">
    <post-add-form></post-add-form>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import PostAddForm from '@/components/post/add.vue';
@Component({
  components: {PostAddForm},
})
export default class PostCreate extends Vue {}
</script>