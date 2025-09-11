const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', function(numero) {
    const n1=parseFloat(numero)

    if(n1>20 ){
        console.log(n1/2);
    }
    else{
        console.log('Esse numero não é maior que 20');
    }
    rl.close();
        })
