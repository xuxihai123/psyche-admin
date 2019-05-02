<template>
  <div class="main-layout">
    <nav-menu class="left-box" :data="data" index-key="name" @handleSelect="handleSelect"/>
    <div class="right-box">
      <nav-bar class="toolbar"/>
      <div class="view-wraper">
        <router-view class="view-box"></router-view>
        <nav-footer class="footer-box"></nav-footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import NavMenu from '@/components/NavMenu.vue';
import NavFooter from '@/components/NavFooter.vue';
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

  private handleSelect(selectKey: string) {
    this.$router.push({name: selectKey});
  }
}
</script>

<style lang="scss">
// .main-layout {
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
.main-layout {
  // position: relative;
  height: 100%;
  width: 100%;
  display: table;
  .left-box {
    text-align: left;
    display: table-cell;
    width: 250px;
    li {
      width: 250px;
    }
  }
  .right-box {
    display: table-cell;
    width: 100%;
    // height: 100%;
    .view-wraper {
      .view-box {
        margin: 15px 20px;
        background-color: #fff;
        border: none;
        border-radius: 5px;
        box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
      }
    }
  }
}
</style>