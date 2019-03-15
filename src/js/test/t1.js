

function strToHexCharCode(str){
    if (str===''){
        return ''
    }
    var hexCharCode=[];
    // hexCharCode.push('0x');
    for(var i=0;i<str.length;i++){
        console.log(str.charCodeAt(i));
        hexCharCode.push(str.charCodeAt(i).toString(16));
    }
    return hexCharCode.join('');
}

// a=strToHexCharCode('Aabc110/&@');
// console.log('a:'+a);

// passphrase = passphrase[:16].ljust(16,b'\x00')
// var pwd='111';

const aes=require('../utils/aes')

let m=3,n=6;
var sText='34Kyph8rzUPCpndJfRvFSpQ5TWApHbjRZQy7AE4oiAc2xczyszTgx6';
console.log('sText1:'+sText,sText.length);
for (let i=0;i<16-n;i++){
    sText += '\x00';
}
if(n) m+=1;
console.log('sText2:'+sText,sText.length);
var sEncoded = ''
var iFrom = 0
for (var i=0;i<m;i++){
    sEncoded+=aes.Encrypt(sText.slice(iFrom,iFrom+16))
    iFrom+=16;
    console.log('sEncoded---:'+aes.Encrypt(sText.slice(iFrom,iFrom+16)));
}
console.log('sEncoded:'+sEncoded);






