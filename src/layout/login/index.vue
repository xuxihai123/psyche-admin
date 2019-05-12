<template>
  <div class="login-layout">
    <router-view></router-view>
  </div>
</template>



<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component
export default class LoginLayout extends Vue {}
</script>

<style lang="scss" scoped>
.login-layout {
}
</style>