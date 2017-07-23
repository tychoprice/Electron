const loader = require('monaco-loader');
const {ipcRenderer} = require('electron');
const fs = require('fs');

loader().then((monaco) => {
  const div = document.getElementsByClassName('container')[0];

  let editor = monaco.editor.create(div, {
    language: 'javascript',
    theme: 'hc-black',
    automaticLayout: true
  });

  ipcRenderer.on('open-file', (e, url) => {
    const data = fs.readFileSync(url, 'utf-8');
    editor.setModel
    (monaco.editor.createModel(data, 'javascript'));
  });
});
