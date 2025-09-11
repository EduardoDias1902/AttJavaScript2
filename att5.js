const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número:',function(numero1){
    rl.question('Digite mais um número:',function(numero2){
            var n1=parseFloat(numero1);
            var n2=parseFloat(numero2);
            var soma=parseFloat(n1+n2)

            if(soma>=10){
                console.log("O resultado da soma é:",(soma))
            }else{
                console.log('O resultado da soma é menor que 10')
            }
            rl.close()
    })
})