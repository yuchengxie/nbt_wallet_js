const {ipcRenderer}=require('electron')

let btnImport = document.getElementById('btnImport');
let address_input = document.getElementById('address_input');
let divModal = document.getElementById('divModal');
let modalContent = document.getElementById('modalContent');
let btnSave = document.getElementById('btnSave');
let phone=document.getElementById('phone')
let phonecode=document.getElementById('phonecode')
let btnCreate=document.getElementById('btnCreate')
let addr=document.getElementById('addr');

btnCreate.addEventListener('click',function(){
    let data=phone.value+phonecode.value;
    ipcRenderer.send('create',data);
})

btnSave.addEventListener('click', function () {
    divModal.style.display = 'none';
    let address = address_input.value;
    ipcRenderer.send('save',address);
})

btnImport.addEventListener('click', function () {
    divModal.style.display = 'block';
})
divModal.addEventListener('click', function () {
    this.style.display = 'none';
})
modalContent.addEventListener('click', function (e) {
    e = e || window.event;
    e.stopPropagation();
})



