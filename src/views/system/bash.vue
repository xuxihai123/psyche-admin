<template>
  <div class="bash-container">
    <div id="terminal"></div>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import ws from '@/services/ws';
import {Terminal} from 'xterm';
import * as attach from 'xterm/lib/addons/attach/attach';
import * as fit from 'xterm/lib/addons/fit/fit';
import * as winptyCompat from 'xterm/lib/addons/winptyCompat/winptyCompat';
import 'xterm/dist/xterm.css';

@Component
export default class BashShell extends Vue {
  private xterm: any;
  private mounted() {
    // No idea what these are about. Just copied them from the demo code
    Terminal.applyAddon(attach);
    Terminal.applyAddon(fit);
    Terminal.applyAddon(winptyCompat);
    // The terminal
    const term = new Terminal();
    const xterm = term as any;
    this.xterm = xterm;
    // No idea what this does
    xterm.winptyCompatInit();
    // This kinda makes sense
    const container = document.getElementById('terminal');
    term.open(container as any);
    ws.getSocket().then((socket) => {
      xterm.attach(socket);
    });
  }

  private destroyed() {
    this.xterm.destroy();
  }
}
</script>