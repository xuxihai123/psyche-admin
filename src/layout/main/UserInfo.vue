<template>
  <div class="user-info">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <!-- {{$scope.user.name}} -->
        <img :src="$scope.user.avatar" v-if="$scope.user">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="updatePwd">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component
export default class UserInfo extends Vue {
  private handleCommand(command: string) {
    console.log(command);
    if (command === 'logout') {
      this.logout();
    }
  }

  private logout() {
    this.$router.push('/login');
  }
}
</script>

<style lang="scss">
.user-info {
  height: 50px;
  line-height: 50px;
  outline: none;
  // padding: 15px 0;
  img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    border: 1px solid lightblue;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>

