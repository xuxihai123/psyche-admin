<template>
  <div class="app-wraper" :class="activePanel?'active-panel':''">
    <nav-menu
      class="slider-container"
      :defaultActive="$route.name"
      :data="data"
      index-key="name"
      @handleSelect="handleSelect"
    />
    <div class="main-container">
      <nav-bar class="nav-box"/>
      <div class="view-wraper">
        <router-view class="view-box"></router-view>
        <nav-footer class="footer-box"></nav-footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import NavBar from './NavBar.vue';
import NavMenu from './NavMenu.vue';
import NavFooter from './NavFooter.vue';
import fullMenu from '@/config/menu';
@Component({
  components: {
    NavBar,
    NavMenu,
    NavFooter,
  },
})
export default class Home extends Vue {
  private data: any[] = fullMenu;

  private get activePanel() {
    return this.$scope.app.activePanel;
  }
  private handleSelect(selectKey: string) {
    this.$router.push({name: selectKey});
  }
}
</script>

<style lang="scss">
// .main-panel {
//   display: flex;
//   justify-content: space-between;
//   // position: relative;
//   height: 100%;
//   height: 100%;
//   .sidebar-container {
//     flex: 0 0 250px;
//     text-align: left;
//     height: 100%;
//     margin-bottom: -3000px;
//     padding-bottom: 3000px;
//   }
//   .main-container {
//     flex: 1 0 0;
//     height: 100%;
//     .view-wraper {
//       padding: 10px 20px;
//     }
//     .view-box {
//       // margin: 0 20px;
//       background-color: #fff;
//       border: none;
//       border-radius: 5px;
//       position: relative;
//       margin-bottom: 24px;
//       box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
//     }
//   }
// }
.app-wraper {
  position: relative;
  height: 100%;
  width: 100%;
  .slider-container {
    transition: width 0.28s;
    width: 210px !important;
    // width: 64px !important;
    background-color: #304156;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
  }
  .main-container {
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: 210px;
    position: relative;
    .view-wraper {
      padding-bottom: 60px;
      .view-box {
        margin: 15px 20px;
        box-shadow: 0 5px 5px 2px rgba(0, 0, 0, 0.25);
        background-color: white;
        min-height: 500px;
        // padding-bottom: 60px;
      }
      .footer-box {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
      }
    }
  }
}

.active-panel {
  overflow: hidden;
}
</style>