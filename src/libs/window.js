const { app, BrowserWindow } = require('electron');
const path = require('path');

const preload = path.resolve(__dirname, "../preload/preload")
// const html = path.resolve(__dirname, "../web/index.html")

if (require('electron-squirrel-startup')) {
    app.quit();
}

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            preload
        }
    });

    // mainWindow.loadFile(html);
    mainWindow.loadURL("http://localhost:3000")
    mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
