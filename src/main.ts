import { app, BrowserWindow, session } from "electron";
import path from "path";
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

if (require("electron-squirrel-startup")) {
  app.quit();
}

app.disableHardwareAcceleration();
app.whenReady().then(() => installExtension(REACT_DEVELOPER_TOOLS));

async function createWindow() {
  if (BrowserWindow.getAllWindows().length > 0) {
    return;
  }

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        "Content-Security-Policy": [
          "default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self'"
        ]
      }
    });
  });

  mainWindow.webContents.openDevTools();

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }
}

app.on("ready", createWindow);
app.on("activate", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
