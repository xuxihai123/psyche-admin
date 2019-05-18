const caidao = (req, res) => {
  const body = req.body;
  const action = body.action;
  res.set('content-type', 'text/plain');
  if (action === 'index') {
    res.send('->|/home/toor/github/psyche/core/server/services	|<-');
  } else if (action === 'readdict') {
    res.send('->|webshell.js	2019-5-9 23:30:06	4994	- |<-');
  } else {
    res.json({
      status: 'ok',
    });
  }
};

const explorer = (req, res) => {
  const body = req.body;
  const path = body.path;

  const transform = (str) =>
    str
      .split('./')
      .map((item) => item.replace(/(\s+|\n)/g, ''))
      .filter((item) => !!item)
      .sort(function(a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
  //   res.set('content-type', 'text/plain');
  const folderRoot = `
    ./src
    ./mock
    ./node_modules
    ./public
    ./.git`;
  const fileRoot = `
    ./babel.config.js
    ./package.json
    ./README.md
    ./vue.config.js
    ./.gitignore
    ./yarn-error.log
    ./yarn.lock
    ./postcss.config.js
    ./.prettierrc
    ./.browserslistrc
    ./tslint.json
    ./tsconfig.json`;

  const foldersrc = `
    ./router
    ./store
    ./assets
    ./views
    ./common
    ./styles
    ./filters
    ./components
    ./services
    ./config
    ./types
    ./layout`;

  const filesrc = `
    ./shims-vue.d.ts
    ./main.ts
    ./registerServiceWorker.ts
    ./shims-tsx.d.ts
    ./App.vue`;

  if (path === 'get:/src') {
    res.json({
      status: 'ok',
      data: [
        ...transform(foldersrc).map((item) => ({
          filename: item,
          isDirectory: true,
          mtime: '2018-12-12 10:19:10',
          size: 12941,
        })),
        ...transform(filesrc).map((item) => ({
          filename: item,
          isDirectory: false,
          mtime: '2018-12-12 10:19:10',
          size: 12941,
        })),
      ],
    });
  } else {
    res.json({
      status: 'ok',
      data: [
        ...transform(folderRoot).map((item) => ({
          filename: item,
          isDirectory: true,
          mtime: '2018-12-12 10:19:10',
          size: 12941,
        })),
        ...transform(fileRoot).map((item) => ({
          filename: item,
          isDirectory: false,
          mtime: '2018-12-12 10:19:10',
          size: 12941,
        })),
      ],
    });
  }
};

export default {
  caidao,
  explorer,
};
