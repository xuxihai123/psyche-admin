declare module 'v-click-outside' {
  interface VueMavonEditor {
    install: (Vue: any) => any;
  }
  let editor: VueMavonEditor;
  export default editor;
}
