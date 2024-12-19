const electron=require('electron');
const url=require('url');
const path=require('path');

const {app,BrowserWindow,Menu}=electron;

let mainWindow;
app.on('ready', () => {
    console.log('Uygulama çalışıyor');
    mainWindow=new BrowserWindow({
        width: 650,
        height: 700,
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, '/views/login.html'),
            protocol: 'file:',
            slashes: true
        })
    );
    // const mainMenu=Menu.buildFromTemplate(mainMenuTemplate);
    // Menu.setApplicationMenu(mainMenu);

});
// const mainMenuTemplate=[
//     {
//         label: 'File',
//         submenu: [
//             {
//                 label: 'Yeni dosya',
//                 accelerator: 'CmdOrCtrl+N',
//                 click() {
//                     console.log('Yeni dosya açılıyor');
//                 }
//             },
//             {
//                 label: 'Kaydet',
//                 accelerator: 'CmdOrCtrl+S',
//                 click() {
//                     console.log('Dosyayı kaydediliyor');
//                 }
//             },
//             {
//                 label: 'Çıkış',
//                 accelerator: 'CmdOrCtrl+Q',
//                 click() {
//                     app.quit();
//                 }
//             }
//         ]
//     }
// ]

