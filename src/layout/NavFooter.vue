<template>
  <div class="footer">
    <div class="footer-left">
      <a href="https://github.com/xuxihai123" target="_blank">@x373241884y</a>
      <a href="https://www.facebook.com/xuxihai123" target="_blank">
        <i class="fa fa-facebook"></i>
      </a>
      <a href="https://twitter.com/xuxihai123" target="_blank">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="mailto:xuxihai123@gmail.com">
        <i class="fa fa-google"></i>
      </a>
      <a href="https://github.com/xuxihai123" target="_blank">
        <i class="fa fa-github" aria-hidden="true"></i>
      </a>
    </div>
    <div class="footer-right">
      <span><i class="fa fa-copyright" aria-hidden="true"></i></span>
      <a href="https://github.com/xuxihai123/psyche" target="_blank">psyche</a>2019 Copyright.
      <span class="version">version: v1.0.0</span>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component
export default class NavBar extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  .footer-left {
    height: 100%;
    display: flex;
    list-style: none;
    a {
      display: inline-block;
      text-decoration: none;
      padding: 0 10px;
      i {
        cursor: pointer;
        -webkit-transition: all 0.1s ease;
        transition: all 0.1s ease;
        color: #fff;
        padding: 6px;
        width: 16px;
        height: 16px;
        text-align: center;
        box-sizing: content-box;
        font-size: 16px;
        &:hover {
          padding: 10px;
          margin: -4px;
        }
      }
    }
  }
  .version {
    display: inline-block;
    padding: 0 10px;
  }
  .footer-right {
    display: flex;
    a {
      display: inline-block;
      text-decoration: none;
      padding-right: 10px;
    }
  }
  .fa-facebook {
    background-color: #3b5998;
  }
  .fa-twitter {
    background-color: #55acee;
  }
  .fa-google {
    background-color: #dd4b39;
  }
  .fa-github {
    background-color: #6b6b6b;
  }
}
</style>

