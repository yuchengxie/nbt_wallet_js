var a='4dabbaf739e4dfec415fea38f1efdbb67a0786746db3d1063b2339a44fb13458';

// let aa = new Buffer(a).toString('base64');
// console.log(aa);

var bip32=require('bip32');

// var wif = require('wif')
let _BIP32 = bip32.fromSeed(Buffer.from(''));

console.log(_BIP32);