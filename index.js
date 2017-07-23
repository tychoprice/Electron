//const app = require('electron').app
const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow;

  // const file = `${file:\/\/`

  const file = 'file://' + __dirname + '/index.html';

  mainWindow.loadURL(file);

  mainWindow.webContents.on('will-navigate', (e, url) => {
    e.preventDefault();
    console.log(url);

    mainWindow.webContents.send('open-file', url.slice(7));
  });
});
//
// var b1 = document.getElementById('b1');
//
// b1.addEventListener("click", function(){
//   document.body.style.background = 'blue';
// });
