const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um numero:',function(numero1){
    rl.question('Digite outro numero:',function(numero2){
        rl.question('Digite mais um numero:',function(numero3){
            let n1=parseInt(numero1)
            let n2=parseInt(numero2)
            let n3=parseInt(numero3)
            let numeros=[n1,n2,n3]
            numeros.reverse()
            console.log(numeros)

          rl.close()
    })    
    })     
    })