const { ipcRenderer } = require("electron")
const { preloadResponseToWeb } = require("./interactive.elec")

ipcRenderer.on("openFile", (event, filePaths) => preloadResponseToWeb("openFile", filePaths))