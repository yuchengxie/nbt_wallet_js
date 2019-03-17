const {ipcMain}=require('electron')
let file=require('../utils/file')

ipcMain.on('save',function(event,data){
    // file.saveToFile(data,function(){
    //     event.sender.send('save_success');
    // });
    file.save(data);
})

ipcMain.on('create',function(event,data){
    file.create(data);
})