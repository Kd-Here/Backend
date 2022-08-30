const fs = require('fs');

let text = fs.readFileSync('dele.txt','utf-8');
console.log("The content of file is ");
console.log(text);



text = text.replace('kun','Kd'); 
console.log('\n Created an new file...');
fs.writeFileSync('kd.txt',text);