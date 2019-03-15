const {ipcMain}=require('electron')
let file=require('../utils/file')

ipcMain.on('save',function(event,data){
    file.saveToFile(data,function(){
        event.sender.send('save_success');
    });
})

ipcMain.on('create',function(event,data){
    console.log(data.value);
    // file.AESEncryptFromStr(data);
    file.create(data);
})