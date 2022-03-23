const {app , BrowserWindow} = require('electron')



// init app with electron
const initApp=()=>{

    const appElectron = new BrowserWindow({
        title: 'Electron od',
        resizable:true,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    })
    appElectron.loadURL(`file://${__dirname}/dist/index.html`)

    // dont need Menu
    appElectron.setMenu(null)


    appElectron.webContents.openDevTools();



};

app.on('ready',initApp)


app.on('closed', ()=>{
    app.quit()
})


