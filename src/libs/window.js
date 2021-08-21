const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const { showOpenDialog } = require("./dialog")

const preload = path.resolve(__dirname, "../preload/preload")
// const html = path.resolve(__dirname, "../web/index.html")

if (require('electron-squirrel-startup')) {
    app.quit();
}

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1600,
        height: 900,
        webPreferences: {
            preload
        }
    });

    const menu = Menu.buildFromTemplate([
        {
            label: "文件", submenu: [
                {
                    label: "打开",
                    async click() {
                        const { canceled, filePaths } = await showOpenDialog()

                        if (!canceled) mainWindow.webContents.send("openFile", filePaths)
                    },
                    accelerator: "ctrl+o"
                },
                {
                    label: "reload",
                    click() {
                        mainWindow.reload()
                    },
                    accelerator: "ctrl+r"
                }
            ]
        }
    ])
    mainWindow.setMenu(menu)

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
