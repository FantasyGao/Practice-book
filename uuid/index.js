const uuidv1 = require('uuid').v1;
const uuidv3 = require('uuid/v3');


const uuidv4 = require('uuid').v4;
const uuidv5 = require('uuid/v5');
const logger = console.log;

// logger('uuid v4版本:%s', uuidv4())

// logger('uuid v3版本:%s', uuidv3('myString', uuidv3.DNS))
logger('uuid v4版本:%s', uuidv4())
//logger('uuid v5版本:%s', uuidv5('hello.example.com', uuidv5.DNS))

// const crypto = require('crypto');
// const hexStr2hexArr = str => {  
//   let result = []  
//   for(let i = 0; i<str.length/2; i++) {    
//     const hexStr = str.slice(i*2, (i+1)*2)    
//      result.push(parseInt(hexStr, 16))
//   }  
//   return result
// }
// var tst = '0e306561559aa787d00bc6f70bbdfe3404cf03659e7 04f8534c00ffb659c4c8740cc942feb2da115a3f4155cbb8607497386656d7d1f34a42059d78f5a8dd1ef'
// var tst1= '0e306561559aa787d00bc6f70bbdfe3404cf03659e7 44f8534c00ffb659c4c8740cc942feb2da115a3f415dcbb8607497386656d7d1f34a42059d78f5a8dd1ef'
// var bt = hexStr2hexArr(tst)

// var bt1 = hexStr2hexArr(tst1)

// const hash = crypto
//  .createHash('md5')
//  .update(Buffer(bt))
//  .digest('hex')
 
//  const hash1 = crypto
//  .createHash('md5')
//  .update(Buffer(bt1))
//  .digest('hex')
// console.log('hash', hash)
// console.log('hash', hash1)

// logger('uuid v3版本:%s', uuidv3('0e306561559aa787d00bc6f70bbdfe3404cf03659e7', '04f8534c00ffb659c4c8740cc942feb2da115a3f4155cbb8607497386656d7d1f34a42059d78f5a8dd1ef'))
// logger('uuid v3版本:%s', uuidv3('0e306561559aa787d00bc6f70bbdfe3404cf03659e7', '44f8534c00ffb659c4c8740cc942feb2da115a3f415dcbb8607497386656d7d1f34a42059d78f5a8dd1ef'))

