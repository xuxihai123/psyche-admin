function getSocket() {
  return new Promise((resolve, reject) => {
    // Open the websocket connection to the backend
    const protocol = location.protocol === 'https:' ? 'wss://' : 'ws://';
    const port = location.port ? `:${location.port}` : '';
    const socketUrl = `${protocol}${location.hostname}${port}/shell`;
    const socket = new WebSocket(socketUrl);
    // const socket = new WebSocket('ws://127.0.0.1:3000/shell');
    // Attach the socket to the terminal
    socket.onopen = (ev) => {
      console.log('onopen......');
      resolve(socket);
    };
    socket.onerror = (err) => {
      console.log('onerror......');
      reject(err);
    };
  });
}

export default {getSocket};
