const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a capital investida:',function(cap){
    rl.question('Digite a taxa de juros:',function(jur){
        rl.question('Digite o tempo(em meses):',function(temp){
            let c=parseFloat(cap);
            let j=parseFloat(jur/100);
            let t=parseFloat(temp);
            let resultado=parseFloat(c*(1+j)**t);

            console.log('Seu montante é:',(resultado))
          rl.close()
    })    
    })     
    })
