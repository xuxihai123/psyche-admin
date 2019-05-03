declare module 'mavon-editor' {
  import {Component} from 'vue';
  interface VueMavonEditor {
    markdownIt: any;
    mavonEditor: Component;
    LeftToolbar: Component;
    RightToolbar: Component;
    install: (Vue: any) => any;
  }
  let editor: VueMavonEditor;
  export default editor;
}
