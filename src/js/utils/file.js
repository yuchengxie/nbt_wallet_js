const fs = require('fs');
const path = require('path');
const fu = require('./fileutils');
const secret=require('./secret')

let default_fp = path.join(__dirname, '../../../data/');
let fp = path.join(__dirname, '../../../data/account/');
let filename='ttt.cfg';

fu.mkdirs(fp, function () {
    console.log('文件目录创建ok');
})

function create(data) {
    let aes_prvKey=secret.createWallet(data);
    var jsonData = {
        'encrypted': true,
        "type": "default",
        "vcn": 0,
        "coin_type": "00",
        "testnet": false,
        "prvkey": aes_prvKey,
        "pubkey": null
    }
    var data = JSON.stringify(jsonData);
    fu.mkdirs(fp, function () {
        saveToFile(data, filename)
    })
}

function save(pvk) {
    let aes_prvKey=secret.saveWallet(pvk)
    var jsonData = {
        'encrypted': true,
        "type": "default",
        "vcn": 0,
        "coin_type": "00",
        "testnet": false,
        "prvkey": aes_prvKey,
        "pubkey": null
    }
    var data=JSON.stringify(jsonData);
    fu.mkdirs(fp, function () {
        saveToFile(data, filename)
    })
}

function saveToFile(data, filename) {
    fs.writeFile(fp + filename, data, (err) => {
        if (err) {
            throw Error('err write');
        }
    })
    //default文件夹
    fs.writeFile(default_fp + 'default.cfg', data, (err) => {
        if (err) {
            throw Error('err write');
        }
    })
}

module.exports.saveToFile = saveToFile;
module.exports.create = create;
module.exports.save = save;
