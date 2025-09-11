const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor do produto:',function(valor){
            var v=parseFloat(valor);
            var menosQue20=parseFloat((v/100)*45);
            var maisQue20=parseFloat((v/100)*30);

             if(v<20){
                console.log('valor do produto(com lucro de 45%):',(v+menosQue20))
            } else if(v>20){
                console.log('valor do produto(com lucro de 30%):',(v+maisQue20))
            }
            rl.close()
    })