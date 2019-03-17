const {ipcMain}=require('electron')
let file=require('../utils/file')

ipcMain.on('save',function(event,data){
    file.save(data);
    
})

ipcMain.on('create',function(event,data){
    let addr=file.create(data);
    if(addr){
       event.sender.send('replycreate',addr);
    }
})