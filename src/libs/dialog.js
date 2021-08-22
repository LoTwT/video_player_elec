const { dialog } = require("electron")

const showOpenDialog = (win) => dialog.showOpenDialog(win, {
    properties: [
        "openFile",
        "multiSelections",
        "showHiddenFiles",
    ],
    filters: [
        { name: "影音文件", extensions: ["mp4", "avi", "flv"] },
        { name: "所有文件", extensions: ["*"] },
    ]
})

module.exports = {
    showOpenDialog
}