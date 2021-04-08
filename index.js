const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  let mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      // contextIsolation: false,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
