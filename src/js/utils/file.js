const AES = require('./aes')
const bip32 = require('bip32')
const fs = require('fs');
const path = require('path');
const fu = require('./fileutils');

let default_fp = path.join(__dirname, '../../../data/');
let fp = path.join(__dirname, '../../../data/account/');
var filename = '';


function saveToFile(dataString, callback) {
    fu.mkdirsSync(fp);
    // a730053b48be5d1e88a110530998a0bf2afc625b92ac777bd98d9b37f15f513f
    // let encrypt = AES.Encrypt(dataString)
    // fs.writeFile(fp + filename, encrypt, (err) => {
    //     if (err) {
    //         console.log(err);
    //         return
    //     }
    // })
    // //default文件夹
    // fs.writeFile(default_fp + 'default.cfg', encrypt, (err) => {
    //     if (err) {
    //         console.log(err);
    //         return
    //     }
    // })
    // callback();
}

function create(filepath,data) {
    // var data = {
    //     'encrypted': true,
    //     "type": "default",
    //     "vcn": 0,
    //     "coin_type": "00",
    //     "testnet": false,
    //     "prvkey": "a3247bac1011465baf96f6bccb9352d145658830799ef231fc3caa3c28c1e4837144a842f9da65e3d89ecc2a92fe3edf45267295b35bd162eac8d7acc04284a7",
    //     "pubkey": null
    // }
}

function AESEncryptFromStr(data) {
    filename = data.filename;
    let str = data.value;
    let _BIP32 = bip32.fromSeed(Buffer.from(str));
    let _privateKey = _BIP32.privateKey.toJSON().data;
    let s0 = BufferToString(_privateKey);
    let s1 = _BIP32.toWIF(s0);
    let a = s1.length.toString(16);
    let s3 = a + s1;
    let aes_prvKey = AES.Encrypt(s3);
    console.log(aes_prvKey);
    create(aes_prvKey);
}

function BufferToString(buf) {
    let s = '';
    buf.forEach(element => {
        let tmp = element.toString(16);
        if (tmp.length == 1) {
            s += '0' + tmp;
        } else {
            s += tmp;
        }
    })
    return s;
}

module.exports.saveToFile = saveToFile;
module.exports.create = create;
module.exports.AESEncryptFromStr = AESEncryptFromStr;

