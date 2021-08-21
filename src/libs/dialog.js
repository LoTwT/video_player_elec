const { dialog } = require("electron")

const showOpenDialog = (win) => dialog.showOpenDialog(win, {})

module.exports = {
    showOpenDialog
}