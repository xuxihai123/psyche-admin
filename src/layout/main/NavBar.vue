<template>
  <div class="navbar">
    <div class="left tools">
      <div class="switch-slider">
        <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
      </div>
      <div>
        <nav-link></nav-link>
      </div>
    </div>
    <div class="right tools">
      <div class="tool-item">
        <search></search>
      </div>
      <div class="tool-item">
        <i class="fa fa-arrows-alt fa-lg" aria-hidden="true" @click="openFullscreen"></i>
      </div>
      <div>
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import Search from './Search.vue';
import UserInfo from './UserInfo.vue';
import NavLink from './NavLink.vue';
@Component({
  components: {
    Search,
    UserInfo,
    NavLink,
  },
})
export default class NavBar extends Vue {
  /* View in fullscreen */
  public openFullscreen() {
    const elem: any = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  public closeFullscreen() {
    const doc: any = document;
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      /* Firefox */
      doc.mozCancelFullScreen();
    } else if (doc.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      /* IE/Edge */
      doc.msExitFullscreen();
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  padding: 0 20px;
  overflow: hidden;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  justify-content: space-between;

  .switch-slider {
    width: 20px;
    padding-right: 15px;
  }
  .tools {
    display: flex;
    height: 50px;
    line-height: 50px;
    flex: 1;
  }
  .left {
    justify-content: flex-start;
  }
  .right {
    justify-content: flex-end;
    .tool-item {
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
      i {
        cursor: pointer;
      }
    }
  }
}
</style>

