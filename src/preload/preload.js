const { ipcRenderer } = require("electron")

ipcRenderer.on("openFile", (event, filePaths) => console.log(filePaths))